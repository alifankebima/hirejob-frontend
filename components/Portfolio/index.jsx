import Image from 'next/image'
import React from 'react'
import OfficeBuildingSmall from '../../public/img/placeholder/office-building-small.png'
import styles from './Portfolio.module.css'
import NoData from '../../public/svg/no-data.svg'

const Portfolio = (props) => {

  return (
    <div className="col-sm-12 col-md-9 bg-white shadow-sm rounded p-4">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className={styles.PortfolioSelector + " active fw-normal me-3"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Portfolio</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={styles.PortfolioSelector + " fw-normal"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pengalaman Kerja</button>
        </li>
      </ul>
      <div className="tab-content h-100" id="pills-tabContent">
        <div className="tab-pane h-100 fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <div className="container-fluid mt-4 h-100">
            {props.portfolio[0] ?
              (<div className="row gy-3">
                {props.portfolio && props.portfolio.map((item) =>
                  <a key={item.id} className="col-sm-6 col-md-4 text-decoration-none text-body" href={item.repo_link}>
                    <div className="d-flex flex-column align-items-center bg-light rounded p-2">
                      <Image src={item.image || ""} width={240} height={115} crossOrigin="anonymous" className={"img-fluid rounded"} alt={item.name} />
                      <div className='mt-2'>{item.name}</div>
                    </div>
                  </a>
                )}
              </div>) : (
                <div className='d-flex align-items-center justify-content-center h-75'>
                  <div className='d-flex flex-column'>
                    <Image src={NoData} width={100} height={100} alt="No data"/>
                    <div className='align-self-center text-secondary mt-2'>Not found</div>
                  </div>
                </div>
              )}
          </div>
        </div>
        <div className="tab-pane fade h-100" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          {props.workExperience[0] ?
            (<div className="d-flex flex-column">
              {props.workExperience && props.workExperience.map((item, index) =>
                <>
                  <div className='d-flex'>
                    <Image className="img p-3 mx-3 align-self-center" width={80} height={80} src={OfficeBuildingSmall} crossOrigin="anonymous" alt="Office building"/>
                    <div className="d-flex flex-column flex-grow-1 gx-2">
                      <div>{item.jobdesk}</div>
                      <div>{item.company_name}</div>
                      <div className='text-secondary'>{item.date_start} - {item.date_end}</div>
                      {/* <div>{item.description}</div> */}
                    </div>
                  </div>
                  {index < props.workExperience.length - 1 && (<div className="border-bottom my-2" />)}
                </>
              )}
            </div>) : (
              <div className='d-flex align-items-center justify-content-center h-75 mt-4'>
                <div className='d-flex flex-column'>
                  <Image src={NoData} width={100} height={100} alt="No data" />
                  <div className='align-self-center text-secondary mt-2'>Not found</div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio