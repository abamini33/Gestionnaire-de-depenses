import React, { useContext } from "react";
import { ExpenseContext } from "../App";

const ExpenseList = ({ expenses }) => {
    const { dispatch } = useContext(ExpenseContext);

    const handleDelete = (index) => {
        dispatch({ type: "DELETE_EXPENSE", payload: index });
    };

    return (
        <div>
            <h2>Liste des dépenses</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.amount.toFixed(2)} € - {expense.category}
                        <button onClick={() => handleDelete(index)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
