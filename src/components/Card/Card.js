import React from "react"

import MySite from "../../images/method-draw-image.svg"
import GitHubIcon from "@material-ui/icons/GitHub"

const Card = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture">
          <span className="center__image"></span>
          <img src={MySite} alt="my site" className="card__picture--img" />
        </div>
        <h4 className="card__heading">
          <span className="card__heading-span">Web</span>
        </h4>
        <div className="card__info">
          <div className="card__info__title">My portfolio</div>
          <div className="card__info__tech">
            <p className="card__info__tech--label">ReactJS</p>
            <p className="card__info__tech--label">GatsbyJS</p>
            <p className="card__info__tech--label">Sass</p>
            <p className="card__info__tech--label">AWS</p>
          </div>
        </div>
      </div>
      <div className="card__side card__side--back">
        <div className="card__desc">
          <div className="card__desc__details">
            <ul className="card__desc__details-ul">
              <li className="card__desc__details-ul-li">
                A single-page application developed by React and Gatsby
                framework.
              </li>
              <li className="card__desc__details-ul-li">
                Sass is used for beautiful design and animation.
              </li>
              <li className="card__desc__details-ul-li">
                Deployed in AWS Amplify.
              </li>
            </ul>
          </div>
          <div className="card__desc__btn">
            <a
              className="btn__effect btn__effect-left btn__effect-left-view"
              href="#"
              title="Learn More"
            >
              Demo
            </a>
            <a
              className="btn__effect btn__effect-left btn__effect-left-git"
              href="#"
              title="Learn More"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
