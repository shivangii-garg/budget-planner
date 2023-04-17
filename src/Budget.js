import { useSelector } from "react-redux";

const Budget = () => {
  const budget = useSelector((state) => state.expenses.budget);
  return (
    <div
      style={{
        height: 50,
        width: 200,
        backgroundColor: "lightGrey",
        borderRadius: 5,
        padding: 15,
        boxSizing: "border-box"
      }}
    >
      <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;
