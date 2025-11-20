//одна запись (карточка расхода)
 import type { Expense } from "../../types/expense";
 import { useExpenses } from "../../context/ExpenseContext";
 import "./ExpenseItem.css";

 export const ExpenseItem = ({ expense }: {expense: Expense}) => {
    const { removeExpense } = useExpenses();

    return(
        <div className="expense-item">
            <div>
                <strong>{expense.title}</strong>
                <div className="expense-date">{expense.date}</div>
            </div>

            <div className="expense-right">
                <span className="expense-amount">{expense.amount} ₽</span>

                <button
                className="expense-remove"
                onClick={() => removeExpense(expense.id)}>
                    ✕
                </button>
            </div>
        </div>
    )
 }