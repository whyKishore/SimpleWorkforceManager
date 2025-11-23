export const formatDate = (dateString, format = "MM/DD/YYYY") => {
  if (!dateString) return "N/A";

  try {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return format === "DD/MM/YYYY" ? `${day}/${month}/${year}` : `${month}/${day}/${year}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};

export const formatDateTime = (dateString, format = "MM/DD/YYYY") => {
  if (!dateString) return "N/A";

  try {
    const date = new Date(dateString);
    const datePart = formatDate(dateString, format);
    const timePart = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return `${datePart}, ${timePart}`;
  } catch (error) {
    console.error("Error formatting datetime:", error);
    return "Invalid Date/Time";
  }
};
