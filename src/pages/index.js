import React, { useState } from "react"
import { TypeAnimation } from "react-type-animation"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IndexImage from "../images/img-index.svg"

const IndexPage = () => {
  const [animationState, setAnimationState] = useState(0)

  return (
    <Layout>
      <SEO
        title="Portfolio"
        keywords={[
          `danyang`,
          `danayng chen`,
          `steve chan`,
          `react`,
          `person website`,
        ]}
      />
      <div className="home">
        <h1 className="home__name">Danyang Chen</h1>
        <div className="home__main">
          <div className="home__main__intro">
            <div style={{ minHeight: 300 }}>
              {animationState === 0 ? (
                <TypeAnimation
                  sequence={[
                    "Hello there, welcome to my portfolio 😆. I am a programmer",
                    1000,
                    "Hello there, welcome to my portfolio 😆. I am a software engineer 👨‍💻, Getty Image photographer 📸 and Marathon runner 🏃🏻.", // Types 'Three' without deleting 'Two'
                    1000,
                    () => {
                      setAnimationState(1)
                    },
                  ]}
                  wrapper="p"
                  cursor={!animationState}
                  className="home__main__intro__desc"
                />
              ) : (
                <p className="home__main__intro__desc">
                  Hello there, welcome to my portfolio 😆. I am a software
                  engineer 👨‍💻, Getty Image photographer 📸 and Marathon runner
                  🏃🏻.
                </p>
              )}
              <br />
              {animationState === 1 ? (
                <TypeAnimation
                  sequence={[
                    `I am also passionate about hiking 🥾, camping 🏕️, surfing 🏄‍♂️, diving 🤿, coffee ☕ and ukulele 🎸, to become a life artist will be my long-term goal!`,
                    () => {},
                  ]}
                  wrapper="p"
                  cursor={true}
                  className="home__main__intro__desc"
                />
              ) : null}
            </div>
            <a
              href="https://resume.stevechanvii.me/"
              className="home__main__intro__download"
              target="_blank"
              rel="noreferrer"
            >
              <span className="home__main__intro__download-visible">
                Download Resume
              </span>
              <span className="home__main__intro__download-invisible">
                Thanks for Watching
              </span>
            </a>
          </div>
          <div className="home__main__svg">
            <img
              src={IndexImage}
              alt="index"
              className="home__main__picture--img"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
