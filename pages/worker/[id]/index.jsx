import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Portfolio from '../../../components/Portfolio';
import Footer from '../../../components/Footer';
import axios from 'axios';


const detailProfile = () => {
  const router = useRouter();
  const [worker, setWorker] = useState({});
  const [id, setId] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id)
      // console.log("id query : "+ router.query.id);
      // axios.get(`${process.env.API_URL}/v1/worker/${router.query.id}`)
      axios.get(`${process.env.API_URL}/worker/1`)
        .then((res) => {
          setWorker(res.data);
          // console.log(res.data.data);
          console.log(res.data);
          console.log("hello world");
        })
        .catch((err) => console.log(err))
    }
  }, [router.isReady])

  return (
    <div className='bg-light' >
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {/* <Profile hireButton="True" id={id} name={worker.name} skill={worker.skill} image={worker.image} jobdesk={worker.jobdesk} residence={worker.residence} workplace={worker.workplace} description={worker.description}/>
          <Portfolio portfolio={worker.portfolio} workExperience={worker.work_experience}/> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default detailProfile