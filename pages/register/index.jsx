import React from 'react'
import AccountBanner from '../../components/AccountBanner'
import RegisterForm from '../../components/RegisterForm'

const register = () => {
  return (
    <div className='container-fluid bg-light'>
      <div className="row vh-100">
        <AccountBanner />
        <RegisterForm />
      </div>
    </div>
  )
}

export default register