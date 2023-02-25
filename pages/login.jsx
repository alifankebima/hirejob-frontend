import React from 'react'
import AccountBanner from '../components/AccountBanner'
import Login from '../components/Login'

const coba = () => {
  return (
    <div className='container-fluid bg-light'>
      <div className="row vh-100">
        <AccountBanner />
        <Login />
      </div>
    </div>
  )
}

export default coba