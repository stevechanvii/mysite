import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Designed and developed by
      {` `}
      <a href="" className="a__underline">
        <span>Steve (Danyang) Chen</span>
        <svg viewBox="0 0 13 20">
          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
        </svg>
      </a>
      | Some icons from{" "}
      <a
        href="https://www.flaticon.com/authors/freepik"
        className="a__underline"
      >
        <span>Freepik</span>
        <svg viewBox="0 0 13 20">
          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
        </svg>
      </a>
    </footer>
  )
}
export default Footer
