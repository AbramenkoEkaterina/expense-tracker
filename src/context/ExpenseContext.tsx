//провайдер + API для работы с расходами (add/remove, persistence via localStorage)
//хранит массив расходов и функции addExpense, removeExpense, а также загружает/сохраняет их в localStorage.

import React, {
    createContext, //создать конткст
useContext,//потреблять контекст
useEffect,//побочные действия, к-ые требуется произвести при монтировании и размонтировании комп-та или при изменении его состояния
useState,//локалььное состояние
} from "react";
import type {ReactNode} from "react";
import type { Expense } from "../types/expense";


//Здесь описываем что именно мы будем хранить и предоставлять через контекст
type ExpenseContextType = {
    expenses: Expense[];
    addExpense: (e: Omit<Expense, 'id'>) => void;//Omit<T, Keys> — это утилита, которая берёт тип T и убирает из него указанные ключи.
    removeExpense: (id: string) => void;
    clearExpense: () => void;
    total: number;
}

const STORAGE_Key = 'expense_tracker_expenses_v1'; // ключ под которым сохраняем данные в браузере

//создаем контекст
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

//берем значение контекста, Если контекст не найден, 
// то есть компонент вызвал useExpenses вне ExpenseProvider — останови программу и скажи, что так нельзя.
export const useExpenses = () => {
    const ctx = useContext(ExpenseContext);
    if (!ctx) throw new Error('useExpenses must be used within ExpenseProvider');
    return ctx;
}


export const ExpenseProvider = ({ children }: {children: ReactNode}) => {

    //храним массив расходов
    const [expenses, setExpenses] = useState<Expense[]>(() => {
        try{
            const raw = localStorage.getItem(STORAGE_Key);
            //если данных нет, вернем пустой список
            if (!raw) return [];

            //если данные есть, превращаем данные из JSON в массив
            return JSON.parse(raw) as Expense[]
        } catch {
            // в случае ошибки парсинга
            return[]
        }
    });

    //когда expensee изменились то сохраняем их в localStorage
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_Key, JSON.stringify(expenses))
        } catch (err) {
            console.log("Ошибка сохранения в localStorage:", err)
        }
    }, [expenses]);

    //Добавить расход
    const addExpense = (e: Omit<Expense, 'id'>) => {
        const newExpense: Expense = {
            ...e,
            id: crypto.randomUUID(), //создаем уникальный id
        };

        //добавляем в массив трат
        setExpenses(prev => [...prev, newExpense]);
    }

    //удалить по id
    const removeExpense = (id: string) => {
        // оставить все траты кроме той, у которой id совпадает с переданным
        setExpenses(prev => prev.filter(exp => exp.id !==id));
    }

    //очистить все
    const clearExpense = () => {
        setExpenses([])
    };

    //посчитать сумму всех расходов
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    //передаем данные и функции детям
    return(
        <ExpenseContext.Provider value={{
            expenses,
            addExpense,
            removeExpense,
            clearExpense,
            total,
        }}>
            {children}
            </ExpenseContext.Provider>
    )
}