import { useState } from "react";
import "./App.css";
import Expense from "./components/ExpenseItem";
import data from "./data.js";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpensesChart from './components/ExpenseChart';
function App() {
  const [filterYear, setFilterYear] = useState("2020");
  const [expenseFile, setExpenseFile] = useState(data);

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = expenseFile.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  console.log(filteredExpenses);

  const addExpenseHandler = (expense) => {
    setExpenseFile((prevExpenseFile) => {
      return [expense, ...prevExpenseFile];
    });
  };

  let noDataOnFilter=<h2 className="noDataFilter">No data found.</h2>

  const expensedata = filteredExpenses.map((item) => {
    return <Expense key={item.id} {...item} />;
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses">
        
        <ExpenseFilter
          selectedYear={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length===0 && noDataOnFilter}
        {expensedata}
      </div>
    </div>
  );
}

export default App;
