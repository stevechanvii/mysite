import resume from "../images/projects/resume.svg"
import Portfolio from "../images/projects/portfolio.svg"
import covid19 from "../images/projects/covid19.svg"
import noMilk from "../images/projects/no-milk.svg"
import whackMole from "../images/projects/whack-mole.svg"
import burger from "../images/projects/burger.svg"
import booking from "../images/projects/booking.svg"
import house from "../images/projects/house.svg"
import tour from "../images/projects/tour.svg"
import search from "../images/projects/search.svg"

/* Color palettes
 * https://coolors.co/gradient-palette/ff1900-f9bc2c?number=7
 * 
 * Data formate
{
  title: "",
  backgroundStyle: {backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)"},
  image: Object,
  imageTitle: "",
  labels: [{name: "React", color: "#4880EC"}],
  content: ["", "", ""],
  button: [{name: "Demo", link: "", style: {}, color: ""]
}
*/
export default [
  {
    title: "Covid-19 Tracker",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #438AEE, #00bbf9)",
    },
    image: covid19,
    imageTitle: "Frontend",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "D3.js", color: "#F57F50" },
      { name: "GitHub", color: "#000000" },
      { name: "HTML5", color: "#E44D27" },
      { name: "Mathdro API", color: "#48525E" },
    ],
    content: [
      "A coronavirus tracker based on different countries developed by React.",
      "Responsive design (map/table) to fit the different screen sizes.",
      "Deployed in GitHub page.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://stevechanvii.github.io/cov-19/",
        style: "btn__effect-left-view",
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/cov-19",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Poke Allergist",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #ff9f1c, #f9c74f)",
    },
    image: noMilk,
    imageTitle: "Android/iOS",
    labels: [
      { name: "React Native", color: "#07C8F9" },
      { name: "Firebase", color: "#FCCB2E" },
      { name: "ML Kit", color: "#2F7EE3" },
      { name: "OpenFoodFact API", color: "#48525E" },
    ],
    content: [
      "Android and iOS Apps for people who suffer from allergy and intolerance.",
      "Machine Learning is used for allergies detection and text recognition.",
      "Download available from Google Play.",
    ],
    button: [
      {
        name: "Play",
        link:
          "https://play.google.com/store/apps/details?id=com.pokeallergist&hl=en",
        style: "btn__effect-left-google-play",
        color: "#f3722c",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/EatSafe-v2",
        style: "btn__effect-left-git",
        color: "#f77f00",
      },
    ],
  },
  {
    title: "SteveChanVII.me",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #ff7e5f, #feb47b)",
    },
    image: resume,
    imageTitle: "Frontend",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby.js", color: "#8055AA" },
      { name: "SCSS", color: "#D77EAB" },
      { name: "GraphQL", color: "#E00298" },
      { name: "AWS", color: "#48525E" },
      { name: "SVG", color: "#E7A522" },
    ],
    content: [
      "My portfolio developed by React and Gatsby framework.",
      "Responsive design by SCSS framework with beautiful animation.",
      "Deployed in AWS.",
    ],
    button: [
      {
        name: "Demo",
        link: "http://stevechanvii.me/",
        style: "btn__effect-left-view",
        color: "#FF6944",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#FF875F",
      },
    ],
  },
  {
    title: "Whack A Mole",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #56ab2f, #a8e063)",
    },
    image: whackMole,
    imageTitle: "Game",
    labels: [
      { name: "Tensorflow", color: "#F18201" },
      { name: "JavaScript", color: "#F1DA1C" },
      { name: "P5.js", color: "#E71B60" },
      { name: "Bootstrap", color: "#7852B2" },
      { name: "Babel", color: "#F5DA55" },
    ],
    content: [
      "A whack a mole game developed by JavaScript and Tensorflow PoseNet.",
      "Running in the browser and use artificial intelligence to determine human poses to hit the mole.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://stevechanvii.github.io/WhackMole/",
        style: "btn__effect-left-view",
        color: "#3EA00E",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/WhackMole",
        style: "btn__effect-left-git",
        color: "#61BD29",
      },
    ],
  },
  {
    title: "Developer Portfolio",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #98B2DA, #C1D9EB)",
    },
    image: Portfolio,
    imageTitle: "Full Stack",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Redux", color: "#6B46A9" },
      { name: "Node.js", color: "#72A861" },
      { name: "MongoDB", color: "#13924F" },
      { name: "JWT", color: "#D63AFE" },
    ],
    content: [
      "A social network for developers using MERN stack (MongoDB, Express, React, Node.js). Redux is used for state management.",
      "Use JSON Web Token for user authentication.",
      "Deployed in Heroku.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://shrouded-hollows-57390.herokuapp.com/profiles",
        style: "btn__effect-left-view",
        color: "#869EC1",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/DevPortfolio",
        style: "btn__effect-left-git",
        color: "#A5B9D0",
      },
    ],
  },
  {
    title: "Burger Builder",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4568DC, #B06AB3)",
    },
    image: burger,
    imageTitle: "Frontend",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Redux", color: "#6B46A9" },
      { name: "Firebase", color: "#FCCB2E" },
      { name: "JEST", color: "#18C212" },
      { name: "JWT", color: "#D63AFE" },
      { name: "CSS3", color: "#254CE2" },
    ],
    content: [
      "Customize your burger and order! This App is created by React and Redux framework.",
      "Firebase is used to Token authentication and save orders.",
      "Deployed in Firebase.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://myburger-7c866.firebaseapp.com/",
        style: "btn__effect-left-view",
        color: "#4A56D0",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/BurgerApp",
        style: "btn__effect-left-git",
        color: "#6A5CC7",
      },
    ],
  },
  {
    title: "Job Seeker",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #456fe8, #19b0ec)",
    },
    image: search,
    imageTitle: "Full Stack",
    labels: [
      { name: "Java Web", color: "#217EC3" },
      { name: "JSP", color: "#067790" },
      { name: "MySQL", color: "#01758F" },
      { name: "HTML5", color: "#E44D27" },
      { name: "JavaScript", color: "#F1DA1C" },
    ],
    content: [
      "A job-seeking website for both seeker and recruiter.",
      "Worked as the primary developer and system architect, and led the completion of the recruitment system by Java Web.",
    ],
    button: [
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/OJSS",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Holiday Booking",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #f74c06, #f9bc2c)",
    },
    image: booking,
    imageTitle: "Full Stack",
    labels: [
      { name: "Java EE", color: "#217EC3" },
      { name: "MySQL", color: "#01758F" },
      { name: "MVC", color: "#4A519F" },
      { name: "HTML5", color: "#E44D27" },
      { name: "JavaScript", color: "#F1DA1C" },
    ],
    content: [
      "A hotel ordering system which is available for both web and desktop applications.",
      "Backend: Java EE (EJB), Security and Authentication Services (JAAS) and Glassfish.",
    ],
    button: [
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/HolidayBooking",
        style: "btn__effect-left-git",
        color: "#FD4F0F",
      },
    ],
  },
  {
    title: "Adventure Tours",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #f44369, #f9ab8f)",
    },
    image: tour,
    imageTitle: "Web",
    labels: [
      { name: "HTML5", color: "#E44D27" },
      { name: "SCSS", color: "#D77EAB" },
      { name: "GitHub", color: "#000000" },
    ],
    content: [
      "Programed a learning project with pure HTML5 and advanced CSS(SCSS) to implement beautiful design and animation.",
      "Video is used to make the background dynamic.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://stevechanvii.github.io/AdventurousTours/",
        style: "btn__effect-left-view",
        color: "#F23F5F",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/AdventurousTours",
        style: "btn__effect-left-git",
        color: "#F56B72",
      },
    ],
  },
  {
    title: "Real Property",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom,  #FFBF0F, #FFDA3C)",
    },
    image: house,
    imageTitle: "Web",
    labels: [
      { name: "HTML5", color: "#E44D27" },
      { name: "SCSS", color: "#D77EAB" },
      { name: "SVG", color: "#E7A522" },
      { name: "GitHub", color: "#000000" },
    ],
    content: [
      "Programed a learning project with pure HTML5 and advanced CSS(SCSS) to implement beautiful design and animation.",
      "Use SVG and Font Awesome to make the graph looking nicer.",
    ],
    button: [
      {
        name: "Demo",
        link: "https://stevechanvii.github.io/RealProperty/index.html",
        style: "btn__effect-left-view",
        color: "#FFA70A",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/RealProperty",
        style: "btn__effect-left-git",
        color: "#FFBC1E",
      },
    ],
  },
]
