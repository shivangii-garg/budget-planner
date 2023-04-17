import { useSelector } from "react-redux";

const RemainingBudget = () => {
  const budget = useSelector((state) => state.expenses.budget);
  const expenses = useSelector((state) => state.expenses.expense);

  return (
    <div
      style={{
        height: 50,
        width: 200,
        backgroundColor: "lightGreen",
        borderRadius: 5,
        padding: 15,
        boxSizing: "border-box"
      }}
    >
      <span style={{ color: "green" }}>
        Remaining: $
        {expenses.reduce((acc, val) => {
          return acc - val.price;
        }, budget)}
      </span>
    </div>
  );
};

export default RemainingBudget;
