import Link from 'next/link'
import React from 'react'

const RegisterForm = () => {
  return (
    <div className="col-md-6 col-sm-12 p-4">
      <div className="d-flex flex-column justify-content-center h-100">
        <div className="fs-2 mt-5">Halo, Pewpeople</div>
        <div className="mt-2 text-secondary">Daftar akun rekruter untuk mencari pekerja dengan kualifikasi tinggi</div>
        <form onSubmit="#">
          <div className='fs-6 text-secondary mt-5'>Nama</div>
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
          <Link href={"/login"}><button className="btn btn-warning text-white mt-5 p-2 w-100">Daftar</button></Link>

        </form>
        <div className='d-flex align-self-center mt-3'>
          <span>Anda sudah punya akun?</span>
          <Link href="/login" className='ms-1 text-warning'>Masuk disini</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm