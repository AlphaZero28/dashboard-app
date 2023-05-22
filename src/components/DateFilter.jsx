import React from 'react'

function DateFilter({ column }) {
    const { filterValue, setFilter } = column
    const handleOnChange = (e) => {
        console.log(e.target.value);
        console.log(typeof e.target.value);
        setFilter(e.target.value)
    }
    return (
        <span>
            <input
                type='date'
                value={filterValue || ''}
                onChange={handleOnChange}
            />
        </span>
    )
}

export default DateFilter