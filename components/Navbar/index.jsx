import React, { Fragment, useEffect, useState } from 'react'
import ButtonOutline from '../ButtonOutline'
import Button from '../Button'
import Link from 'next/link'
import { BsBellFill } from "react-icons/bs";
import Logo from '../../public/img/logo.svg'
import Image from 'next/image';


const Navbar = (props) => {
  const [id, setId] = useState("c2d77d86-fa84-4ec5-98ab-0a477cfa90dd")


  const LoginButton = () => {
    if (props.isAuth) {
      return (
        <Fragment>
          <Link href={`/worker/${id}/notification`}>
            <button type="button" className="btn btn-secondary position-relative me-4">
              <BsBellFill />
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>
          </Link>
          <Link href="/logout"><Button text="Logout" /></Link>
        </Fragment>
      )
    } else {
      return (<Fragment>
        <Link href="/login"><ButtonOutline text="Masuk" className="me-2" /></Link>
        <Link href="/register"><Button text="Daftar" /></Link>
      </Fragment>)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-purple" href="/">
          <Image src={Logo} crossOrigin="anonymous" className='me-2' />
          Peworld
        </Link>
        <div className="ms-auto" id="navbarSupportedContent">
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar