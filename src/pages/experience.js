import React from "react"
import Layout from "../components/layout"

import VerticalTimeline from "../components/Timeline/VerticalTimeline"
import VerticalTimelineElement from "../components/Timeline/VerticalTimelineElement"

import WorkIcon from "@material-ui/icons/Work"
import SchoolIcon from "@material-ui/icons/School"
import StarIcon from "@material-ui/icons/Star"

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="exp">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "0.5rem solid #F4A261",
              borderRadius: "0.6rem",
              fontSize: "1.8rem",
              background: "#f5f5f5c4",
            }}
            contentArrowStyle={{ borderRight: "1.2rem solid F5F5F5" }}
            date="Feb 2020 - Present"
            iconStyle={{ background: "#F4A261", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Codejoy, Melbourne
            </h4>
            <ul className="exp__ul">
              <li>
                Working at a startup which just finished product design and
                research, but was short of developers.
              </li>
              <li>
                Developed an alpha Android App by Kotlin. Developed pose
                estimation games by JavaScript and P5.js framework. Collected
                exercises information using crawler by Python.
              </li>
              <li>
                Being a small Agile team which need to handle urgent and
                unplanned tasks in a limited of time.
              </li>
              <li>
                Our products successfully attracted investors. I acquired the
                abilities of rapid learning and the iterative development mode
                in a flat management team.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: "0.5rem solid #E76F51",
              borderRadius: "0.6rem",
              fontSize: "1.8rem",
              background: "#f5f5f5c4",
            }}
            contentArrowStyle={{ borderRight: "1.2rem solid F5F5F5" }}
            date="Nov 2019 - Jun 2020"
            iconStyle={{ background: "#E76F51", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer & Database Tutor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ausmotive Education, Melbourne
            </h4>
            <ul className="exp__ul">
              <li>
                An educational institution had just set up a new branch at
                Monash, and planed to offer courses in IT, but lacks experienced
                tutors and company website.
              </li>
              <li>
                Designed the institute official website. Developed WeChat mini
                program to support 40+ educational materials. Became one of the
                popular database tutor.
              </li>
              <li>
                Developed and deployed the website using Wix framework. Designed
                database courses to help students pass exam requirements.
              </li>
              <li>The pass rate of my students is higher than 90%.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </Layout>
  )
}

export default ExperiencePage
