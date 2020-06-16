export default (expense) => expense.reduce((sum, { amount }) => sum + amount, 0);

// export default (expense) => {
//   return expense
//     .map((curr) => curr.amount)
//     .reduce((sum, { amount }) => sum + amount, 0)
// };