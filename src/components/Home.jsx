import React, { useEffect, useState } from 'react'
import Table from './Table'
import Login from './login/Login'
import { BiLogOut } from 'react-icons/bi'

function Home () {
  const [passwordMatched, setPasswordMatched] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    let matched = localStorage.getItem('matched')
    if (matched && matched !== 'null') setPasswordMatched(matched)
    else setPasswordMatched(false)
  }, [])
  return (
    <>
      {passwordMatched ? (
        <>
          <Table />
          <Logout setPasswordMatched={setPasswordMatched} />
        </>
      ) : (
        <Login
          password={password}
          setPassword={setPassword}
          setPasswordMatched={setPasswordMatched}
        />
      )}
    </>
  )
}

function Logout ({ setPasswordMatched }) {
  const onClick = () => {
    localStorage.setItem('matched', false)
    setPasswordMatched(false)
  }
  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        marginRight: 10,
        marginBottom: 10,
        zIndex: 10
      }}
    >
      <button
        style={{ backgroundColor: 'white', border: 'none', boxShadow:'5px 5px rgba(211, 213, 222, 0.8)', borderRadius: 10,  cursor: 'pointer' }}
        onClick={onClick}
      >
        <BiLogOut
          style={{
            fontSize: 30,
            color: 'red'
          }}
        />
      </button>
    </div>
  )
}
export default Home
