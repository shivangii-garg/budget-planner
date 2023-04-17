import "./styles.css";
import Budget from "./Budget";
import RemainingBudget from "./RemainingBudget";
import SpentBudget from "./SpentBudget";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import SearchExpense from "./SearchExpense";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>My Budget Planner</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Budget />
        <RemainingBudget />
        <SpentBudget />
      </div>
      <h2>Expenses</h2>
      {/* <SearchExpense /> */}
      <ExpenseList />
      <AddExpense />
    </div>
  );
}
