import React, { useEffect, useMemo, useState } from 'react'
import styles from './filterDropdown.module.css'


function FilterDrop({ column, optionData, style, setFilteredData }) {
    const { setFilter, preFilteredRows, id, filteredRows } = column

    useEffect(() => {
        if (filteredRows && filteredRows.length > 0) {
            const filteredItem = filteredRows.map((item) => item.original)

            // console.log('filtered', filteredItem);
            setFilteredData(filteredItem)
        }
    }, [filteredRows])

    const handleFilterValue = (e) => {
        setFilter(e.target.value)

    }
    return (
        <span >
            <select
                name='Alle'
                onChange={handleFilterValue}
                className={styles.container}
                style={style}
            >
                <option value={''}>Alle</option>

                {
                    optionData.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))
                }
            </select>
        </span>
    )
}

export default FilterDrop