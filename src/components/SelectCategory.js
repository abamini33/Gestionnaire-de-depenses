import { useState } from "react";

const SelectCategory = ({ onChange }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const selectedCategory = e.target.value;
        setValue(selectedCategory);
        onChange(selectedCategory);
    };

    return (
        <select name={"select"} value={value} onChange={handleChange}>
            <option value={""}>Liste de catégories</option>
            <option value={"Alimentation"}>Alimentation</option>
            <option value={"Logement"}>Logement</option>
            <option value={"Transport"}>Transport</option>
            <option value={"Divertissement"}>Divertissement</option>
            <option value={"Santé"}>Santé</option>
            <option value={"Éducation"}>Éducation</option>
            <option value={"Autres"}>Autres</option>
        </select>
    );
};

export default SelectCategory;
