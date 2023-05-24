import React, { useState } from 'react'
import styles from './input.module.css'


function TextInput({ title, placeholder, type, value, setValue }) {
    // const [name, setName] = useState('')
    return (
        <div>
            <div className={styles.label}>
                {title}
            </div>

            <input
                className={styles.textInput}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}

            />
        </div>
    )
}

export default TextInput