import { useState } from "react";
import ExpenseList from "./ExpenseList";
import { useSelector } from "react-redux";

const SearchExpense = () => {
  const [input, setInput] = useState("");
  const [isSuggestionActive, setIsSuggestionActive] = useState(false);
  const [suggestedList, setSuggestedList] = useState([]);

  const expenses = useSelector((state) => state.expenses.expense);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setInput(e.target.value);
      setIsSuggestionActive(true);
      const query = input.toLowerCase();
      const filteredList = expenses.filter((item) => {
        return item.item.toLowerCase().indexOf(query) > -1;
      });
      setSuggestedList(filteredList);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Expense..."
        value={input}
        onChange={(e) => handleChange(e)}
      />
      {suggestedList && <SuggestedExpenseList />}
    </div>
  );
};

export default SearchExpense;
