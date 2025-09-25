var express = require("express");
const {
  getAllExpenses,
  addExpense,
  resetExpenses,
} = require("../services/expenses");
var router = express.Router();

/* GET all expenses. */
router.get("/expenses", function (_req, res, _next) {
  try {
    const expenses = getAllExpenses();
    return res.json(expenses);
  } catch (error) {
    console.error("Error retrieving expenses : ", error);
    return res.status(500);
  }
});

/* POST create a new expense */
router.post("/expenses", function (req, res, _next) {
  try {
    const expense = {
      id: Date.now().toString(),
      date: req.body.date,
      description: req.body.description,
      payer: req.body.payer,
      amount: parseFloat(req.body.amount),
    };
    const newExpense = addExpense(expense);
    return res.json(newExpense).status(201);
  } catch (error) {
    console.error("Error while creating a new expense : ", error);
    return res.status(500);
  }
});

/* POST reset the expenses to initial data */
router.post("/expenses/reset", function (_req, res, _next) {
  try {
    const newExpenseList = resetExpenses();
    return res.json(newExpenseList).status(200);
  } catch (error) {
    console.error("Error while resetting the expenses : ", error);
    return res.status(500);
  }
});

module.exports = router;
