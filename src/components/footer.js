import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        © {new Date().getFullYear()} Developed by
        {` `}
        <a
          href="https://www.linkedin.com/in/danyang-chen-19a753169/"
          className="arrow"
        >
          <span>Danyang Chen (SteveChan)</span>
          <svg viewBox="0 0 13 20">
            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          </svg>
        </a>
      </div>
      <div className="footer__separate">|&nbsp; &nbsp;</div>
      <div>
        Icons from{" "}
        <a href="https://www.flaticon.com/authors/freepik" className="arrow">
          <span>Freepik</span>
          <svg viewBox="0 0 13 20">
            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
export default Footer
