//главная страница: собирает все компоненты
import { ExpenseForm } from "../components/ExpenseForm/ExpenseForm";
import { ExpenseList } from "../components/ExpenseList/ExpenseList";
import { Total } from "../components/Total/Total";
import "./Home.css";

export const Home = () => {
    return (
        <div className="home">
            <h1>Трекер расходов</h1>
            
            <ExpenseForm />
            <ExpenseList />
            <Total />
        </div>
    )
}