import React, { useState } from 'react';

const ScoreSelect = ({ optionData, value, onChange, row }) => {
    // console.log('row', row);
    const [selectedValue, setSelectedValue] = useState(value);
    const handleOnChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue)
        onChange(newValue);
    };

    return (
        <select value={selectedValue} onChange={handleOnChange}>
            {
                optionData.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option>
                ))
            }
            {/* <option value="A"> A </option>
            <option value="B"> B </option>
            <option value="C"> C </option> */}
        </select>
    );
};

export default ScoreSelect;
