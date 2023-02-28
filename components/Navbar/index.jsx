import React from 'react'
import ButtonOutline from '../ButtonOutline'
import Button from '../Button'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#">Hirejob</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ButtonOutline text="Masuk" class="ms-auto me-2"/>
          <Button text="Login" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar