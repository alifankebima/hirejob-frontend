import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const LoginForm = () => {
    const router = useRouter();

    const setLocalStorage = (e) => {
        e.preventDefault();
        
        localStorage.setItem("token", "Token")
    
        if (localStorage.getItem("token")) {
            router.push('/')
        }
    }

    return (
        <div className="col-md-6 col-sm-12 p-4">
            <div className="d-flex flex-column justify-content-center h-100">
                <div className="fs-2">Halo, Pewpeople</div>
                <div className="mt-2 text-secondary">Silahkan masukkan email dan password anda</div>
                <form onSubmit={setLocalStorage}>
                    <div className='fs-6 text-secondary mt-2 mt-sm-5'>Email</div>
                    <input type="email" class="form-control" placeholder="Masukkan email" />
                    <div className='fs-6 text-secondary mt-3'>Kata Sandi</div>
                    <input type="password" class="form-control" placeholder="Masukkan kata sandi" />
                    <div className="fs-6 text-dark mt-3 align-self-end">Lupa kata sandi?</div>
                    <button type="submit" class="btn btn-warning text-white mt-3 p-2 w-100">Masuk</button>
                </form>
                <div className='d-flex align-self-center mt-3'>
                    <span>Anda belum punya akun?</span>
                    <Link href="/register" className='ms-1 text-warning'>Daftar disini</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm