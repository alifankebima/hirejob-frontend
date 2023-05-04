import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../components/Navbar';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import DefaultUser from '../../../../public/img/profile/default-user.png'
import Swal from 'sweetalert2';
import styles from './Notification.module.css'
import Notify from '../../../../public/svg/notify.svg'

const notification = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [hire, setHire] = useState("");
  const router = useRouter();

  // Get token from localStorage
  useEffect(() => {
    setToken(localStorage.getItem("token"))
    setRole(localStorage.getItem("role"))
  }, [])

  const authWorker = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  // Delete notification
  const handleDelete = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/v1/hire/${id}`, authWorker)
      .then((response) => {
        Swal.fire({
          title: `Delete success`,
          text: `${response.data.message}`,
          icon: `success`
        }).then(() => window.location.reload())
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          title: `Delete failed`,
          text: `${error.response && error.response.data.message}`,
          icon: `error`
        })
      })
  }

  // Get worker's hire notification
  useEffect(() => {
    if(role == "worker"){
      if(router.isReady){
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/${router.query.id}/hire`)
        .then((result) => setHire(result.data.data))
        .catch((error) => console.log(error))
      }
    }else if (role == "recruiter") {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/recruiter/${router.query.id}/hire`)
      .then((result) => setHire(result.data.data))
      .catch((error) => console.log(error))
    }
  }, [router.isReady])

  return (
    <div className='bg-light vh-100' >
      <Navbar />
      <div className="container mt-5 bg-white rounded">
        <div className="row">
          <div className={"col-md-12 px-3 " + styles.notifyContainer}>
            {role != "recruiter" ? (
              <div className='fs-4 fw-bold my-2'>Notification</div>
            ) : (
              <div className='fs-4 fw-bold my-2'>Hire list</div>
            )}
            {hire ? hire.map((data) =>
              <div key={data.id} className='d-flex'>
                <Image src={data.image || DefaultUser} width={60} height={60} className="img rounded-circle align-self-center" alt="" />
                <div className="d-flex flex-column justify-content-center ms-3 me-auto">
                  <div className="d-flex">
                    {role == "recruiter" ? (
                      <div>{data.worker_name}</div>
                    ) : (
                      <div>{data.name}</div>
                    )}
                    {role == "recruiter" ? (
                      <div className='text-secondary ms-2'>({data.worker_email})</div>
                    ) : (
                      <div className='text-secondary ms-2'>({data.email})</div>
                    )}
                  </div>
                  <div>{data.reason}</div>
                  <div>{data.description}</div>
                </div>
                {role == "recruiter" && (
                  <div className='align-self-center'>
                    <Link href={`/worker/${router.query.id}/hire/${data.id}`}>
                      <button className='btn btn-secondary'>Edit</button>
                    </Link>
                  </div>
                )}
                <div className='ms-2 align-self-center'>
                  <button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
                </div>
              </div>
            ) : (
              <div className='d-flex flex-column justify-content-center align-items-center h-75'>
                <div className='d-flex flex-column'>
                  <Image src={Notify} width={150} height={150} alt="No data" />
                  <div className='align-self-center text-secondary'>Tidak ada notifikasi</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default notification