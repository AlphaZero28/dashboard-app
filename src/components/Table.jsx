import React, { useEffect, useState, useMemo } from 'react'
import styles from './table.module.css'
import { LeadAPI } from '../api/LeadAPI'
import { useTable, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './Columns'
import ExportCSV from './utils/ExportCSV'
import NewLead from './utils/NewLead'
import SaveData from './utils/SaveData'



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
        setPageSize,
        prepareRow
    } = tableInstance

    const { pageIndex, pageSize } = state


    return (
        <div>
            <div
            // style={{ height: '65vh', overflow: 'auto' }}
            >
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
                <div className={styles.paginationUpper}>

                    <div style={{ width: '68%', display: 'flex', 'justifyContent': 'center', alignItems: 'center' }}>
                        <span className={styles.paginationInfo}>
                            Page{' '}
                            <strong >
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                        <button
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                            className={styles.btn}

                            style={{
                                backgroundColor: canPreviousPage ? null : 'lightgrey',
                                color: canPreviousPage ? 'white' : 'black'
                            }}
                        >
                            Previous
                        </button>
                        <input
                            type='number'
                            min={1}
                            max={pageOptions.length}
                            // value={pageIndex + 1}
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                setPageNumber(pageNumber)
                            }}
                            className={styles.input}
                        />

                        <button
                            onClick={() => gotoPage(pageNumber)}
                            className={styles.gotoBtn}
                        >
                            Goto
                        </button>
                        <button
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                            className={styles.btn}
                            style={{
                                backgroundColor: canNextPage ? null : 'lightgrey',
                                color: canNextPage ? 'white' : 'black'
                            }}
                        >
                            Next
                        </button>

                        <select
                            className={styles.dropPageContents}
                            value={pageSize}
                            onChange={e => setPageSize(Number(e.target.value))}
                        >
                            {
                                [10, 15, 20].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div >
                        <SaveData leadData={leadData} />
                        <ExportCSV data={leadData} />
                        <NewLead setLeadData={setLeadData} />
                    </div>


                </div>


                <div className={styles.gotoContainer}>
                    {/* <input
                        type='number'
                        // value={pageIndex + 1}
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            setPageNumber(pageNumber)
                        }}
                        className={styles.input}
                    />

                    <button
                        onClick={() => gotoPage(pageNumber)}
                        className={styles.btn}
                    >
                        Goto
                    </button> */}
                </div>
            </div>



        </div>
    )
}

export default Table
