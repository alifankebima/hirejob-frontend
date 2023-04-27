import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../components/Navbar';
import Profile from '../../../../components/Profile';
import Portfolio from '../../../../components/Portfolio';
import Footer from '../../../../components/Footer';
import axios from 'axios';
import Link from 'next/link';
import Button from '../../../../components/Button';


const detailProfile = () => {
  const router = useRouter();
  const [hire, setHire] = useState();

  const authWorker = {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyZDc3ZDg2LWZhODQtNGVjNS05OGFiLTBhNDc3Y2ZhOTBkZCIsImVtYWlsIjoiYWxpZi53b3JrZXJAZ21haWwuY29tIiwicm9sZSI6IndvcmtlciIsImlhdCI6MTY3ODQxMjE4MCwiZXhwIjoxNjc4NDk4NTgwLCJpc3MiOiJoaXJlam9iIn0.blLE9Jb3orhxPhJrl1uwK7gzIR8_RQDPImLMkeK-MqU`
    }
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/v1/hire/${id}`, authWorker)
        .then((res) => {
          alert("delete success")
          window.location.reload();
        })
        .catch((err) => {
          console.log(err)
          alert("delete failed")
        })
  }

  useEffect(() => {
    if (router.isReady) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/${router.query.id}/hire`)
        .then((res) => {
          setHire(res.data.data);
        })
        .catch((err) => console.log(err))
    }
  }, [router.isReady])

  return (
    <div className='bg-light vh-100' >
      <Navbar />
      <div className="container mt-5 bg-white rounded">
        <div className="row">
          <div className="col-md-12">
            <div className='fs-4 fw-bold'>Notification</div>
            {hire && hire.map((data) =>
              <div className='d-flex'>
                <img src="http://localhost:3000/img/profile/profile-picture.png" className="img-fluid rounded-circle mb-3" alt="" />
                <div className="d-flex flex-column justify-content-center ms-2">
                  <div>{data.name}</div>
                  <div>{data.email}</div>
                  <div>{data.reason}</div>
                  <div>{data.description}</div>
                </div>
                <div className='ms-auto align-self-center'><Link href={`/worker/${router.query.id}/hire/${data.id}`}>
                  <button className='btn btn-secondary'>Edit</button>
                  </Link>
                </div>
                <div className='ms-2 align-self-center'>
                  <button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default detailProfile