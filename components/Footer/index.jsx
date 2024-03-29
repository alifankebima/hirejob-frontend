import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer + " text-white mt-5"}>
      <div className={"container"}>
        <footer className="pt-5">
          <div className="row">
            <div className="col-6 col-md-4 mb-3">
              <h3>Hirejob</h3>
              <h6>Pekerja terbaik di hirejob siap menghadapi industri 4.0</h6>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
            <p>© Hirejob, All rights reserved</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-4">Telepon</li>
              <li className="ms-4">Email</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer