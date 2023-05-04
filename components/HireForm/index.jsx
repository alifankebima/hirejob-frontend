import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const HireForm = (props) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const [data, setData] = useState({
    id_worker: props.id,
    reason: "Full-time",
    name: "",
    email: "",
    phone_number: "",
    description: "",
  });

  useEffect(() => {
    if (router.isReady) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/hire/${router.query.id_hire}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
  }, [router.isReady])

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id_worker: props.id
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  const auth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/worker/${props.id}/hire`, data, auth)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: `Hire success`,
          text: `${res.data.message}`,
          icon: `success`
        })
        router.push("/worker")
      }).catch((error) => {
        console.log(error)
        Swal.fire({
          title: `Hire failed`,
          text: `${error.response && error.response.data.message}`,
          icon: `error`
        })
      })
  }

  return (
    <div className="col-sm-12 col-md-7 rounded p-4 ms-md-5">
      <div className="d-flex flex-column h-100">
        <div className="fs-2">Hubungi {props.name}</div>
        <div className="mt-2 text-secondary">Silahkan isi form dibawah ini untuk mengirim pesan kepada {props.name}</div>
        <form onSubmit={handleSubmit}>
          <div className='fs-7 text-secondary mt-2 mt-sm-5'>Tujuan tentang pesan ini</div>
          <select className="form-select" name='reason' onChange={handleChange} aria-label="Default select example">
            <option selected value="Full-time">Full-time</option>
            <option value="Project">Project</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
          <div className='fs-7 text-secondary mt-4'>Nama Lengkap</div>
          <input type="name" className="form-control" placeholder="Masukkan nama lengkap" name="name" onChange={handleChange} value={data.name} />
          <div className='fs-7 text-secondary mt-4'>Email</div>
          <input type="name" className="form-control" placeholder="Masukkan email" name="email" onChange={handleChange} value={data.email} />
          <div className='fs-7 text-secondary mt-4'>No. Handphone</div>
          <input type="name" className="form-control" placeholder="Masukkan no. handphone" name="phone_number" onChange={handleChange} value={data.phone_number} />
          <div className='fs-7 text-secondary mt-4'>Deskripsi</div>
          <textarea className="form-control" rows="4" placeholder='Jelaskan lebih detail' name="description" onChange={handleChange} value={data.description}></textarea>

          <button type="submit" className="btn btn-warning text-white mt-5 p-2 w-100">Hire</button>
        </form>
      </div>
    </div>

  )
}

export default HireForm