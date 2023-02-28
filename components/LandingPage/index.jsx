import React from 'react'
import Button from '../Button'

const LandingPage = () => {
    return (
        <div className='container'>
            <div className="row gy-5 mt-1">
                <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-evenly">
                    <div></div>
                    <h1 className='mt-5'>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, rem?</h6>
                    <div><Button text="Mulai dari sekarang" /></div>
                    <div></div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src="img/landing-page/landing-page-1.png" className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src="img/landing-page/landing-page-2.png" className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                    <h2>Kenapa harus mencari talent di peworld?</h2>
                    <ul>
                        <li>Mencari kandidat berdasarkan skill dan domisili</li>
                        <li>Talenta terbaik dengan kualifikasi bagus</li>
                        <li>Proses merekrut kandidat dengan mudah</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                    <h2>Kenapa harus mencari talent di peworld?</h2>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src="img/landing-page/landing-page-3.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage