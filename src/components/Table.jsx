import React, { useEffect, useState, useMemo } from 'react'
import styles from './table.module.css'
import { LeadAPI } from '../api/LeadAPI'
import { useTable, useFilters } from 'react-table'
import { COLUMNS } from './Columns'


function Table() {
    const [leadData, setLeadData] = useState([])

    const onResponse = res => {
        setLeadData(res.data)
        console.log(res.data)
    }
    const onError = err => {
        console.log(err)
    }
    let leadAPI = new LeadAPI
    useEffect(() => {
        leadAPI.get_all_leads(onResponse, onError)
    }, [])

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => leadData, [])
    const tableInstance = useTable(
        {
            columns,
            data
        },
        useFilters
    )

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <table {...getTableProps()} className={styles.header}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} className={styles.th}>
                                        {column.render('Header')}
                                        <div>
                                            {column.canFilter ? column.render('Filter') : null}
                                        </div>
                                    </th>
                                ))
                            }

                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className={styles.tr}>
                                {
                                    row.cells.map((cell) =>
                                    (
                                        <td {...cell.getCellProps()} className={styles.td}>
                                            {cell.render('Cell')}
                                        </td>
                                    )

                                    )
                                }

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table