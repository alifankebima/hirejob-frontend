import React from 'react'
import Navbar from '../../../components/Navbar';
import Profile from '../../../components/Profile';
import Portfolio from '../../../components/Portfolio';
import Footer from '../../../components/Footer';
import axios from 'axios';

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/workers/${id}`);
  return {
    props: { worker : res.data },
  };
}

function SSR({worker}){
  // useEffect(() => {
  //   if (router.isReady) {
  //     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/workers/${router.query.id}`)
  //       .then((res) => {
  //         setWorker(res.data);
  //         console.log(worker);
  //       })
  //       .catch((err) => console.log(err))
  //   }
  // }, [router.isReady])

  return (
    <div className='bg-light' >
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Profile name={worker.name + " (SSR)"} image={worker.image} jobdesk={worker.jobdesk} residence={worker.residence} workplace={worker.workplace} description={worker.description} skill={worker.skill}/>
          <Portfolio portfolio={worker.portfolio} workExperience={worker.work_experience}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SSR