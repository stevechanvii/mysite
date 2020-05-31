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
      <div className="home__main">
        <h1 className="home__main__name">Danyang Chen</h1>
        <p className="home__main__desc">
          Hi I'm Steve, welcome to my portfolio. I am a photographer who codes{" "}
        </p>
        <a href={resume} className="home__main__download" target="_blank">
          <span className="home__main__download-visible">Download Resume</span>
          <span className="home__main__download-invisible">
            Thanks for Watching
          </span>
        </a>
      </div>
      <div className="home__svg"></div>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
