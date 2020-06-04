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
 * https://coolors.co/f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590
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
    imageTitle: "Web",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "D3.js", color: "#F57F50" },
      { name: "GitHub", color: "#000000" },
      { name: "HTML5", color: "#E44D27" },
      { name: "Mathdro API", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React framework.",
      "Responsive design (map/table) to fit different screen size.",
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
    imageTitle: "App",
    labels: [
      { name: "React Native", color: "#07C8F9" },
      { name: "Firebase", color: "#FCCB2E" },
      { name: "ML Kit", color: "#2F7EE3" },
      { name: "OpenFoodFact API", color: "#48525E" },
    ],
    content: [
      "Successfully led an agile team to complete a cross-platform application in six weeks",
      "AI is implemented for allergies detection and text recognition",
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
    title: "stevechan",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #ff7e5f, #feb47b)",
    },
    image: resume,
    imageTitle: "Web",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "GatsbyJS", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
      { name: "Material UI", color: "#0481CB" },
      { name: "SVG", color: "#E7A522" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Responsive design by Sass framework with beautiful animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
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
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "HTML5", color: "#E44D27" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#3EA00E",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#61BD29",
      },
    ],
  },
  {
    title: "Devloper Portfolio",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #A7BEE1, #D6ECF3)",
    },
    image: Portfolio,
    imageTitle: "Web",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#869EC1",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#A5B9D0",
      },
    ],
  },
  {
    title: "My Burger",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4568DC, #B06AB3)",
    },
    image: burger,
    imageTitle: "Web",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#4A56D0",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#6A5CC7",
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
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#F23F5F",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
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
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#FFA70A",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#FFBC1E",
      },
    ],
  },
  {
    title: "Job Seeker",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #456fe8, #19b0ec)",
    },
    image: search,
    imageTitle: "Web",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#2678EA",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#2094EB",
      },
    ],
  },
  {
    title: "Holiday Booking",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #f74c06, #f9bc2c)",
    },
    image: booking,
    imageTitle: "Web",
    labels: [
      { name: "React", color: "#07C8F9" },
      { name: "Gatsby", color: "#8055AA" },
      { name: "Sass", color: "#D77EAB" },
      { name: "AWS", color: "#48525E" },
    ],
    content: [
      "A single-page application developed by React and Gatsby framework.",
      "Sass is used for beautiful design and animation.",
      "Deployed in AWS Amplify.",
    ],
    button: [
      {
        name: "Demo",
        link: "stevechanvii.me",
        style: "btn__effect-left-view",
        color: "#FD4F0F",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#FC6B16",
      },
    ],
  },
]
