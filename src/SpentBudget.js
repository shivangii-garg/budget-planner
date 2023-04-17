import { useSelector } from "react-redux";

const SpentBudget = () => {
  const expenses = useSelector((state) => state.expenses.expense);
  return (
    <div
      style={{
        height: 50,
        width: 200,
        backgroundColor: "lightBlue",
        borderRadius: 5,
        padding: 15,
        boxSizing: "border-box"
      }}
    >
      <span style={{ color: "blue" }}>
        Spent so far: $
        {expenses.reduce((acc, val) => {
          return acc + Number(val.price);
        }, 0)}
      </span>
    </div>
  );
};

export default SpentBudget;
