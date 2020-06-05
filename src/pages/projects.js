import React from "react"
import Layout from "../components/layout"

import Card from "../components/Card/Card"
import projects from "../data/projects"

const ProjectPage = () => {
  return (
    <Layout>
      <div className="project">
        {projects.map((project, index) => (
          <Card
            image={project.image}
            backgroundStyle={project.backgroundStyle}
            imageTitle={project.imageTitle}
            title={project.title}
            labels={project.labels}
            key={index}
          >
            <div className="card__desc">
              <div className="card__desc__details">
                <ul className="card__desc__details-ul">
                  {project.content.map((paragraph, index) => (
                    <li className="card__desc__details-ul-li" key={index}>
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card__desc__btn">
                {project.button.map((btn, index) => (
                  <a
                    className={`btn__effect btn__effect-left ${btn.style}`}
                    href={btn.link}
                    style={{ background: btn.color }}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {btn.name}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectPage
