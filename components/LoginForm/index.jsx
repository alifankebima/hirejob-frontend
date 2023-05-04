import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './LoginForm.module.css';
import axios from 'axios'
import Swal from 'sweetalert2';

const LoginForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e, role) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/${role || "worker"}/login`, data);
      if (response.status == 200) {
        Swal.fire({
          title: `Login success`,
          text: `${response.data.message}`,
          icon: `success`
        })
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("id", response.data.data.id);
        localStorage.setItem("role", response.data.data.role)
        router.push('/')
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: `Login failed`,
        text: `${error.response ? error.response.data.message : "Failed logging in"}`,
        icon: `error`
      })
    }
  }

  return (
    <div className="col-md-6 col-sm-12 p-4">
      <div className="d-flex flex-column justify-content-center h-100">
        <div className="fs-2">Halo, Pewpeople</div>
        <div className="mt-2 text-secondary">Silahkan masukkan email dan password anda</div>

        <ul className="nav nav-pills mb-3 mt-2 mt-sm-5 mx-auto" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className={styles.selectorWorker + " py-2 px-4 active"} id="pills-worker-tab" data-bs-toggle="pill" data-bs-target="#pills-worker" type="button" role="tab" aria-controls="pills-worker" aria-selected="true">Worker</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className={styles.selectorRecruiter + " py-2 px-4"} id="pills-recruiter-tab" data-bs-toggle="pill" data-bs-target="#pills-recruiter" type="button" role="tab" aria-controls="pills-recruiter" aria-selected="false">Recruiter</button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          {/* worker login form */}
          <div className="tab-pane fade show active" id="pills-worker" role="tabpanel" aria-labelledby="pills-worker-tab" tabindex="0">
            <form onSubmit={(e) => handleLogin(e, "worker")}>
              <div className='fs-6 text-secondary'>Email</div>
              <input type="email" className="form-control" placeholder="Masukkan email" name="email" onChange={handleChange} />
              <div className='fs-6 text-secondary mt-3'>Kata Sandi</div>
              <input type="password" className="form-control" placeholder="Masukkan kata sandi" name="password" onChange={handleChange} />
              {/* <div className="fs-6 text-dark mt-3 align-self-end">Lupa kata sandi?</div> */}
              <button type="submit" className="btn btn-warning text-white mt-3 p-2 w-100">Masuk</button>
            </form>
          </div>

          {/* recruiter login form */}
          <div className="tab-pane fade" id="pills-recruiter" role="tabpanel" aria-labelledby="pills-recruiter-tab" tabindex="1">
            <form onSubmit={(e) => handleLogin(e, "recruiter")}>
              <div className='fs-6 text-secondary'>Email</div>
              <input type="email" className="form-control" placeholder="Masukkan email" name="email" onChange={handleChange}/>
              <div className='fs-6 text-secondary mt-3'>Kata Sandi</div>
              <input type="password" className="form-control" placeholder="Masukkan kata sandi" name="password" onChange={handleChange}/>
              {/* <div className="fs-6 text-dark mt-3 align-self-end">Lupa kata sandi?</div> */}
              <button type="submit" className="btn btn-warning text-white mt-3 p-2 w-100">Masuk</button>
            </form>
          </div>
        </div>

        <div className='d-flex align-self-center mt-3'>
          <span>Anda belum punya akun?</span>
          <Link href="/register" className='ms-1 text-warning'>Daftar disini</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm