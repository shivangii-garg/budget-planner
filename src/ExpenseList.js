import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "./expenseSlice";
const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expense);
  const dispatch = useDispatch();
  const handleDelete = (expense) => {
    dispatch(deleteExpense(expense.item));
  };
  return (
    <div>
      <table>
        {expenses.length > 0 &&
          expenses.map((exp) => {
            return (
              <tr>
                <td>{exp.item}</td>
                <td>{exp.price}</td>
                <td>
                  <button onClick={() => handleDelete(exp)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default ExpenseList;
