import QuelleFilter from "./header-component/QuelleFilter"
import FilterDropdown from "./header-component/FilterDropdown"
import DateFilter from "./header-component/DateFilter"
import { format, parse } from "date-fns"
import ScoreSelect from "./cell-component/ScoreSelect"
import { ScoreOption, StatusOption, ProduktOption } from "../config"


const filterTypes = {
    exactText: (rows, id, filterValue) => {
        if (filterValue === '') {
            return rows; // Return all rows if filterValue is empty (All option selected)
        }
        return rows.filter((row) => row.values[id] === filterValue);
    },
};

export const COLUMNS = (handleProduktChange, handleStatusChange, handleScoreChange, tableData) => [
    {
        Header: 'Lead No.',
        accessor: 'id',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "Name",
        accessor: 'Name',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "Telefon",
        accessor: 'Telefon',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "E-Mail",
        accessor: 'E-mail',
        Filter: QuelleFilter,
        disableFilters: true
    },
    {
        Header: "Produkt",
        accessor: 'Produkt',
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
                value={row.values.Produkt}
                row={row}
                onChange={newVal => {
                    const updatedItem = { ...row.original, Produkt: newVal }
                    handleProduktChange(updatedItem)
                }}
            />
        )

    },
    {
        Header: "Status",
        accessor: 'Status',
        Filter: ({ column }) => (
            <FilterDropdown
                column={column}
                optionData={StatusOption}
            />
        ),
        Cell: ({ row }) => (
            <ScoreSelect
                optionData={StatusOption}
                value={row.values.Status}
                row={row}
                onChange={newVal => {
                    const updatedItem = { ...row.original, Status: newVal }
                    handleStatusChange(updatedItem)
                }}
            />
        )
    },
    {
        Header: "Score",
        accessor: 'Score',
        Filter: ({ column }) => (
            <FilterDropdown
                column={column}
                optionData={StatusOption}
            />
        ),
        Cell: ({ row }) => (
            <ScoreSelect
                optionData={ScoreOption}
                value={row.values.Score}
                row={row}
                onChange={newVal => {
                    const updatedItem = { ...row.original, Score: newVal }
                    handleScoreChange(updatedItem)
                }}
            />
        )
    },
    {
        Header: "Quelle",
        accessor: 'Quelle',
        Filter: QuelleFilter
    },
    {
        Header: "Datum",
        accessor: 'Datum',
        // Cell: ({ val }) => {
        //     let formattedDate = '';

        //     try {
        //         const dateObj = parse(val, "yyyy-MM-dd'T'HH:mm:ssX", new Date());
        //         formattedDate = format(dateObj, 'dd/MM/yyyy');
        //     } catch (error) {
        //         // Handle error if parsing fails
        //         console.log('Error parsing date:', error);
        //     }

        //     return formattedDate;
        // },
        Filter: DateFilter
    }
]