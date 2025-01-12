export const formatDate = (isoDate) => {
    const date = new Date(isoDate); // Parse the ISO date string
    const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-based) with leading zero
    const year = date.getFullYear(); // Get full year
    return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
  };
  