import Button from '../Button'
import React from 'react'

const Profile = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3 p-4 bg-success rounded m-2">
                    <img src="img/profile-picture.png" className="img-fluid rounded-circle" alt="Profile" />
                    <div>John Doe</div>
                    <div>Web developer</div>
                    <div className='text-secondary'>Purwekerto</div>
                    <div className='text-secondary'>Freelancer</div>
                    <div className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</div>
                    <Button text="Hire" />
                    <div>Skill</div>
                </div>
                <div className="col-8 bg-warning rounded p-4 m-2">
                    hello
                </div>
            </div>
        </div>
    )
}

export default Profile