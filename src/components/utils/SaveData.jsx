import React from 'react'
import styles from './button.module.css'
import { LeadAPI } from '../../api/LeadAPI'

function SaveData({ updatedLead, setUpdatedLead }) {


    const onResponse = res => {
        console.log(res.data);
    }
    const onError = err => {
        console.log(err);
    }
    const handleOnClick = () => {
        // console.log('updated lead', updatedLead);
        let leadAPI = new LeadAPI()

        leadAPI.update_lead_data(onResponse, onError, updatedLead)
        setUpdatedLead([])
        console.log('updated data saved', updatedLead);
    }

    return (
        <button className={styles.savebtn} onClick={handleOnClick}>
            Speichern
        </button>

    )
}

export default SaveData