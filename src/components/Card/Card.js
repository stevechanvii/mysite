import React from "react"

import MySite from "../../images/method-draw-image.svg"

const Card = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture">
          <span className="center__image"></span>
          <img src={MySite} alt="my site" className="card__picture--img" />
        </div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            Steve's portfolio
          </span>
        </h4>
        <div className="card__details">
          <div className="card__details__title">My portfolio</div>
          <div className="card__details__tech">
            <p className="card__details__tech--tag">ReactJS</p>
            <p className="card__details__tech--tag">GatsbyJS</p>
            <p className="card__details__tech--tag">Sass</p>
          </div>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">$297</p>
          </div>
          <a href="#" className="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
