import React, { useCallback, useState } from 'react';
import styles from './scoreSelect.module.css'



const ScoreSelect = ({ optionData, value, onChange, row, style }) => {
    // console.log('value', value);
    // console.log(optionData);
    // const cellValue = value === null ? ' ' : value
    const [selectedValue, setSelectedValue] = useState(value);

    const handleOnChange = (e) => {
        // console.log('change', e.target.value);
        const newValue = e.target.value;
        setSelectedValue(newValue)
        onChange(row, newValue);
    }


    return (
        <span>
            <select
                value={selectedValue}
                // name='dumb'
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
        </span>

    );
};

export default ScoreSelect;
