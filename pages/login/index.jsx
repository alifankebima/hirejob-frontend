import React from 'react'
import AccountBanner from '../../components/AccountBanner'
import LoginForm from '../../components/LoginForm'

const login = () => {
  return (
    <div className='container-fluid bg-light'>
      <div className="row vh-100">
        <AccountBanner />
        <LoginForm />
      </div>
    </div>
  )
}

export default login