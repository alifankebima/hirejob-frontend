import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Portfolio from '../../../components/Portfolio';
import Footer from '../../../components/Footer';
import axios from 'axios';


const detailProfile = () => {
  const router = useRouter();
  // const [worker, setWorker] = useState({});
  const [worker, setWorker] = useState({
    name: "",
    skill: [],
    image: "",
    jobdesk: "",
    residence: "",
    workplace: "",
    description: "",
    portfolio: [],
    workExperience: [],
  });
  const [id, setId] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id)
      // console.log("id query : "+ router.query.id);
      // axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/${router.query.id}`)
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/${router.query.id}`)
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
          <Profile hireButton="True" id={id} name={worker.name} skill={worker.skill} image={worker.image} jobdesk={worker.jobdesk} residence={worker.residence} workplace={worker.workplace} description={worker.description}/>
          <Portfolio portfolio={worker.portfolio} workExperience={worker.workExperience}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default detailProfile