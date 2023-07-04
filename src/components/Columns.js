import QuelleFilter from "./header-component/QuelleFilter"
import FilterDropdown from "./header-component/FilterDropdown"
import DateFilter from "./header-component/DateFilter"
import { format, parse, parseISO, isAfter, isBefore } from "date-fns"
import ScoreSelect from "./cell-component/ScoreSelect"
import { ScoreOption, StatusOption, ProduktOption } from "../config"
import DateRangeColumnFilter from "./header-component/DateFilterRange"
import Actions from "./cell-component/Actions"
import ViewEmail from "./cell-component/ViewEmail"
import { Link } from "react-router-dom"



function dateBetweenFilterFn(rows, id, filterValues) {
    const sd = filterValues[0] ? new Date(filterValues[0]) : undefined
    const ed = filterValues[1] ? new Date(filterValues[1]) : undefined

    if (ed || sd) {
        return rows.filter(r => {
            const cellDate = new Date(r.values[id])

            if (ed && sd) {
                return cellDate >= sd && cellDate <= ed
            } else if (sd) {
                return cellDate >= sd
            } else if (ed) {
                return cellDate <= ed
            }
        })
    } else {
        return rows
    }
}

dateBetweenFilterFn.autoRemove = val => !val;

const filterTypes = {
    exactText: (rows, id, filterValue) => {
        if (filterValue === '') {
            return rows; // Return all rows if filterValue is empty (All option selected)
        }
        return rows.filter((row) => row.values[id] === filterValue);
    },
    dateBetween: dateBetweenFilterFn,   /*<- LIKE THIS*/
    text: (rows, id, filterValue) => {
        return rows.filter(row => {
            const rowValue = row.values[id];
            return rowValue !== undefined
                ? String(rowValue)
                    .toLowerCase()
                    .startsWith(String(filterValue).toLowerCase())
                : true;
        });
    }

};

export const COLUMNS = (handleOnChange, setFilteredData, leadData, setLeadData, updatedLead, setUpdatedLead) => [
    {
        Header: 'Lead No.',
        accessor: 'id',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "Name",
        accessor: 'name',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "Telefon",
        accessor: 'telefon',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "E-Mail Adresse",
        accessor: 'email',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "Produkt",
        accessor: 'produkt',
        Filter: ({ column }) => (
            <FilterDropdown
                column={column}
                setFilteredData={setFilteredData}
                optionData={ProduktOption}
            />
        ),
        filter: 'exactText',
        Cell: ({ row }) => (
            <ScoreSelect
                style={{ width: '10rem' }}
                optionData={ProduktOption}
                value={row.values.produkt}
                row={row}

                onChange={(row, newVal) => {
                    let updatedItem;

                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            updatedItem = { ...item, produkt: newVal }; // Save the updated item
                            // console.log('updateditem inside', updatedItem);
                            return updatedItem
                            // return { ...item, status: newVal }
                        }
                        return item
                    });
                    handleOnChange(updatedData, updatedItem)
                }}
            />
        )

    },
    {
        Header: "Status",
        accessor: 'status',
        Filter: ({ column }) => (
            <FilterDropdown
                setFilteredData={setFilteredData}
                column={column}
                optionData={StatusOption}
            />
        ),
        Cell: ({ row }) => (
            <ScoreSelect
                style={{ width: '10rem' }}
                optionData={StatusOption}
                value={row.values.status}
                row={row}
                onChange={(row, newVal) => {
                    let updatedItem;

                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            updatedItem = { ...item, status: newVal }; // Save the updated item
                            // console.log('updateditem inside', updatedItem);
                            return updatedItem
                            // return { ...item, status: newVal }
                        }
                        return item
                    });
                    handleOnChange(updatedData, updatedItem)
                    // setUpdatedLead([...updatedLead, updatedItem])
                }}
            />
        )
    },
    {
        Header: "Score",
        accessor: 'score',
        Filter: ({ column }) => (
            <FilterDropdown
                style={{ width: '5rem' }}
                setFilteredData={setFilteredData}
                column={column}
                optionData={ScoreOption}
            />
        ),
        Cell: ({ row }) => (
            <ScoreSelect
                style={{ width: '5rem' }}
                optionData={ScoreOption}
                value={row.values.score}
                row={row}
                onChange={(row, newVal) => {
                    let updatedItem;

                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            updatedItem = { ...item, score: newVal }; // Save the updated item
                            // console.log('updateditem inside', updatedItem);
                            return updatedItem
                            // return { ...item, status: newVal }
                        }
                        return item
                    });
                    handleOnChange(updatedData, updatedItem)
                }}
            />
        )
    },
    {
        Header: "Quelle",
        accessor: 'quelle',
        Filter: QuelleFilter
    },
    {
        Header: "Datum",
        accessor: 'datum',
        Filter: DateRangeColumnFilter,
        filter: dateBetweenFilterFn,
        Cell: ({ row }) => {
            // console.log('val', row);
            const date = new Date(row.values.datum)

            return <span>{date.toLocaleDateString(date)}</span>

        }
    },
    {
        Header: "Actions",
        Cell: ({ row }) => (
            <Actions row={row} leadData={leadData} setLeadData={setLeadData} updatedLead={updatedLead} setUpdatedLead={setUpdatedLead} />
        )
    },
    {
        Header: 'E-Mail',
        accessor: 'email_view',
        Cell: ({ row }) => (
            // <div style={{ color: '#0000ee', textDecoration: 'underline' }}>

            <Link to="https://www.google.com" target="_blank" style={{ color: '#0000ee' }}>
                E-Mail anzeigen
            </Link>

        ),
        Filter: QuelleFilter,
        disableFilters: true
    }

]