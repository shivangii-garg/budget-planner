import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "./expenseSlice";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const dispatch = useDispatch();

  const handleSave = () => {
    const expense = {
      id: 12,
      item: name,
      price: price
    };
    dispatch(addExpense(expense));
    setName("");
    setPrice("");
  };

  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      <label>Cost: </label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddExpense;
