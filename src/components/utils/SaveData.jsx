import React from 'react'
import styles from './button.module.css'
import { LeadAPI } from '../../api/LeadAPI'

function SaveData({ leadData }) {

    const onResponse = res => {
        console.log(res.data);
    }
    const onError = err => {
        console.log(err);
    }
    const handleOnClick = () => {
        let leadAPI = new LeadAPI()

        leadAPI.update_lead_data(onResponse, onError, leadData)
        console.log('updated data saved', leadData);
    }

    return (
        <button className={styles.btn} onClick={handleOnClick}>
            Speichern
        </button>

    )
}

export default SaveData