import React from 'react'
import Button from '../Button'

const Candidates = (props) => {
  props
  return (
    <div className='container d-flex bg-white p-3'>
      <img src="img/profile/profile-picture.png" className="img-fluid rounded-circle" alt="Profile" />
      <div className='d-flex flex-column ms-3'>
        <div className='fs-5'>{props.name}</div>
        <div className='text-secondary'>Web Developer</div>
        <div className='text-secondary'>Lorem Ipsum</div>
        <div className='d-flex'>
          <span class="badge text-bg-warning">HTML</span>
          <span class="badge text-bg-warning">CSS</span>
          <span class="badge text-bg-warning">JavaScript</span>
        </div>
      </div>
      <div className='ms-auto align-self-center'>
      <Button text="Lihat Profile" />
      </div>
      
    </div>
  )
}

export default Candidates