import React from 'react'
import styles from './table.module.css'

function Table() {
    const heading_item = ['Lead No.', 'Name', 'Telefon', //
        'E-Mail', 'Produkt', 'Status', 'Score', 'Quelle', 'Datum']


    return (
        <div>
            <div className={styles.header}>
                {
                    heading_item.map((item, idx) => (
                        <div key={idx}>
                            {item}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Table