import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Candidates from '../Candidates'

const CandidateList = () => {
  const [workers, setWorkers] = useState([]);
  const [ssrId, setSsrId] = useState();

  useEffect(() => {
    axios.get('http://localhost:4000/workers')
      .then((res) => {
        setWorkers(res.data);
        setSsrId(res.data[4]);
        console.log(ssrId);
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className='mt-5'>
      {workers && workers.map((data) =>
        <Candidates name={data.name} image={data.image} link={`http://localhost:3000/worker/${data.id}`} residence={data.residence} jobdesk={data.jobdesk} skill={data.skill} />
      )}
      {ssrId && <Candidates name={ssrId.name + " (SSR)"} image={ssrId.image}  residence={ssrId.residence} jobdesk={ssrId.jobdesk} skill={ssrId.skill} link={`http://localhost:3000/worker/ssr/${ssrId.id}`} />}
    </div>
  )
}

export default CandidateList