import React from 'react'
import styles from './TopJobs.module.css'

const TopJobs = () => {
  return (
    <div className={styles.topjobs}>
      <div className="container py-3">
        <span className="text-white fs-5 fw-bold">Top Jobs</span>
      </div>
    </div>
  )
}

export default TopJobs