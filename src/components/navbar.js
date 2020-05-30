import React, { useState } from "react"
import { Link } from "gatsby"

const Menu = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <nav className="nav">
      <div
        className="nav__logo"
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
      >
        <p className="nav__logo__text">SC</p>
      </div>
      <div className="nav__bar">
        <ul className="nav__bar-ul">
          <li>
            <Link className="nav__bar__link" to="/">
              About Me
            </Link>
          </li>
          <li>
            <Link className="nav__bar__link" to="/about">
              Experience
            </Link>
          </li>
          <li>
            <Link className="nav__bar__link" to="/services">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav__bar__link" to="/blog">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
