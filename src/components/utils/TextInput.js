import React, { useState } from 'react'

function TextInput({ title, placeholder, type, value, setValue }) {
    // const [name, setName] = useState('')
    return (
        <div>
            <div>
                {title}
            </div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}

            />
        </div>
    )
}

export default TextInput