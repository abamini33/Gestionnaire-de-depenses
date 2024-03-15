import React, { useState } from "react";
import SelectCategory from "./SelectCategory";

const ExpenseForm = ({ addExpense }) => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !category || parseFloat(amount) <= 0) return;
        addExpense({ amount: parseFloat(amount), category });
        setAmount("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Montant"
                value={amount}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value === "" || parseFloat(value) >= 0) {
                        setAmount(value);
                    }
                }}
            />
            <SelectCategory onChange={handleCategoryChange} />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default ExpenseForm;
