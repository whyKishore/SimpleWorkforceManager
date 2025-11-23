// frontend/src/pages/MyAllowancesPage.js

import React, { useState, useEffect, useCallback } from "react";
import api from "../api";
import { Table, Card, Typography, message } from "antd";

const { Title } = Typography;

function MyAllowancesPage({ user }) {
  const [allowances, setAllowances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currencySymbol, setCurrencySymbol] = useState("$");

  // We use useCallback to stabilize the fetchData function
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch both allowances and the currency symbol
      const [allowanceRes, settingsRes] = await Promise.all([
        api.get("/allowances/my-allowances"),
        api.get("/settings"), // We need this for the currency symbol
      ]);

      setAllowances(allowanceRes.data);

      // Check if system settings (and symbol) exist
      if (settingsRes.data.system && settingsRes.data.system.currency_symbol) {
        setCurrencySymbol(settingsRes.data.system.currency_symbol);
      }
    } catch (err) {
      message.error("Failed to fetch allowances.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty dependency array, this function doesn't depend on props

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Run fetchData when the component loads

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => text || "N/A", // Show N/A if no description
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `${currencySymbol}${Number(amount).toFixed(2)}`,
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
    },
  ];

  return (
    <Card>
      <Title level={2} style={{ margin: 0, marginBottom: "24px" }}>
        My Allowances
      </Title>
      <p>This is a list of all allowances assigned to you.</p>
      <Table
        columns={columns}
        dataSource={allowances}
        loading={isLoading}
        rowKey="allowance_id"
        pagination={false}
      />
    </Card>
  );
}

export default MyAllowancesPage;
