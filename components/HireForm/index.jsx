import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const HireForm = (props) => {
  const router = useRouter();

  const [data, setData] = useState({
    id_worker: "",
    reason: "hire",
    name: "",
    email: "",
    phone_number: "",
    description: "",
  });

  useEffect(() => {
    if (router.isReady) {
      axios.get(`http://localhost:4000/hire/${router.query.id_hire}`)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/hire', data)
      .then((res) => {
        console.log(res.data);
        alert("create success")
        window.location.reload();
      }).catch((err) => {
        console.log(err)
        alert("create failed")
      })
  }

  return (
    <div className="col-sm-12 col-md-7 rounded p-4 ms-md-5">
      <div className="d-flex flex-column h-100">
        <div className="fs-2">Hubungi {props.name}</div>
        <div className="mt-2 text-secondary">Silahkan isi form dibawah ini untuk mengirim pesan kepada {props.name}</div>
        <form onSubmit={handleSubmit}>
          <div className='fs-7 text-secondary mt-2 mt-sm-5'>Tujuan tentang pesan ini</div>
          <select class="form-select" name='reason' onChange={handleChange} aria-label="Default select example">
            <option selected value="hire">Hire</option>
            <option value="project">Project</option>
          </select>
          <div className='fs-7 text-secondary mt-4'>Nama Lengkap</div>
          <input type="name" class="form-control" placeholder="Masukkan nama lengkap" name="name" onChange={handleChange} value={data.name} />
          <div className='fs-7 text-secondary mt-4'>Email</div>
          <input type="name" class="form-control" placeholder="Masukkan email" name="email" onChange={handleChange} value={data.email} />
          <div className='fs-7 text-secondary mt-4'>No. Handphone</div>
          <input type="name" class="form-control" placeholder="Masukkan no. handphone" name="phone_number" onChange={handleChange} value={data.phone_number} />
          <div className='fs-7 text-secondary mt-4'>Deskripsi</div>
          <textarea class="form-control" rows="4" placeholder='Jelaskan lebih detail' name="description" onChange={handleChange} value={data.description}></textarea>

          <button type="submit" class="btn btn-warning text-white mt-5 p-2 w-100">Hire</button>
        </form>
      </div>
    </div>

  )
}

export default HireForm