import type { NewExpense } from "../types/Expense";
import { getRandomPayer, getAmount } from "../utils/random";

interface ExpenseAddProps {
  handleAdd: (newExpense: NewExpense) => Promise<void>;
}

const ExpenseAdd = ({ handleAdd }: ExpenseAddProps) => {
  const onAdd = async () => {
    const newExpense: NewExpense = {
      date: new Date(Date.now()).toDateString(),
      description: "New Expense",
      payer: getRandomPayer(),
      amount: getAmount(),
    };
    console.log("onAdd");
    try {
      await handleAdd(newExpense);
    } catch (error) {
      console.error("Error while adding a new expense : ", error);
    }
  };
  return (
    <>
      <button onClick={onAdd}>Add</button>
    </>
  );
};

export default ExpenseAdd;
