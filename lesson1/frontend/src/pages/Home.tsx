import { useState } from "react";
import ExpenseAdd from "../components/ExpenseAdd";
import ExpenseItem from "../components/ExpenseItem";
import type { Expense, NewExpense } from "../types/Expense";

interface HomeProps {
  list: Expense[];
  setListExpenses: (newList: Expense[]) => void;
  addExpense: (newExpense: NewExpense) => Promise<Expense>;
  resetExpenses: () => Promise<void>;
}
const Home = ({
  list,
  setListExpenses,
  addExpense,
  resetExpenses,
}: HomeProps) => {
  const [message, setMessage] = useState<string | null>(null);

  const handleAdd = async (newExpense: NewExpense) => {
    setMessage(null);
    console.log("handleAdd");
    const createdExpense = await addExpense(newExpense);
    const newList = [...list, createdExpense];
    setListExpenses(newList);
  };

  const handleReset = async () => {
    try {
      setListExpenses([]);
      await resetExpenses();
      setMessage("successful reset");
      setTimeout(() => setMessage(null), 2500);
    } catch (error) {
      console.error(
        "handleReset function : error while resetting data : ",
        error
      );
    }
  };
  return (
    <>
      {list.length !== 0
        ? list.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
          })
        : "Loading ..."}

      <div>
        <ExpenseAdd handleAdd={handleAdd} />
        <div>
          <button onClick={handleReset}>Reset Data</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
