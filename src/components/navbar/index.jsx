import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
const Navbar = (props) => {
  const { title, logoImage, firstName } = props
  return (
    <div className={styles.navbar}>
      <ul className={styles.flexContainer}>
        {logoImage && (
          <li>
            <Link to="/">
              <img
                src={logoImage}
                alt="Realtor logo"
                className={styles.logo}
                tabIndex={1}
              ></img>
            </Link>
          </li>
        )}
        {title && (
          <li
            data-testid="navbar-title"
            className={styles.navbarTitle}
            tabIndex={-1}
          >
            {title}
          </li>
        )}
        {firstName && (
          <li data-testid="navbar-welcome">
            <Link to="/profile" tabIndex={2}>
              Welcome {firstName}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
