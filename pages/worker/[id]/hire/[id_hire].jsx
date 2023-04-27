import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../components/Navbar';
import Profile from '../../../../components/Profile';
import Portfolio from '../../../../components/Portfolio';
import Footer from '../../../../components/Footer';
import axios from 'axios';
import HireForm2 from '../../../../components/HireForm2';


const detailProfile = () => {
  const router = useRouter();
  const [worker, setWorker] = useState({});
  const [hireId, setHireId] = useState();

  useEffect(() => {
    console.log(router.query.id);

    if (router.isReady) {
      setHireId(router.query.id_hire)
      axios.get(`http://localhost:4000/v1/worker/${router.query.id}`)
        .then((res) => {
          setWorker(res.data.data[0]);
          
        })
        .catch((err) => console.log(err))
    }
  }, [router.isReady])

  return (
    <div className='bg-light' >
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Profile name={worker.name} skill={worker.skill} image={worker.image} jobdesk={worker.jobdesk} residence={worker.residence} workplace={worker.workplace} description={worker.description}/>
          <HireForm2 name={worker.name} id={worker.id} id_hire={hireId}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default detailProfile