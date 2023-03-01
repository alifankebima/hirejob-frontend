import React, { Fragment, useEffect } from 'react'
import ButtonOutline from '../ButtonOutline'
import Button from '../Button'
import Link from 'next/link'



const Navbar = (props) => {
  const LoginButton = () => {
    if (props.isAuth) {
      return (
        <Fragment>
          <Link href="/logout"><Button text="Logout" /></Link>
        </Fragment>
      )
    } else {
      return (<Fragment>
        <Link href="/login"><ButtonOutline text="Masuk" class="me-2" /></Link>
        <Link href="/register"><Button text="Daftar" /></Link>
      </Fragment>)
    }
  }

  return (
    <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div class="container">
        <Link class="navbar-brand text-purple" href="/">
          <img src="http://localhost:4000/logo.svg" alt="" className='me-2' />
          Peworld
        </Link>
        <div class="ms-auto" id="navbarSupportedContent">
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar