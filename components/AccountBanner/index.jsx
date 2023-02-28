import React from 'react'
import styles from './account.module.css'

const AccountBanner = () => {
    return (
        <div className={"col-md-6 d-none d-md-block p-4 vh-100"}>
            <div className={styles.banner + " sticky-top"}>
                <div className={styles.overlay + " text-white fw-bold fs-1 align-middle d-flex flex-column justify-content-center"}>
                    <span>Temukan developer berbakat & terbaik di berbagai bidang keahlian</span>
                </div>
                <img className={"img-fluid " + styles.image} crossOrigin='anonymous' src="img/account/account-banner.jpg" />
            </div>
        </div>
    )
}

export default AccountBanner