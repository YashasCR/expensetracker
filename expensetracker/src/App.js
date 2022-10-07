import { useState } from "react";
import "./App.css";
import Expense from "./components/ExpenseItem";
import data from "./data.js";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
function App() {
  const [filterYear,setFilterYear]=useState('2020');
  const expensedata = data.map((item) => {
    return <Expense key={item.id} {...item} />;
  });

  const filterChangeHandler=selectedYear=>{
    
    setFilterYear(selectedYear);

  };

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <div className="expenses">
      <ExpenseFilter selectedYear={filterYear} onFilterChange={filterChangeHandler}/>
        {expensedata}
      </div>
    </div>
  );
}

export default App;
