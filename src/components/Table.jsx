import React, { useEffect, useState, useMemo } from 'react'
import styles from './table.module.css'
import { LeadAPI } from '../api/LeadAPI'
import { useTable, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './Columns'
import ExportCSV from './utils/ExportCSV'
import NewLead from './utils/NewLead'
import SaveData from './utils/SaveData'
import DateFilter from './header-component/DateFilter'
// import { DateRangeColumnFilter, DefaultColumnFilter, Filter } from './header-component/DateFilterRange'

function Table() {
    const [leadData, setLeadData] = useState([])

    const [pageNumber, setPageNumber] = useState(1)

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

    const handleOnChange = (updatedData) => {
        console.log('updated', updatedData);
        setLeadData(updatedData)
    }


    const columns = useMemo(() =>
        COLUMNS(
            handleOnChange,
            leadData),
        [leadData])

    const data = useMemo(() => leadData, [leadData])
    const tableInstance = useTable(
        {
            columns,
            data,
            // defaultColumn: { Filter: DefaultColumnFilter }
        },
        useFilters,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow
    } = tableInstance
    const { pageIndex } = state


    return (
        <div>
            <div style={{ height: '60vh', overflow: 'auto' }}>
                <table {...getTableProps()} className={styles.table}>
                    <thead>
                        {
                            headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()} className={styles.th}>
                                            {column.render('Header')}
                                            <div>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className={styles.tbody}>
                        {page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className={styles.tr}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className={styles.td}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className={styles.paginationContainer}>
                <div>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Prev
                    </button>

                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    >
                        Next
                    </button>
                </div>


                <div>
                    <input
                        type='number'
                        // value={pageIndex + 1}
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            setPageNumber(pageNumber)
                        }}
                        style={{ width: '40px' }}
                    />

                    <button onClick={() => gotoPage(pageNumber)}>
                        Goto
                    </button>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <SaveData leadData={leadData} />
                <ExportCSV data={leadData} />

            </div>

            <NewLead setLeadData={setLeadData} />
        </div>
    )
}

export default Table
