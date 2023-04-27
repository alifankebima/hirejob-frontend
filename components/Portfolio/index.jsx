import Image from 'next/image'
import React from 'react'

const Portfolio = (props) => {

  return (
    <div className="col-sm-12 col-md-9 bg-white shadow-sm rounded p-4">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Portfolio</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pengalaman Kerja</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <div className="container-fluid mt-4">
            <div className="row gy-3">
              {props.portfolio && props.portfolio.map((item) =>
                <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                  <Image src={item.image} crossOrigin="anonymous" className="img-fluid rounded" alt="" />
                  <div className='mt-2'>{item.name}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <div className="d-flex flex-column">
            
          {props.workExperience && props.workExperience.map((item) =>
                <div className='d-flex'>
                <img className="img p-3 mx-3" style={{maxWidth:"100px", maxHeight:"100px"}} src="http://localhost:4000/img/profile/office-building(1).png" crossOrigin="anonymous" />
                <div className="d-flex flex-column gx-2">
                  <div>{item.jobdesk}</div>
                  <div>{item.company_name}</div>
                  <div className='text-secondary'>{item.date_start}</div>
                  <div>{item.description}</div>
                  <div className="border-bottom mb-3"></div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio