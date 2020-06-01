import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  const items = [
    { "": "About Me" },
    { experience: "Experience" },
    { projects: "Projects" },
    { contact: "Contact" },
  ]

  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__logo">
          <p className="nav__logo__text"></p>
        </div>
      </Link>
      <div className="nav__bar">
        <ul className="nav__bar-ul">
          {items.map(item => (
            <li key={Object.values(item)[0]}>
              <Link
                className={`nav__bar__link`}
                activeClassName="nav__bar__link-active"
                to={`/${Object.keys(item)[0]}`}
              >
                {Object.values(item)[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu
