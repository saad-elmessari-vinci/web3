const fs = require("fs");
const path = require("path");
const { init } = require("../app");

const EXPENSES_FILE_PATH = path.join(__dirname, "../data/expenses.json");
const EXPENSES_INIT_FILE_PATH = path.join(
  __dirname,
  "../data/expenses.init.json"
);

function getAllExpenses() {
  const data = fs.readFileSync(EXPENSES_FILE_PATH, "utf8");
  return JSON.parse(data);
}

function addExpense(expense) {
  const expenses = getAllExpenses();
  expenses.push(expense);

  const updatedExpenses = JSON.stringify(expenses, null, 2);
  fs.writeFileSync(EXPENSES_FILE_PATH, updatedExpenses);
  return expense;
}

function resetExpenses() {
  const initialExpenses = fs.readFileSync(EXPENSES_INIT_FILE_PATH, "utf8");
  fs.writeFileSync(EXPENSES_FILE_PATH, initialExpenses);
  const expenses = JSON.parse(initialExpenses);
  return expenses;
}

module.exports = {
  getAllExpenses,
  addExpense,
  resetExpenses,
};
