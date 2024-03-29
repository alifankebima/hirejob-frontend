import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const Candidates = (props) => {

  return (
    <div className='container d-flex bg-white p-3'>
      <Image src={props.image || ""} className="img-fluid rounded-circle" width={105} height={105} alt="Profile" />
      <div className='d-flex flex-column ms-3'>
        <div className='fs-5'>{props.name}</div>
        <div className='text-secondary'>{props.jobdesk}</div>
        <div className='text-secondary'>{props.residence}</div>
        <div className='d-flex mt-1'>
          {props.skills && props.skills.map((data, index) =>
            <span key={index + data} className="badge text-bg-warning text-white me-2">{data}</span>
          )}
        </div>
      </div>
      <div className='ms-auto align-self-center'>
        <Link href={props.link}>
          <Button text="Lihat Profile" />
        </Link>
      </div>

    </div>
  )
}

export default Candidates