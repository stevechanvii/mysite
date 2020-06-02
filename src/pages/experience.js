import React from "react"
import Layout from "../components/layout"

import VerticalTimeline from "../components/Timeline/VerticalTimeline"
import VerticalTimelineElement from "../components/Timeline/VerticalTimelineElement"
import StarIcon from "@material-ui/icons/Star"
import experience from "../data/experience"

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="exp">
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                borderTop: `0.5rem solid ${exp.color}`,
                borderRadius: "0.6rem",
                fontSize: "1.8rem",
                background: "#f5f5f5c4",
              }}
              contentArrowStyle={{ borderRight: "1.2rem solid F5F5F5" }}
              date={exp.date}
              iconStyle={{ background: exp.color, color: "#fff" }}
              icon={<exp.icon />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.subtitle}
              </h4>
              <ul className="exp__ul">
                {exp.content.map((details, index) => (
                  <li key={index}>{details}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: "#577590", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </Layout>
  )
}

export default ExperiencePage
