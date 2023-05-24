import React from 'react'

function QuelleFilter({ column }) {
    const { filterValue, setFilter } = column

    const styles = {
        // backgroundColor: 'lightblue',
        borderRadius: '10px',
        height: '22px',
        width: '8rem',
        borderWidth: 0,
        outlineWidth: 0,
        marginTop: '5px',
        fontSize: '14',
        paddingLeft: '10px',


        // border: '0px',
    }
    return (
        <span>
            <input style={styles}
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    )
}

export default QuelleFilter