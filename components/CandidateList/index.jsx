import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Candidates from '../Candidates'
import Button from '../Button';

const CandidateList = () => {
  const [workers, setWorkers] = useState([]);
  const [ssrId, setSsrId] = useState();
  const [pagination, setPagination] = useState({});
  const [searchQuery, setSearchQuery] = useState({
    search: ""
  });

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/?search=${searchQuery.search}`)
      .then((res) => {
        setWorkers(res.data.data);
        setPagination(res.data.pagination)
        setSsrId(res.data.data[4]);
        console.log(ssrId);
      })
      .catch((err) => console.log(err))

  }, [])

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/?search=${searchQuery.search}`)
      .then((res) => {
        setWorkers(res.data.data);
        setSsrId(res.data.data[4]);
        console.log(ssrId);
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className='container mt-5 shadow-sm p-0'>
        <form onSubmit={handleSubmit} className='d-flex'>
          <input type="name" className="form-control border-0" name="search" onChange={handleChange} value={searchQuery.data} placeholder="Search worker" />
          <Button text="Submit" className="" />
        </form>
      </div>
      <div className='mt-5'>
        {workers && workers.map((data) =>
          <Candidates name={data.name} image={data.image} link={`/worker/${data.id}`} residence={data.residence} jobdesk={data.jobdesk} skill={data.skill} />
        )}
        {/* {ssrId && <Candidates name={ssrId.name + " (SSR)"} image={ssrId.image} residence={ssrId.residence} jobdesk={ssrId.jobdesk} skill={ssrId.skill} link={`http://localhost:3000/worker/ssr/${ssrId.id}`} />} */}
      </div>
      <div className='conainer mt-5'>
        {/* {JSON.stringify(workers)} */}
        <div className="d-flex flex-column">
          <nav aria-label="Page navigation example" className='align-self-center'>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default CandidateList