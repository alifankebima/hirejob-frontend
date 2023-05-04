import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../components/Navbar';
import Profile from '../../../../components/Profile';
import Footer from '../../../../components/Footer';
import axios from 'axios';
import HireForm from '../../../../components/HireForm';


const detailProfile = () => {
  const router = useRouter();
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/${router.query.id}`)
        .then((res) => {
          setWorker(res.data.data[0]);
          console.log(worker);
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
          <HireForm name={worker.name} id={worker.id}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default detailProfile