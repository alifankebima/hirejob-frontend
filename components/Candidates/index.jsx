import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const Candidates = (props) => {

  return (
    <div className='container d-flex bg-white p-3'>
      <img src={props.image} crossOrigin="anonymous" className="img-fluid rounded-circle" style={{width:"100px", height:"100px"}} alt="Profile" />
      <div className='d-flex flex-column ms-3'>
        <div className='fs-5'>{props.name}</div>
        <div className='text-secondary'>{props.jobdesk}</div>
        <div className='text-secondary'>{props.residence}</div>
        <div className='d-flex'>
        {props.skill && props.skill.map((data) =>
        <span class="badge text-bg-warning text-white me-2">{data}</span>
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