import React from "react";

const ExpenseTotal = ({ expenses }) => {
    const total = expenses
        .reduce((acc, curr) => acc + curr.amount, 0)
        .toFixed(2);

    const categoryTotal = expenses.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});

    return (
        <div>
            <h2>Total des dépenses mensuelles: {total} €</h2>
            <h3>Détail par catégorie:</h3>
            <ul>
                {Object.keys(categoryTotal).map((category, index) => (
                    <li key={index}>
                        {category}: {categoryTotal[category].toFixed(2)} €
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseTotal;
