import React from 'react'

function DropdownInput({ title, options, value, setValue }) {
    return (
        <div>
            <div>
                {title}
            </div>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
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