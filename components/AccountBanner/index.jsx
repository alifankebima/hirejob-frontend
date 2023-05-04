import React from 'react'
import styles from './account.module.css'
import Image from 'next/image'
import AccountBannerImage from '../../public/img/account/account-banner.jpg'

const AccountBanner = () => {
    return (
        <div className={"col-md-6 d-none d-md-block p-4 vh-100"}>
            <div className={styles.banner + " sticky-top"}>
                <div className={styles.overlay + " text-white fw-bold fs-1 align-middle d-flex flex-column justify-content-center"}>
                    <span>Temukan developer berbakat & terbaik di berbagai bidang keahlian</span>
                </div>
                <Image className={"img-fluid " + styles.image} src={AccountBannerImage} alt=""/>
            </div>
        </div>
    )
}

export default AccountBanner