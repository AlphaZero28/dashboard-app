import React from 'react'

function QuelleFilter({ column }) {
    const { filterValue, setFilter } = column
    return (
        <span>
            <input
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    )
}

export default QuelleFilter