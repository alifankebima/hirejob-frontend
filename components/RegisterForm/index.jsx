import Link from 'next/link'
import React, { useState } from 'react'
import styles from './RegisterForm.module.css'

const RegisterForm = () => {
  const [role, setRole] = useState("pekerja")

  return (
    <div className="col-md-6 col-sm-12 py-4 px-3 d-flex flex-column vh-100 overflow-auto">
      <div className="fs-2">Halo, Pewpeople</div>
      <div className="mt-2 mb-1 text-secondary">Daftar akun {role} untuk mencari pekerja dengan kualifikasi tinggi</div>

      <ul className="nav nav-pills mb-3 mt-4 mx-auto" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className={styles.selectorWorker + " py-2 px-4 active"} onClick={() => setRole("pekerja")} id="pills-worker-tab" data-bs-toggle="pill" data-bs-target="#pills-worker" type="button" role="tab" aria-controls="pills-worker" aria-selected="true">Worker</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={styles.selectorRecruiter + " py-2 px-4"} onClick={() => setRole("rekruter")} id="pills-recruiter-tab" data-bs-toggle="pill" data-bs-target="#pills-recruiter" type="button" role="tab" aria-controls="pills-recruiter" aria-selected="false">Recruiter</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {/* worker login form */}
        <div className="tab-pane fade show active" id="pills-worker" role="tabpanel" aria-labelledby="pills-worker-tab" tabindex="0">
          <form onSubmit="#">
            <div className='fs-6 text-secondary'>Nama</div>
            <input type="text" className="form-control" placeholder="Masukkan nama lengkap" />
            <div className='fs-6 text-secondary mt-3'>Email</div>
            <input type="password" className="form-control" placeholder="Masukkan alamat email" />
            <div className='fs-6 text-secondary mt-3'>No handphone</div>
            <input type="password" className="form-control" placeholder="Masukkan no handphone" />
            <div className='fs-6 text-secondary mt-3'>Kata sandi</div>
            <input type="password" className="form-control" placeholder="Masukkan kata sandi" />
            <div className='fs-6 text-secondary mt-3'>Konfirmasi kata sandi</div>
            <input type="password" className="form-control" placeholder="Masukkan ulang kata sandi" />
            <Link href={"/login"}><button className="btn btn-warning text-white mt-4 p-2 w-100">Daftar</button></Link>
          </form>
        </div>

        {/* recruiter login form */}
        <div className="tab-pane fade" id="pills-recruiter" role="tabpanel" aria-labelledby="pills-recruiter-tab" tabindex="1">
          <form onSubmit="#">
            <div className='fs-6 text-secondary'>Nama</div>
            <input type="text" className="form-control" placeholder="Masukkan nama lengkap" />
            <div className='fs-6 text-secondary mt-3'>Email</div>
            <input type="password" className="form-control" placeholder="Masukkan alamat email" />
            <div className='fs-6 text-secondary mt-3'>Perusahaan</div>
            <input type="password" className="form-control" placeholder="Masukkan nama perusahaan" />
            <div className='fs-6 text-secondary mt-3'>Jabatan</div>
            <input type="password" className="form-control" placeholder="Posisi di perusahaan anda" />
            <div className='fs-6 text-secondary mt-3'>No handphone</div>
            <input type="password" className="form-control" placeholder="Masukkan no handphone" />
            <div className='fs-6 text-secondary mt-3'>Kata sandi</div>
            <input type="password" className="form-control" placeholder="Masukkan kata sandi" />
            <div className='fs-6 text-secondary mt-3'>Konfirmasi kata sandi</div>
            <input type="password" className="form-control" placeholder="Masukkan ulang kata sandi" />
            <Link href={"/login"}><button className="btn btn-warning text-white mt-4 p-2 w-100">Daftar</button></Link>
          </form>
        </div>
      </div>
      <div className='d-flex align-self-center mt-3'>
        <span>Anda sudah punya akun?</span>
        <Link href="/login" className='ms-1 text-warning'>Masuk disini</Link>
      </div>
    </div>
  )
}

export default RegisterForm