import Button from '../Button'
import React from 'react'
import PurpleBackground from '../PurpleBackground'
import Link from 'next/link'
import Image from 'next/image'
import DefaultUser from '../../public/img/profile/default-user.png'

const Profile = (props) => {
  return (
    <div className="col-sm-12 col-md-3 p-4 bg-white shadow-sm rounded d-flex flex-column">
      <Image src={props.image || DefaultUser} crossOrigin="anonymous" width={150} height={150} className="img-fluid rounded-circle align-self-center" alt="Profile" />
      <div className='mt-3 fw-bold fs-5'>{props.name}</div>
      <div className='mt-2'>{props.jobdesk}</div>
      <div className='text-secondary mt-2'>{props.residence}</div>
      {/* <div className='text-secondary mt-2'>{props.description}</div> */}
      {!!props.hireButton && <Link href={props.id && "/worker/" + props.id + "/hire"} ><Button text="Hire" className="mt-3 w-100" /></Link>}
      <div className='mt-3 fs-5'>Skill</div>
      <div className='d-flex flex-wrap mt-2'>
        {props.skill && props.skill.map((data, index) =>
          <div key={index} className="badge text-bg-warning text-white mb-2 me-2">{data.name}</div>
        )}
      </div>
    </div>
  )
}

export default Profile