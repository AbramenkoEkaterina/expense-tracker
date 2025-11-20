//список записей
import { useExpenses } from "../../context/ExpenseContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = () => {
    const { expenses } = useExpenses();

    if (expenses.length ===0) {
        return <div className="empty">Расходов пока нет</div>
    }

    return (
        <div className="expense-list">
            {expenses.map( e => (
                <ExpenseItem key={e.id} expense={e} />
            ))}
        </div>
    )
}