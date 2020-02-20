import React from 'react'
import Logo1 from '../media/logo1.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={Logo1} id="navLogo" className="d-inline-block align-top" alt="logo on navbar" />
        </a>
      </nav>
    </div>
  )
}

export default Navbar