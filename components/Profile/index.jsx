import Button from '../Button'
import React from 'react'
import PurpleBackground from '../PurpleBackground'

const Profile = (props) => {
  return (
    <div className="col-sm-12 col-md-3 p-4 bg-white shadow-sm rounded d-flex flex-column">
      <img src={props.image} className="img-fluid rounded-circle align-self-center" alt="Profile" />
      <div className='mt-3 fw-bold fs-5'>{props.name}</div>
      <div className='mt-2'>{props.jobdesk}</div>
      <div className='text-secondary mt-2'>{props.residence}</div>
      <div className='text-secondary mt-2'>{props.description}</div>
      <Button text="Hire" class="mt-3"/>
      <div className='d-flex flex-wrap mt-3 justify-content-center'>
        {props.skill && props.skill.map((data) =>
        <div class="badge text-bg-warning text-white mb-2 me-2">{data}</div>
      )}
      </div>
    </div>
  )
}

export default Profile