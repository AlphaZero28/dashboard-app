import React, { useState } from 'react'
import styles from './input.module.css'


function TextInput({ style, title, placeholder, type, value, setValue, required }) {
    // const [name, setName] = useState('')

    const handleOnChange = e => {
        setValue(e.target.value)
        // const input = e.target;
        // input.setCustomValidity('Please provide a value for this field.');
    }
    return (
        <div>
            <div className={styles.label}>
                {title}
            </div>

            <input
                required={required}
                style={style}
                className={styles.textInput}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleOnChange}

            />
        </div>
    )
}

export default TextInput