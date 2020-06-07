import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../assets/DanyangChen_Resume.pdf"

import IndexImage from "../images/img-index.svg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
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
          <p className="home__main__intro__desc">
            Hi I'm Steve, welcome to my portfolio. I am a frontend developer who
            loves photography and creating. To become a full-stack developer &
            network security specialist will be my long-term goal.
          </p>
          <a
            href={resume}
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

export default IndexPage
