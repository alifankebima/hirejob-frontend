import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import axios from 'axios';


const detailProfile = () => {
  const router = useRouter();
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      axios.get(`http://localhost:4000/workers/${router.query.id}`)
        .then((res) => {
          setWorker(res.data);
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
          <Portfolio portfolio={worker.portfolio} workExperience={worker.work_experience}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default detailProfile