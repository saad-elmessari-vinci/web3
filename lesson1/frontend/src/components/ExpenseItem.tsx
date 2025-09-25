import type { Expense } from "../types/Expense";

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem = ({
  expense
}: ExpenseItemProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "8px",
        borderRadius: "6px",
      }}
    >
      <div>
        <strong>id:</strong> {expense.id}
      </div>
      <div>
        <strong>Date:</strong> {expense.date}
      </div>
      <div>
        <strong>Description:</strong> {expense.description}
      </div>
      <div>
        <strong>Payer:</strong> {expense.payer}
      </div>
      <div>
        <strong>Amount:</strong> {expense.amount} €
      </div>
    </div>
  );
};

export default ExpenseItem;
