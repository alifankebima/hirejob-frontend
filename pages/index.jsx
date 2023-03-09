import Link from 'next/link';
import { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

export default function Home() {
  useEffect(() => {
    document.title = "Peworld";
  });
  
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <div className="row gy-5 mt-1">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-evenly">
            <h1 className='mt-5'>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
            <h6>Pekerja terbaik di peworld siap menghadapi industri 4.0</h6>
            <Link href='/worker'>
              <Button text="Mulai dari sekarang" />
            </Link>
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
            <h2>Skill Talent</h2>
            <ul>
              <li>Java</li>
              <li>Kotlin</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>Golang</li>
              <li>C++</li>
              <li>Ruby</li>
              <li>10+ Bahasa Lainnya</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src="img/landing-page/landing-page-3.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
