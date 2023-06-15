import React from 'react'
import styles from './warningModal.module.css'
import { AiFillWarning } from 'react-icons/ai'
import { LeadAPI } from '../../api/LeadAPI';

function WarningModal({ setOpenDeleteModal, selectedRow, leadData, setLeadData }) {
    console.log('id', selectedRow);


    // setLeadData(leadData.filter(row_d => row_d.id !== row.original.id))
    //     // console.log('selected row', row.original.id);
    //     const row_id = {
    //         id: row.original.id
    //     }
    //     let leadAPI = new LeadAPI()
    //     leadAPI.delete_lead(onResponseDeleteRow, onError, row.original.id)

    const handleNo = () => {
        setOpenDeleteModal(false)
    }

    const handleYes = () => {
        setLeadData(leadData.filter(row_d => row_d.id !== selectedRow))

        const row_id = {
            id: selectedRow
        }
        let leadAPI = new LeadAPI()
        leadAPI.delete_lead(onResponseDeleteRow, onError, selectedRow)

        setOpenDeleteModal(false)
    }

    const onResponseDeleteRow = (res) => {
        console.log('deleted the row:', res.data);
    }
    const onError = (err) => {
        console.log(err);
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalBody}>
                <AiFillWarning size={35} color='blue' style={{ marginBottom: '20px' }} />
                {/* Are you sure to delete the row? */}
                Möchten Sie diesen Eintrag löschen?

                <div className={styles.btnContainer}>
                    <button className={styles.Ybtn} onClick={handleYes}>
                        Ja
                    </button>
                    <button className={styles.Nbtn} onClick={handleNo}>
                        Nein
                    </button>
                </div>
            </div>

        </div>
    )
}

export default WarningModal