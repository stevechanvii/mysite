import React, { useState } from "react"

import Layout from "../components/layout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ImageMe } from "../components/image"

import email from "../images/logo-email.svg"
import linkedin from "../images/logo-linkedin.svg"
import instagram from "../images/logo-instagram.svg"
import github from "../images/logo-github-color.svg"

const ContactPage = () => {
  const text = "chendanyangvii@gmail.com"
  const [isCopyed, setIsCopyed] = useState(false)

  return (
    <Layout>
      <div className="contact">
        <div className="contact__main">
          <figure className="contact__main__shape">
            <div className="contact__main__img">
              <ImageMe />
            </div>
            <figcaption className="contact__main__caption">
              Steve Chan
            </figcaption>
          </figure>
          <div className="contact__main__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Interested? Get in touch now :)
            </h3>
            <div className="contact__main__text-email">
              <img
                src={email}
                alt="email"
                className="contact__main__text-logo"
              />
              <CopyToClipboard text={text} onCopy={() => setIsCopyed(true)}>
                <div className="arrow">
                  <span className="contact__main__text-email-span">
                    chendanyangvii@gmail.com
                  </span>
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </div>
              </CopyToClipboard>
              {isCopyed ? (
                <span className="contact__main__text-email-copy">Copyed!</span>
              ) : null}
            </div>
            <div className="contact__main__text-other">
              <a
                href="https://www.linkedin.com/in/danyang-chen-19a753169/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="contact__main__text-logo"
                />
              </a>
              <a
                href="https://github.com/stevechanvii"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="contact__main__text-logo"
                />
              </a>
              <a
                href="https://www.instagram.com/stevechan.vii/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="contact__main__text-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
