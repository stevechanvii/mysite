import WorkIcon from "@material-ui/icons/Work"
import CakeIcon from "@material-ui/icons/Cake"
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle"
import SchoolIcon from "@material-ui/icons/School"
import ImportContactsIcon from "@material-ui/icons/ImportContacts"
import HomeIcon from "@material-ui/icons/Home"
import BackupIcon from "@material-ui/icons/Backup"
import CastForEducationIcon from "@material-ui/icons/CastForEducation"

import imgBeefNoodle from "../images/exp/beefNoodles.jpg"
import imgGuangzhou from "../images/exp/guangzhou.jpg"
import imgUni from "../images/exp/uni.jpg"
import imgAussie from "../images/exp/aussie.jpg"
import imgMonash from "../images/exp/graduate.jpg"
import imgOscer from "../images/exp/oscer.jpg"
import imgHeidi from "../images/exp/heidi.jpg"

/* Color palettes
 * https://coolors.co/f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590
 *
 * Icons
 * https://material-ui.com/components/material-icons/
 * 
 * Data formate
{
  title: "",
  subtitle: "",
  date: "",
  content: ["", ""],
  icon: Object,
  color: "#"
}
*/
export default [
  // {
  //   title: "Acquired AWS Certificate",
  //   subtitle: "Solutions Architect - Associate",
  //   date: "May 2020",
  //   content: [
  //     "Effectively demonstrate knowledge of how to architect and deploy secure and robust applications on AWS.",
  //     "Define a solution using architectural design principles based on requirements.",
  //   ],
  //   icon: BackupIcon,
  //   color: "#F94144",
  // },
  // {
  //   title: "Frontend Developer",
  //   subtitle: "Codejoy, Melbourne",
  //   date: "Feb 2020 - Present",
  //   content: [
  //     "Working at a startup which just finished product design and research, but was short of developers.",
  //     "Developed an alpha Android App based on Kotlin. Developed pose estimation games by JavaScript and P5.js framework. Collected exercises information using crawler by Python.",
  //     "Being a small Agile team which needs to handle urgent and unplanned tasks in a limited time.",
  //     "Our products successfully attracted investors. I acquired the abilities of rapid learning and the iterative development model in a flat management team.",
  //   ],
  //   icon: WorkIcon,
  //   color: "#F3722C",
  // },
  // {
  //   title: "Web Developer & Database Mentor",
  //   subtitle: "Ausmotive Education, Melbourne",
  //   date: "Nov 2019 - May 2020",
  //   content: [
  //     "An educational institution had just set up a new branch at Monash, and planned to offer courses in IT, but lacks experienced mentors and company website.",
  //     "Designed the institute's official website. Developed a WeChat mini program to support 40+ educational materials.",
  //     "Developed and deployed the website using Wix framework. Help students pass the exam by my solid knowledge in SQL and NoSQL.",
  //     "The pass rate of my students is higher than 90%.",
  //   ],
  //   icon: WorkIcon,
  //   color: "#F8961E",
  // },
  // {
  //   title: "Graduated from Monash University",
  //   subtitle: "Master of Information Technology",
  //   date: "Nov 2016 - Oct 2019",
  //   content: [
  //     "Average Grade: 71.5, Distinction",
  //     "Awarded IT International Merit Scholarship.",
  //     "Winner of Post Graduate Industry Experience 2019.",
  //     "Winner of Capture Monash photography competition.",
  //   ],
  //   icon: SchoolIcon,
  //   color: "#F9C74F",
  // },
  // {
  //   title: "Frontend Developer",
  //   subtitle: "Hygia, Monash Graduation Project",
  //   date: "Feb 2019 - Jun 2019",
  //   content: [
  //     "Worked at a team to develop a cross-platform app for people who suffer from allergy and intolerance.",
  //     "Led an agile team to analyse, design, and develop the App by React Native framework in 12 weeks.",
  //     "Experienced a complete project life cycle, including market analysis, project approval, team management, conflict resolution, development, testing, documentation, and elevator pitch.",
  //     "We are the only team that supported three platforms, including Android, iOS, and a website.",
  //     "Winner of Post Graduate Industry Experience 2019.",
  //   ],
  //   icon: WorkIcon,
  //   color: "#f4978e",
  // },
  // {
  //   title: "Monash University postgraduate coding bootcamp",
  //   subtitle: "Java and Python tutor",
  //   date: "Feb 2019 – Mar 2019",
  //   content: [
  //     "To become a volunteer in tutoring Java and Python for the freshmen who have no programming background.",
  //     "Created syllabus and teaching materials and setup peer groups learning together.",
  //   ],
  //   icon: CastForEducationIcon,
  //   color: "#90BE6D",
  // },
  // {
  //   title: "Java EE developer",
  //   subtitle: "China National Software & Service, China",
  //   date: "Aug 2016 – Oct 2016",
  //   content: [
  //     "An internship at one of the largest software company which develops human resource management system.",
  //     "Re-designed and developed the existing website of the Disabled Persons' Federation, which utilized Java Spring Framework.",
  //   ],
  //   icon: WorkIcon,
  //   color: "#43AA8B",
  // },

  {
    title: "Born",
    subtitle: "Lanzhou, China",
    date: "1993",
    content: [
      "Lanzhou is the capital and largest city of Gansu Province in Northwest China",
      "Lanzhou beef noodle",
    ],
    icon: CakeIcon,
    color: "#F94144",
    smallImg: imgBeefNoodle,
  },
  {
    title: "Moved to South",
    subtitle: "Guangzhou, China",
    date: "2003",
    content: [
      "Guangzhou is a sprawling port city northwest of Hong Kong on the Pearl River",
      "Dim sum, Cantonese BBQ, Seafood",
    ],
    icon: AirportShuttleIcon,
    color: "#F3722C",
    smallImg: imgGuangzhou,
    // largeImg:
  },
  {
    title: "University",
    subtitle: "Zhuhai, China",
    date: "2012 - 2016",
    content: [
      "Computer Science",
      "Fun fact: Kerry and I studied at same Uni but never met",
    ],
    icon: SchoolIcon,
    color: "#F8961E",
    smallImg: imgUni,
    // largeImg:
  },
  {
    title: "Came to Aussie",
    subtitle: "Melbourne, Australia",
    date: "2016",
    content: ["Decided to study aboard", "Information Technology"],
    icon: HomeIcon,
    color: "#F9C74F",
    smallImg: imgAussie,
    // largeImg:
  },
  {
    title: "Studied at Monash",
    subtitle: "Melbourne, Australia",
    date: "2017 - 2019",
    content: ["Fun fact: Met Claudia"],
    icon: ImportContactsIcon,
    color: "#F9C74F",
    smallImg: imgMonash,
    // largeImg:
  },
  {
    title: "Oscer",
    subtitle: "Melbourne, Australia",
    date: "2019",
    content: ["Graduate developer", "Fun fact: Tom and Eliza interviewed me"],
    icon: WorkIcon,
    color: "#f4978e",
    smallImg: imgOscer,
    // largeImg:
  },
  {
    title: "Heidi",
    subtitle: "Melbourne, Australia",
    date: "2021",
    content: ["Eliminate missed and delayed diagnosis"],
    icon: WorkIcon,
    color: "#43AA8B",
    smallImg: imgHeidi,
    // largeImg:
  },
]
