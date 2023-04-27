import React, { Fragment } from 'react'
import Candidates from '../../components/Candidates'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import TopJobs from '../../components/TopJobs'
import Button from '../../components/Button'
import CandidateList from '../../components/CandidateList'
import Footer from '../../components/Footer'

const worker = () => {
  return (
    <div className='bg-light' >
      <Navbar />
      <TopJobs />
      {/* <Search /> */}
      <CandidateList />
      <Footer />
    </div>
  )
}

export default worker