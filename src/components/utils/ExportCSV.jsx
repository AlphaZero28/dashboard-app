import React from 'react'
import styles from './button.module.css'
import { saveAs } from 'file-saver'

function ExportCSV({ data }) {

    const exportToCSV = data => {
        const csvData = convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'lead_data.csv');
    }
    const convertToCSV = data => {
        const rows = [];

        // Extracting headers
        const headers = Object.keys(data[0]);
        rows.push(headers.join(','));

        // Extracting data rows
        data.forEach(item => {
            const values = Object.values(item);
            rows.push(values.join(','));
        });

        return rows.join('\n');
    }

    return (
        <button
            onClick={() => exportToCSV(data)}
            className={styles.btn}
        >
            EXPORT CSV
        </button>
    )
}

export default ExportCSV