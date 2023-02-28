import Button from '../Button'
import React from 'react'
import PurpleBackground from '../PurpleBackground'

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-3 p-4 bg-white shadow-sm rounded d-flex flex-column">
          <img src="img/profile/profile-picture.png" className="img-fluid rounded-circle align-self-center" alt="Profile" />
          <div className='mt-3'>John Doe</div>
          <div>Web developer</div>
          <div className='text-secondary'>Purwekerto</div>
          <div className='text-secondary'>Freelancer</div>
          <div className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</div>
          <Button text="Hire" />
          <div>Skill</div>
        </div>
        <div className="col-sm-12 col-md-9 bg-white shadow-sm rounded p-4">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Portfolio</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pengalaman Kerja</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              <div className="container-fluid mt-4">
                <div className="row gy-3">
                  <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                    <img src="img/profile/remainder-app.png" className="img-fluid rounded" alt="" />
                    <div className='mt-2'>Remainder App</div>
                  </div>
                  <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                    <img src="img/profile/social-media-app.png" className="img-fluid rounded" alt="" />
                    <div className='mt-2'>Social Media App</div>
                  </div>
                  <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                    <img src="img/profile/project-management-web.png" className="img-fluid rounded" alt="" />
                    <div className='mt-2'>Project Management Web</div>
                  </div>
                  <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                    <img src="img/profile/remainder-app-2.png" className="img-fluid rounded" alt="" />
                    <div className='mt-2'>Remainder App</div>
                  </div>
                  <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                    <img src="img/profile/social-media-app-2.png" className="img-fluid rounded" alt="" />
                    <div className='mt-2'>Social Media App</div>
                  </div>
                  <div className="col-sm-6 col-md-4 d-flex flex-column align-items-center">
                    <img src="img/profile/project-management-web-2.png" className="img-fluid rounded" alt="" />
                    <div className='mt-2'>Project Management Web</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
              <div className="d-flex flex-column">
                <div className='d-flex'>
                  <img className="img p-3 mx-3" src="img/profile/tokopedia.png" alt="tokopedia" />
                  <div className="d-flex flex-column gx-2">
                    <div>Engineer</div>
                    <div>Tokopedia</div>
                    <div className='text-secondary'>July 2019 - January 2020  6 Months</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, facilis.</div>
                    <div className="border-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile