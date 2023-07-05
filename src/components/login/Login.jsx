import React, { useState } from 'react'
import { LeadAPI } from '../../api/LeadAPI'
import { useNavigate } from 'react-router-dom'
import Table from '../Table'
import { FaUserCircle } from 'react-icons/fa'
import styles from './login.module.css'

function Login ({ password, setPassword, setPasswordMatched }) {
  const onResponse = res => {
    // console.log(res.data)
    if (res.data.msg === 'successful') {
      setPasswordMatched(res.data.matched)
      localStorage.setItem('matched', res.data.matched)
      if (res.data.matched) {
        localStorage.setItem('password', password)
        setPassword('')
      } else {
        localStorage.setItem('password', null)
        alert('Password Did Not Matched')
      }
    }
  }

  const onError = err => {
    console.log(err)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const leadAPI = new LeadAPI()
    leadAPI.login(onResponse, onError, password)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.header}>
          <FaUserCircle size={30} />
          <div className={styles.Htext}>Login</div>
        </div>
        <label className={styles.label}>Geben Sie Ihr Passwort ein</label>
        <input
          className={styles.input}
          // placeholder=''
          type='password'
          autoComplete='new-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {/* {isAllowed ? null : (
          <div className={styles.warning}>Sorry, you are not allowed!</div>
        )} */}

        <input className={styles.btn} type='submit' />
      </form>
    </div>
  )
}

export default Login
