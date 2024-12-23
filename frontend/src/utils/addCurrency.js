// Convert the number to a formatted string
export const addCurrency = num => {
  return `PKR ${num?.toLocaleString('en-IN')}`;
};
