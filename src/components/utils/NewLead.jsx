import React, { useState } from 'react'
import TextInput from './TextInput'
import DropdownInput from './DropdownInput'
import { ScoreOption, StatusOption, ProduktOption } from '../../config'
import styles from './newLead.module.css'
import { LeadAPI } from '../../api/LeadAPI'


function NewLead({ setLeadData }) {
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
            'Name': name,
            'Telefon': telefon,
            'E-Mail': email,
            'Produkt': produkt,
            'Status': status,
            'Score': score,
            'Quelle': quelle,
            "Datum": date
        }

        let leadAPI = new LeadAPI()

        leadAPI.new_lead(onResponse, onError, data)

        console.log('submitted', data);
    }
    return (
        <form onSubmit={handleSubmit}>

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
                className={styles.Btn}
                type='submit'
            >
                Neuen Lead Generieren
            </button>
        </form>
    )
}

export default NewLead