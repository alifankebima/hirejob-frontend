import React from 'react'

const Login = () => {
    return (
        <div className="col-md-6 col-sm-12 p-4">
            <div className="d-flex flex-column justify-content-center h-100">
                <div className="fs-2">Halo, Pewpeople</div>
                <div className="mt-2 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
                <form onSubmit="#">
                    <div className='fs-6 text-secondary mt-2 mt-sm-5'>Email</div>
                    <input type="email" class="form-control" placeholder="Masukkan email" />
                    <div className='fs-6 text-secondary mt-3'>Masukkan </div>
                    <input type="password" class="form-control" placeholder="Masukkan kata sandi" />
                    <div className="fs-6 text-dark mt-3 align-self-end">Lupa kata sandi?</div>
                    <button type="button" class="btn btn-warning text-white mt-3 p-2 w-100">Masuk</button>
                </form>
                <div className='d-flex align-self-center mt-3'>
                    <span>Anda belum punya akun?</span>
                    <span className='ms-1 text-warning'>Daftar disini</span>
                </div>
            </div>
        </div>
    )
}

export default Login