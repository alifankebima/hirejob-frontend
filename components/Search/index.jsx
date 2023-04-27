import React from 'react'
import Button from '../Button'

const Search = () => {
    return (
        <div className='container mt-5 shadow-sm'>
            <form onSubmit="#" className='d-flex'>
                <input type="email" className="form-control border-0" placeholder="Search for any skill" />
                <button>Kategori</button>
                <Button text="Submit" className=""/>
            </form>
        </div>
    )
}

export default Search