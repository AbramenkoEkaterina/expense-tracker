//форма добавления расхода

import { useState } from "react";
import { useExpenses } from "../../context/ExpenseContext";
import './ExpenseForm.css'

export const ExpenseForm = () => {
  const { addExpense } = useExpenses();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const hadleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !amount || !date) {
      alert("Заполните все поля");
      return;
    }

    addExpense({
      title,
      amount: Number(amount),
      date,
    });

    //очистить форму
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={hadleSubmit} className="expense-form">
      <h3>Добавить расход</h3>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="expense-input"
      />

      <input
        type="number"
        placeholder="Сумма"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="expense-input"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
       className="expense-input"
      />

      <button type="submit" className="expense-button">
        Добавить
      </button>
    </form>
  );
};
