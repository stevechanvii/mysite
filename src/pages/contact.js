import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import email from "../images/logo-email.svg"
import linkedin from "../images/logo-linkedin.svg"
import instagram from "../images/logo-instagram.svg"
import github from "../images/logo-github-color.svg"
import me from "../images/nat-8.jpg"

const ContactPage = () => (
  <Layout>
    <div className="contact">
      <div className="contact__main">
        <figure className="contact__main__shape">
          <img src={me} alt="Person on a tour" className="contact__main__img" />
          <figcaption className="contact__main__caption">Steve Chan</figcaption>
        </figure>
        <div className="contact__main__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Interesting? Get in touch now :)
          </h3>
          <div className="contact__main__text-email">
            <img src={email} alt="email" className="contact__main__text-logo" />
            <p>chendanyangvii@gmail.com</p>
          </div>
          <div className="contact__main__text-other">
            <img
              src={linkedin}
              alt="linkedin"
              className="contact__main__text-logo"
            />
            <img
              src={github}
              alt="github"
              className="contact__main__text-logo"
            />
            <img
              src={instagram}
              alt="instagram"
              className="contact__main__text-logo"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
