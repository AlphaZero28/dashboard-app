import QuelleFilter from "./QuelleFilter"
import ColumnFilterDrop from "./ColumnFilterDropdown"
import DateFilter from "./DateFilter"
import { format, parse } from "date-fns"

export const COLUMNS = [
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
        Filter: QuelleFilter,
        disableFilters: true,
        Cell: ({ value }) => (
            <select value={value}>
                <option value={'Warmepumpe'}> Warmepumpe </option>
                <option value={'Klima'}> Klima </option>
                <option value={'Gasgerat'}> Gasgerat </option>
                <option value={'Warmepumpe + PV'}> Warmepumpe + PV </option>
            </select>
        )
    },
    {
        Header: "Status",
        accessor: 'Status',
        Filter: ColumnFilterDrop,
        Cell: ({ value }) => (
            <select value={value}>
                <option value={'LEAD-NEU'}> LEAD-NEU</option>
                <option value={'LEAD in Kontakt'}> LEAD in Kontakt</option>
                <option value={'Angebot Versendet'}> Angebot Versendet</option>
            </select>
        )
    },
    {
        Header: "Score",
        accessor: 'Score',
        Filter: QuelleFilter,
        disableFilters: true,
        Cell: ({ value }) => (
            <select value={value}>
                <option value={'A'}> A </option>
                <option value={'B'}> B </option>
                <option value={'C'}> C </option>
            </select>
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