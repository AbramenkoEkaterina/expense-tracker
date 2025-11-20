//компонент показа общей суммы

import { useExpenses } from "../../context/ExpenseContext";
import "./Total.css";

export const Total = () => {
    const { total } = useExpenses();

    return (
        <div className="total-box">
            Общая сумма: <strong>{total} ₽</strong>
        </div>
    )
}