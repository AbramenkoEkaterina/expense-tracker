//TS-тип для одной записи
//Пояснение: интерфейс одной записи. id — уникальный (используем Date.now() или uuid), date — формат YYYY-MM-DD.

export interface Expense {
    id: string;
    title: string;
    amount: number; //сумма трат одной операции
    date: string; // yyyy-mm-dd
}