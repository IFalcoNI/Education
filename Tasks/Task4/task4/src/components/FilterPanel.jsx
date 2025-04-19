import React from "react";

function FilterPanel({ selectedCategory, onCategoryChange }) {
    const getButtonClass = (category) => {
        let baseClass = "mx-4 my-2 p-2 border rounded";
        if (selectedCategory === category) {
            baseClass += " bg-green-300 text-white";
        }
        return baseClass;
    };

    return (
        <div className="mb-4">
            <button
                onClick={() => onCategoryChange("All")}
                className={getButtonClass("All")}
            >
                All
            </button>

            <button
                onClick={() => onCategoryChange("Work")}
                className={getButtonClass("Work")}
            >
                Work
            </button>

            <button
                onClick={() => onCategoryChange("Study")}
                className={getButtonClass("Study")}
            >
                Study
            </button>

            <button
                onClick={() => onCategoryChange("Personal")}
                className={getButtonClass("Personal")}
            >
                Personal
            </button>
        </div>
    );
}

export default FilterPanel;
