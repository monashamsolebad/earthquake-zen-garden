import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = (props) => {
  const { title, logoImage, firstName } = props
  return (
    <div className="navbar">
      <ul className="flex-container">
        {logoImage && (
          <li>
            <Link to="/">
              <img
                src={logoImage}
                alt="Realtor logo"
                className="logo"
                tabIndex={1}
              ></img>
            </Link>
          </li>
        )}
        {title && (
          <div className="navbar-title" tabIndex={2}>
            {title}
          </div>
        )}
        {firstName && (
          <li>
            <Link to="/profile" tabIndex={3}>
              Welcome {firstName}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
export default Navbar
