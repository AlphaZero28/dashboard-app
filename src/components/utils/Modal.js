import React, { useState } from 'react'
import TextInput from './TextInput'
import DropdownInput from './DropdownInput'
import { LeadAPI } from '../../api/LeadAPI'
import { ScoreOption, StatusOption, ProduktOption } from '../../config'
import styles from './newLead.module.css'

function Modal({ openModal, setOpenModal }) {

    const [name, setName] = useState('')
    const [telefon, setTelefon] = useState('')
    const [email, setEmail] = useState('')
    const [produkt, setProdukt] = useState('Warmepumpe')
    const [status, setStatus] = useState('LEAD-NEU')
    const [score, setScore] = useState('A')
    const [quelle, setQuelle] = useState('')
    const [date, setDate] = useState('')

    const onResponse = (res) => {
        // setLeadData(res.data)
        console.log('res', res);
    }

    const onError = (err) => {
        console.log('error', err);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
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

        leadAPI.new_lead(onResponse, onError, data)

        console.log('submitted', data);
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalBackground}>
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
                        <h2 className={styles.title}>Neuer Lead</h2>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.body}
                    >

                        <TextInput
                            title={'Name'}
                            placeholder={'Mikhail Tal'}
                            value={name}
                            setValue={setName}
                        />

                        <TextInput
                            title={'Telefon'}
                            placeholder={'+45-5686446'}
                            value={telefon}
                            setValue={setTelefon}
                        />

                        <TextInput
                            title={'E-Mail'}
                            placeholder={'tal@gmail.com'}
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
                            placeholder={'your comment...'}
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
                            Neuen Lead Generieren
                        </button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Modal