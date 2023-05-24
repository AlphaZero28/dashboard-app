import React, { useMemo } from 'react'
import styles from './filterDropdown.module.css'


function FilterDrop({ column, optionData, style }) {
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
        <span >
            <select
                name='All'
                onChange={handleFilterValue}
                className={styles.container}
                style={style}
            >
                <option value={''}>All</option>
                {
                    options.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))
                }
            </select>
        </span>
    )
}

export default FilterDrop