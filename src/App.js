import React, { useReducer, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import "./styles/App.css";

const initialState = {
    expenses: JSON.parse(localStorage.getItem("expenses")) || [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            const updatedExpenses = [...state.expenses, action.payload];
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
            return {
                ...state,
                expenses: updatedExpenses,
            };
        case "DELETE_EXPENSE":
            const filteredExpenses = state.expenses.filter(
                (_, index) => index !== action.payload
            );
            localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
            return {
                ...state,
                expenses: filteredExpenses,
            };
        default:
            return state;
    }
};

export const ExpenseContext = React.createContext();

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(state.expenses));
    }, [state.expenses]);

    const addExpense = (expense) => {
        dispatch({ type: "ADD_EXPENSE", payload: expense });
    };

    return (
        <ExpenseContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <h1>Gestion des dépenses personnelles</h1>
                <ExpenseForm addExpense={addExpense} />
                <ExpenseList expenses={state.expenses} />
                <ExpenseTotal expenses={state.expenses} />
            </div>
        </ExpenseContext.Provider>
    );
};

export default App;
