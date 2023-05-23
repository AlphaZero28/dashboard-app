import React, { useMemo } from 'react'

function FilterDrop({ column, optionData }) {
    const { setFilter, preFilteredRows, id } = column

    const options = useMemo(() => {
        const values = new Set()
        preFilteredRows.forEach((row) => {
            values.add(row.values[id])
        });
        return Array.from(values)
    }, [id, preFilteredRows])

    const handleFilterValue = (e) => {
        setFilter(e.target.value)
    }
    return (
        <span>
            <select name='All' onChange={handleFilterValue}>
                <option value={''}>All</option>
                {
                    options.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))
                }
            </select>
            {/* <input
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            /> */}
        </span>
    )
}

export default FilterDrop