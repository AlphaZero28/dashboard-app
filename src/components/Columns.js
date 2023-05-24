import QuelleFilter from "./header-component/QuelleFilter"
import FilterDropdown from "./header-component/FilterDropdown"
import DateFilter from "./header-component/DateFilter"
import { format, parse, parseISO, isAfter, isBefore } from "date-fns"
import ScoreSelect from "./cell-component/ScoreSelect"
import { ScoreOption, StatusOption, ProduktOption } from "../config"
// import DateFilterRange from "./header-component/DateFilterRange"

import DateRangeColumnFilter from "./header-component/DateFilterRange"
// dateBetweenFilterFn.autoRemove = val => !val;


function dateBetweenFilterFn(rows, id, filterValues) {
    let sd = new Date(filterValues[0]);
    let ed = new Date(filterValues[1]);
    // console.log(rows, id, filterValues)
    return rows.filter(r => {
        var time = new Date(r.values[id]);
        // console.log(time, ed, sd)
        if (filterValues.length === 0) return rows;
        return (time >= sd && time <= ed);
    });
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

export const COLUMNS = (handleOnChange, leadData) => [
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
        Header: "E-Mail",
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
                optionData={ProduktOption}
            />
        ),
        filter: 'exactText',
        Cell: ({ row }) => (
            <ScoreSelect
                optionData={ProduktOption}
                value={row.values.produkt}
                row={row}
                onChange={(row, newVal) => {
                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            return { ...item, produkt: newVal }
                        }
                        return item
                    });
                    handleOnChange(updatedData)
                }}
            />
        )

    },
    {
        Header: "Status",
        accessor: 'status',
        Filter: ({ column }) => (
            <FilterDropdown
                column={column}
                optionData={StatusOption}
            />
        ),
        Cell: ({ row }) => (
            <ScoreSelect
                optionData={StatusOption}
                value={row.values.status}
                row={row}
                onChange={(row, newVal) => {
                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            return { ...item, status: newVal }
                        }
                        return item
                    });
                    handleOnChange(updatedData)
                }}
            />
        )
    },
    {
        Header: "Score",
        accessor: 'score',
        Filter: ({ column }) => (
            <FilterDropdown
                column={column}
                optionData={StatusOption}
            />
        ),
        Cell: ({ row }) => (
            <ScoreSelect
                optionData={ScoreOption}
                value={row.values.score}
                row={row}
                onChange={(row, newVal) => {
                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            return { ...item, score: newVal }
                        }
                        return item
                    });
                    handleOnChange(updatedData)
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
        filter: dateBetweenFilterFn
        // Filter: DateFilter
        // filter: dateBetweenFilterFn
    }

]