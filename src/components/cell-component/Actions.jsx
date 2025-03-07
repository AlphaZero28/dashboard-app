import React, { useState } from 'react'
import { RiDeleteBin5Line, RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import DeleteModal from '../utils/DeleteModal'
import EditModal from '../utils/EditModal'
import styles from './actions.module.css'


function Actions({ row, leadData, setLeadData, updatedLead, setUpdatedLead }) {

    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)

    const handleDeleteRow = (row) => {
        console.log('selectedrpw', row.original.id);
        setOpenDeleteModal(true)
    }

    const handleEditRow = (row) => {
        setOpenEditModal(true)
    }

    return (
        <div className={styles.container}>
            <button
                onClick={() => handleEditRow(row)}
                className={styles.btn}
            >
                <FiEdit color='black' size={20}

                />
            </button>

            <button
                onClick={() => handleDeleteRow(row)}
                className={styles.btn}
            >
                <RiDeleteBinLine color='red' size={22}

                />
            </button>

            {
                openEditModal ?
                    <EditModal
                        openModal={openEditModal}
                        setOpenModal={setOpenEditModal}
                        row={row}
                        leadData={leadData}
                        setLeadData={setLeadData}
                        updatedLead={updatedLead}
                        setUpdatedLead={setUpdatedLead}
                    />
                    : null
            }

            {
                openDeleteModal ?
                    <DeleteModal
                        setOpenDeleteModal={setOpenDeleteModal}
                        selectedRow={row.original.id}
                        leadData={leadData}
                        setLeadData={setLeadData}
                    />
                    : null
            }

        </div>
    )
}

export default Actions