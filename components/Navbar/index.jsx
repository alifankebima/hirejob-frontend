import React, { Fragment, useEffect, useState } from 'react'
import ButtonOutline from '../ButtonOutline'
import Button from '../Button'
import Link from 'next/link'
import { BsBellFill } from "react-icons/bs";
import Logo from '../../public/svg/logo.svg'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import axios from 'axios';

const Navbar = (props) => {
  const router = useRouter();
  const [token, setToken] = useState()
  const [profile, setProfile] = useState()
  const [notification, setNotification] = useState()

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    const token = localStorage.getItem("token")
    if (token) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/profile`, { headers: { Authorization: `Bearer ${token}` } })
        .then((result) => {
          setNotification(result.data.data[0].hireCount)
        })
        .catch((error) => console.log(error));
    }
  }, [])


  const handleNotification = () => {
    const id = localStorage.getItem("id");
    router.push(`/worker/${id}/notification`)
  }

  const handleLogout = () => {
    const isAuth = localStorage.getItem("token");
    if (isAuth) {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("role")
      Swal.fire({
        title: `Logout success`,
        text: `Thank you for using our app!`,
        icon: `success`
      }).then(() => window.location.reload())
    } else {
      Swal.fire({
        title: `Logout failed`,
        text: `User is already logged out`,
        icon: `error`
      })
    }
    router.push('/')
  }

  const LoginButton = () => {
    if (token) {
      return (
        <Fragment>
          <button type="button" onClick={handleNotification} className="btn btn-secondary fw-normal position-relative me-4">
            <BsBellFill />
            {!!notification && (
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            )}
          </button>
          <Button text="Logout" onClick={handleLogout} />
        </Fragment>
      )
    } else {
      return (<Fragment>
        <Link href="/login"><ButtonOutline text="Masuk" className="me-2 fw-normal" /></Link>
        <Link href="/register"><Button text="Daftar" className="fw-normal" /></Link>
      </Fragment>)
    }
  }

  // Navbar component
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-purple" href="/">
          <Image src={Logo} width={30} height={30} crossOrigin="anonymous" className='me-2' alt='hirejob' />
          Hirejob
        </Link>
        <div className="ms-auto" id="navbarSupportedContent">
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar