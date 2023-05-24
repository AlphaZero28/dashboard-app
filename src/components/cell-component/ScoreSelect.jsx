import React, { useState } from 'react';
import styles from './scoreSelect.module.css'



const ScoreSelect = ({ optionData, value, onChange, row, style }) => {
    // console.log('row', row);
    const [selectedValue, setSelectedValue] = useState(value);
    const handleOnChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue)
        onChange(row, newValue);
    };


    return (
        <select
            value={selectedValue}
            onChange={handleOnChange}
            style={style}
            className={styles.container}
        >
            {
                optionData.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option>
                ))
            }
        </select>
    );
};

export default ScoreSelect;
