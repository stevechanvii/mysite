import React, { useState } from "react"
import { Link } from "gatsby"

import Modal from "./Modal/Modal"

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
        <p className="modal__header">G'day, greeting from Danyang!</p>
        <div className="modal__content">
          <p>
            Hi, I'm Danyang. Currently looking for frontend opportunities in
            Melbourne. As a graduate of Monash University (Master of IT), I have
            focused my career path and academic goal on frontend development,
            especially React and React Native. Coding has made my life full of
            challenges and a sense of accomplishment, and I pride myself as a
            very effective leaner and developer.
          </p>
          <p>
            During this difficult period, I do not stop learning. Apart from my
            full-time job, I developed stevechanvii.me, and a Developer
            Portfolio website by Node.js. My next goal is to become a full-stack
            developer, and the good news is I just become an Amazon AWS
            Certified Associate Architect. However, I know I still have a long
            way to go, but I look forward to making my effort and applying my
            skills to your company.
          </p>
          <p>
            I am passionate about my career as a programmer. If you are
            interested in my experiences and projects, please contact me.
          </p>
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
