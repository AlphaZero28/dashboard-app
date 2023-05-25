import React from 'react'
import styles from './input.module.css'


function DropdownInput({ title, options, value, setValue }) {
    return (
        <div>
            <div className={styles.label}>
                {title}
            </div>

            <select
                className={styles.dropInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                <option value={''}>-- Wählen --</option>
                {
                    options.map((item, idx) => (
                        <option value={item} key={idx}>
                            {item}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropdownInput