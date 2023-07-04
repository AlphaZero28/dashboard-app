import React, { useState } from 'react'
import { LeadAPI } from '../../api/LeadAPI'
import { useNavigate } from 'react-router-dom'
import Table from '../Table'
import { FaUserCircle } from 'react-icons/fa'
import styles from './login.module.css'


function Login() {
    const [passcode, setPasscode] = useState('')
    const [isAllowed, setIsAllowed] = useState(true)
    const navigation = useNavigate()

    const onResponse = (res) => {
        console.log(res.data);
        setIsAllowed(res.data.data)
        if (res.data.data === true) {
            navigation('/')
        }

    }

    const onError = err => {
        console.log(err);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const leadAPI = new LeadAPI()
        leadAPI.login(onResponse, onError, passcode)
        setPasscode('')
    }

    return (
        <div className={styles.container}>


            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.header}>
                    <FaUserCircle size={30} />
                    <div className={styles.Htext}>Login</div>

                </div>
                <label className={styles.label}>Enter your passcode</label>
                <input
                    className={styles.input}
                    // placeholder=''
                    type='password'
                    autoComplete="new-password"
                    value={passcode}
                    onChange={e => setPasscode(e.target.value)}
                />

                {
                    isAllowed ?
                        null
                        : <div className={styles.warning}>
                            Sorry, you are not allowed!
                        </div>
                }


                <input
                    className={styles.btn}
                    type='submit'
                />
            </form>

        </div>


    )
}

export default Login