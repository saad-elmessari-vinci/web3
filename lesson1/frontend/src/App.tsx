import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import type { Expense, NewExpense } from "./types/Expense";

function App() {
  const [listExpenses, setListExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    setTimeout(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/expenses");
      if (!response.ok) {
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      }
      const expenses = await response.json();
      setListExpenses(expenses);
    } catch (error) {
      console.error("Error while retrieving expenses from API : ", error);
    }
  }, 2500);
  };

  const addExpense = async (newExpense: NewExpense) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newExpense),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://localhost:3000/api/expenses",
        options
      );
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const createdExpense = await response.json();
      return createdExpense;
    } catch (error) {
      console.error("Error while adding a new expense : ", error);
    }
  };

  const resetData = async () => {
    try {
      const options = {
        method: "POST",
      };
      const response = await fetch(
        "http://localhost:3000/api/expenses/reset",
        options
      );
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const resetExpenses = await response.json();
      setListExpenses(resetExpenses);
    } catch (error) {
      console.error("Error while resetting the data : ", error);
    }
  };

  return (
    <Home
      list={listExpenses}
      setListExpenses={setListExpenses}
      addExpense={addExpense}
      resetExpenses={resetData}
    />
  );
}

export default App;
