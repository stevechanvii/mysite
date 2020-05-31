import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()}, Developed by
      {` `}
      <a href="https://www.gatsbyjs.org">Danyang Chen</a>
    </footer>
  )
}

export default Footer
