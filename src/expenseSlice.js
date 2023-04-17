import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    budget: 100,
    expense: []
  },
  reducers: {
    addExpense: (state, action) => {
      state.expense = [...state.expense, action.payload];
    },
    deleteExpense: (state, action) => {
      state.expense = state.expense.filter(
        (exp) => exp.item !== action.payload
      );
    }
  }
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
