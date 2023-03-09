import React, { Fragment, useEffect, useState } from 'react'
import ButtonOutline from '../ButtonOutline'
import Button from '../Button'
import Link from 'next/link'
import { BsBellFill } from "react-icons/bs";


const Navbar = (props) => {
  const [id, setId] = useState(1)


  const LoginButton = () => {
    if (props.isAuth) {
      return (
        <Fragment>
          <Link href={`/worker/${id}/notification`}>
            <button type="button" class="btn btn-secondary position-relative me-4">
              <BsBellFill />
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>
          </Link>
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