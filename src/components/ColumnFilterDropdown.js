import React from 'react'

function ColumnFilterDrop({ column }) {
    const { filterValue, setFilter } = column

    const handleFilterValue = (e) => {
        setFilter(e.target.value)
    }
    return (
        <span>
            <select name='All' onChange={handleFilterValue}>
                <option value={''}> All</option>
                <option value={'LEAD-NEU'}> LEAD-NEU</option>
                <option value={'LEAD in Kontakt'}> LEAD in Kontakt</option>
                <option value={'Angebot Versendet'}> Angebot Versendet</option>

            </select>
            {/* <input
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            /> */}
        </span>
    )
}

export default ColumnFilterDrop