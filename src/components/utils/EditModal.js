import React, { useState, useEffect } from 'react'
import TextInput from './TextInput'
import DropdownInput from './DropdownInput'
import { LeadAPI } from '../../api/LeadAPI'
import { ScoreOption, StatusOption, ProduktOption } from '../../config'
import styles from './editModal.module.css'

function Modal({ openModal, setOpenModal, row, leadData, setLeadData }) {

    // console.log('row', row.original);
    const [name, setName] = useState(row.original.name)
    const [telefon, setTelefon] = useState(row.original.telefon)
    const [email, setEmail] = useState(row.original.email)
    const [produkt, setProdukt] = useState(row.original.produkt)
    const [status, setStatus] = useState(row.original.status)
    const [score, setScore] = useState(row.original.score)
    const [quelle, setQuelle] = useState(row.original.quelle)
    const [date, setDate] = useState(new Date(row.original.datum).toISOString().split('T')[0])
    // const [date, setDate] = useState('')

    const onResponse = (res) => {
        // setLeadData(res.data)
        console.log('res', res.data);
    }

    const onError = (err) => {
        console.log('error', err);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            'id': row.original.id,
            'name': name,
            'telefon': telefon,
            'email': email,
            'produkt': produkt,
            'status': status,
            'score': score,
            'quelle': quelle,
            "datum": date
        }

        let leadAPI = new LeadAPI()

        leadAPI.update_lead(onResponse, onError, data)

        const updatedData = leadData.map(lead => {
            if (lead.id === row.original.id) {
                return {
                    ...lead,
                    name: name,
                    telefon: telefon,
                    email: email,
                    produkt: produkt,
                    status: status,
                    score: score,
                    quelle: quelle,
                    datum: date
                };
            }
            return lead;
        });
        console.log('updated', updatedData);
        setLeadData(updatedData);

        const timer = setTimeout(() => {
            setOpenModal(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
        // console.log('submitted', data);
    }

    useEffect(() => {
        const handleOverlayClick = (event) => {
            if (event.target.id === 'modal-overlay') {
                setOpenModal(false);
            }
        };

        document.addEventListener('click', handleOverlayClick);

        return () => {
            document.removeEventListener('click', handleOverlayClick);
        };
    }, [openModal]);

    return (
        <div className={styles.modalBackground} id='modal-overlay'>
            <div className={styles.modalContainer}>
                <div className={styles.modalCloseBtn}>
                    <button
                        onClick={() => setOpenModal(false)}
                        className={styles.closeBtn}
                    >
                        X
                    </button>
                </div>

                <div className={styles.modalTitle}>
                    <h2 className={styles.title}>Edit the Lead</h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={styles.body}
                >

                    <TextInput
                        required={true}
                        title={'Vorname'}
                        placeholder={'Mikhail Tal'}
                        value={name}
                        setValue={setName}
                    />

                    <TextInput
                        title={'Telefon'}
                        placeholder={'+4930 123 456 789'}
                        value={telefon}
                        setValue={setTelefon}
                    />

                    <TextInput
                        required={true}
                        title={'E-Mail'}
                        placeholder={'info@kunde.de'}
                        type={'email'}
                        value={email}
                        setValue={setEmail}
                    />

                    <DropdownInput
                        title={'Produkt'}
                        options={ProduktOption}
                        value={produkt}
                        setValue={setProdukt}
                    />
                    <DropdownInput
                        title={'Status'}
                        options={StatusOption}
                        value={status}
                        setValue={setStatus}
                    />
                    <DropdownInput
                        title={'Score'}
                        options={ScoreOption}
                        value={score}
                        setValue={setScore}
                    />

                    <TextInput
                        title={'Quelle'}
                        placeholder={'Bitte Quelle angeben...'}
                        type={'text'}
                        value={quelle}
                        setValue={setQuelle}
                    />
                    <TextInput
                        title={'Date'}
                        type={'date'}
                        value={date}
                        setValue={setDate}
                    />

                    <button
                        className={styles.submitBtn}
                        type='submit'
                    >
                        Update
                    </button>
                </form>
            </div>

        </div >

    )
}

export default Modal