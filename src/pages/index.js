import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import resume from "../assets/DanyangChen_Resume.pdf"

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
            Hi I'm Steve, welcome to my portfolio. I am a front-end developer
            who loves photography and creating.
          </p>
          <a
            href={resume}
            className="home__main__intro__download"
            target="_blank"
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
          <Image />
        </div>
      </div>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
