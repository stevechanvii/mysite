import React, { useState } from "react"
import { Link } from "gatsby"

import Modal from "./Modal/Modal"
import modalData from "../data/modal"

const Menu = () => {
  const items = [
    { "": "About Me" },
    { experience: "Experience" },
    { projects: "Projects" },
    { contact: "Contact" },
  ]

  const modalAnimation = [
    "zoom",
    "fade",
    "flip",
    "door",
    "rotate",
    "slideUp",
    "slideDown",
    "slideLeft",
    "slideRight",
  ]

  const [isVisible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const getRndInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <nav className="nav">
      <div className="nav__logo" onClick={() => showModal()}>
        <p className="nav__logo__text"></p>
      </div>
      <Modal
        visible={isVisible}
        onClose={() => hideModal()}
        animation={modalAnimation[getRndInteger(0, 8)]}
        width={800}
      >
        <p className="modal__header">{modalData.title}</p>
        <div className="modal__content">
          {modalData.content.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </Modal>
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
