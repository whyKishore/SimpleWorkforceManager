// Verification script to check if all fixes are properly applied
// Run this after upgrade: node verifySetup.js

const db = require("./db");
const fs = require("fs");
const path = require("path");

const checks = {
  passed: 0,
  failed: 0,
  warnings: 0,
};

function pass(message) {
  console.log(`✅ PASS: ${message}`);
  checks.passed++;
}

function fail(message) {
  console.log(`❌ FAIL: ${message}`);
  checks.failed++;
}

function warn(message) {
  console.log(`⚠️  WARN: ${message}`);
  checks.warnings++;
}

function info(message) {
  console.log(`ℹ️  INFO: ${message}`);
}

async function checkDatabaseIndexes() {
  console.log("\n=== Checking Database Indexes ===");
  
  try {
    const result = await db.query(`
      SELECT count(*) as index_count 
      FROM pg_indexes 
      WHERE schemaname = 'public'
    `);
    
    const count = parseInt(result.rows[0].index_count);
    
    if (count >= 40) {
      pass(`Found ${count} indexes (expected 40+)`);
    } else if (count >= 29) {
      warn(`Found ${count} indexes (expected 40+, but 29 new indexes present)`);
    } else {
      fail(`Found only ${count} indexes (expected 40+). Run: node addIndexes.js`);
    }
    
    // Check specific critical indexes
    const criticalIndexes = [
      'idx_tasks_assigned_to',
      'idx_attendance_user_id',
      'idx_messages_conversation_id',
      'idx_complaints_user_id',
    ];
    
    for (const indexName of criticalIndexes) {
      const indexCheck = await db.query(`
        SELECT indexname 
        FROM pg_indexes 
        WHERE schemaname = 'public' AND indexname = $1
      `, [indexName]);
      
      if (indexCheck.rows.length > 0) {
        pass(`Critical index exists: ${indexName}`);
      } else {
        fail(`Missing critical index: ${indexName}`);
      }
    }
    
  } catch (err) {
    fail(`Database index check failed: ${err.message}`);
  }
}

async function checkConnectionPool() {
  console.log("\n=== Checking Connection Pool Configuration ===");
  
  try {
    const poolConfig = db.pool.options;
    
    if (poolConfig.max) {
      pass(`Connection pool max configured: ${poolConfig.max}`);
      if (poolConfig.max < 20) {
        warn(`Pool max is ${poolConfig.max}, recommended: 20+`);
      }
    } else {
      warn("Connection pool max not explicitly configured (using default: 10)");
    }
    
    if (poolConfig.min) {
      pass(`Connection pool min configured: ${poolConfig.min}`);
    } else {
      warn("Connection pool min not configured (using default: 0)");
    }
    
    if (poolConfig.idleTimeoutMillis) {
      pass(`Idle timeout configured: ${poolConfig.idleTimeoutMillis}ms`);
    } else {
      warn("Idle timeout not configured (using default: 10000ms)");
    }
    
    // Check active connections
    const connResult = await db.query(`
      SELECT count(*) as conn_count 
      FROM pg_stat_activity 
      WHERE datname = $1
    `, [process.env.DB_DATABASE]);
    
    const connCount = parseInt(connResult.rows[0].conn_count);
    info(`Current active connections: ${connCount}`);
    
  } catch (err) {
    fail(`Connection pool check failed: ${err.message}`);
  }
}

function checkRateLimiting() {
  console.log("\n=== Checking Rate Limiting ===");
  
  try {
    const indexPath = path.join(__dirname, 'index.js');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    if (indexContent.includes('express-rate-limit')) {
      pass("Rate limiting package imported");
    } else {
      fail("Rate limiting package not imported");
    }
    
    if (indexContent.includes('loginLimiter')) {
      pass("Login rate limiter configured");
    } else {
      fail("Login rate limiter not configured");
    }
    
    if (indexContent.includes('apiLimiter')) {
      pass("API rate limiter configured");
    } else {
      fail("API rate limiter not configured");
    }
    
    if (indexContent.includes('/api/auth/login') && indexContent.includes('loginLimiter')) {
      pass("Login endpoint protected with rate limiter");
    } else {
      fail("Login endpoint not protected with rate limiter");
    }
    
  } catch (err) {
    fail(`Rate limiting check failed: ${err.message}`);
  }
}

function checkHTTPLogging() {
  console.log("\n=== Checking HTTP Logging ===");
  
  try {
    const indexPath = path.join(__dirname, 'index.js');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    if (indexContent.includes('morgan')) {
      pass("Morgan logging package imported");
    } else {
      fail("Morgan logging package not imported");
    }
    
    if (indexContent.includes('app.use(morgan')) {
      pass("HTTP logging middleware configured");
    } else {
      fail("HTTP logging middleware not configured");
    }
    
    if (indexContent.includes('NODE_ENV')) {
      pass("Environment-aware logging configured");
    } else {
      warn("Environment-aware logging not configured");
    }
    
  } catch (err) {
    fail(`HTTP logging check failed: ${err.message}`);
  }
}

function checkDependencies() {
  console.log("\n=== Checking Dependencies ===");
  
  try {
    const packagePath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    const requiredDeps = {
      'express-rate-limit': 'Rate limiting',
      'morgan': 'HTTP logging',
      'express': 'Web framework',
      'pg': 'PostgreSQL client',
      'socket.io': 'WebSocket server',
      'bcrypt': 'Password hashing',
      'jsonwebtoken': 'JWT authentication',
    };
    
    for (const [dep, description] of Object.entries(requiredDeps)) {
      if (packageJson.dependencies[dep]) {
        pass(`${description} (${dep}) installed: ${packageJson.dependencies[dep]}`);
      } else {
        fail(`${description} (${dep}) not installed`);
      }
    }
    
  } catch (err) {
    fail(`Dependency check failed: ${err.message}`);
  }
}

function checkEnvironmentVariables() {
  console.log("\n=== Checking Environment Variables ===");
  
  const requiredVars = [
    'PORT',
    'DB_USER',
    'DB_HOST',
    'DB_DATABASE',
    'DB_PASSWORD',
    'DB_PORT',
    'JWT_SECRET',
    'CORS_ORIGIN',
    'FRONTEND_URL',
  ];
  
  for (const varName of requiredVars) {
    if (process.env[varName]) {
      pass(`${varName} configured`);
    } else {
      fail(`${varName} not configured`);
    }
  }
  
  if (process.env.NODE_ENV) {
    info(`NODE_ENV: ${process.env.NODE_ENV}`);
  } else {
    warn("NODE_ENV not set (defaults to development)");
  }
}

function checkDocumentation() {
  console.log("\n=== Checking Documentation ===");
  
  const requiredDocs = [
    'README.md',
    'UPGRADE_GUIDE.md',
    'FIXES_SUMMARY.md',
    'QUICK_REFERENCE.md',
    'SRS/CONSISTENCY_ANALYSIS_REPORT.md',
    'SRS/FIXES_APPLIED.md',
    'SRS/1.9 Use Cases.md',
  ];
  
  for (const doc of requiredDocs) {
    const docPath = path.join(__dirname, '..', doc);
    if (fs.existsSync(docPath)) {
      pass(`Documentation exists: ${doc}`);
    } else {
      warn(`Documentation missing: ${doc}`);
    }
  }
}

function checkMigrationScript() {
  console.log("\n=== Checking Migration Script ===");
  
  const scriptPath = path.join(__dirname, 'addIndexes.js');
  if (fs.existsSync(scriptPath)) {
    pass("Migration script exists: addIndexes.js");
  } else {
    fail("Migration script missing: addIndexes.js");
  }
}

async function runAllChecks() {
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║   Simple Workforce Manager - Setup Verification           ║");
  console.log("║   Version 1.1.0                                            ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
  
  try {
    await checkDatabaseIndexes();
    await checkConnectionPool();
    checkRateLimiting();
    checkHTTPLogging();
    checkDependencies();
    checkEnvironmentVariables();
    checkDocumentation();
    checkMigrationScript();
    
    console.log("\n╔════════════════════════════════════════════════════════════╗");
    console.log("║   Verification Summary                                     ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`✅ Passed:   ${checks.passed}`);
    console.log(`❌ Failed:   ${checks.failed}`);
    console.log(`⚠️  Warnings: ${checks.warnings}`);
    
    if (checks.failed === 0) {
      console.log("\n🎉 All critical checks passed! System is ready for production.");
      if (checks.warnings > 0) {
        console.log("⚠️  Some warnings present - review above for details.");
      }
      process.exit(0);
    } else {
      console.log("\n❌ Some checks failed. Please review and fix issues above.");
      console.log("\nCommon fixes:");
      console.log("- Missing indexes: Run 'node addIndexes.js'");
      console.log("- Missing dependencies: Run 'npm install'");
      console.log("- Missing config: Check backend/.env file");
      process.exit(1);
    }
    
  } catch (err) {
    console.error("\n❌ Verification failed with error:", err.message);
    process.exit(1);
  } finally {
    await db.pool.end();
  }
}

// Run verification
runAllChecks();
