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
                value={row.values.Produkt}
                row={row}
                onChange={(row, newVal) => {
                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            return { ...item, Produkt: newVal }
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
                value={row.values.Status}
                row={row}
                onChange={(row, newVal) => {
                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            return { ...item, Status: newVal }
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
                value={row.values.Score}
                row={row}
                onChange={(row, newVal) => {
                    const updatedData = leadData.map((item) => {
                        if (item.id === row.original.id) {
                            return { ...item, Score: newVal }
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