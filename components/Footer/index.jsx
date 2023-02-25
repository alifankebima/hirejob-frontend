import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer + " text-white"}>
      <div class={"container"}>
        <footer class="pt-5">
          <div class="row">
            <div class="col-6 col-md-4 mb-3">
              <h3>Peworld</h3>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h6>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
            <p>© Peworld, All rights reserved</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-4">Telepon</li>
              <li class="ms-4">Email</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer