import React, { useState } from 'react'
import TextInput from './TextInput'
import DropdownInput from './DropdownInput'
import { ScoreOption, StatusOption, ProduktOption } from '../../config'
import styles from './newLead.module.css'
import { LeadAPI } from '../../api/LeadAPI'
import Modal from './Modal'


function NewLead({ setLeadData }) {


    const [openModal, setOpenModal] = useState(false)





    return (

        <>
            <button
                onClick={() => setOpenModal(true)}
                className={styles.Btn}
            >
                Lead Erstellen
            </button>

            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
        </>

    )
}

export default NewLead