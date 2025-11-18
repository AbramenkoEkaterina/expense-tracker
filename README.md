Структура проекта

```
src/
 ├─ components/
 │   ├─ Header/
 │   │    └─ Header.tsx
 │   ├─ Button/
 │   │    └─ Button.tsx
 │   ├─ ExpenseItem/
 │   │    └─ ExpenseItem.tsx
 │   ├─ ExpenseList/
 │   │    └─ ExpenseList.tsx
 │   ├─ ExpenseForm/
 │   │    └─ ExpenseForm.tsx
 │   └─ Total/
 │        └─ Total.tsx
 │
 ├─ pages/
 │   └─ Home.tsx
 │
 ├─ context/
 │   └─ ExpenseContext.tsx
 │
 ├─ types/
 │   └─ expense.ts
 │
 └─ styles/
     ├─ global.css
     └─ variables.css
     ```

##Общая логика приложения

###ExpenseContext 
хранит массив расходов и функции addExpense, removeExpense, а также загружает/сохраняет их в localStorage.

###Home
отображает Header, Total, ExpenseList и (по кнопке) ExpenseForm.

###ExpenseForm
собирает данные (title, amount, date) и вызывает addExpense.

###ExpenseList
рендерит ExpenseItem для каждого расхода; ExpenseItem позволяет удалить запись.