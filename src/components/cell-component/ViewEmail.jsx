import React from 'react'
import { Link } from 'react-router-dom'

function ViewEmail() {
    return (
        <div style={{ color: '#0000ee', textDecoration: 'underline' }}>

            <Link to="https://www.google.com" target="_blank">
                E-Mail anzeigen
            </Link>
        </div>
    )
}

export default ViewEmail