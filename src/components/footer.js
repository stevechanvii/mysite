import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Developed by
      {` `}
      <a href="" className="a__underline">
        <span>Danyang Chen</span>
        <svg viewBox="0 0 13 20">
          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
        </svg>
      </a>
    </footer>
  )
}

export default Footer
