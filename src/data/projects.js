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
    title: "stevechan",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    },
    image: resume,
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Covid-19 Tracker",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    },
    image: covid19,
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Poke Allergist",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    },
    image: noMilk,
    imageTitle: "App",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Whack A Mole",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    },
    image: whackMole,
    imageTitle: "Game",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Devloper Portfolio",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "My Burger",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Adventure Tours",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Real Property",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Holiday Booking",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
  {
    title: "Job Seeker",
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
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
        color: "#30559D",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#3C6BC5",
      },
    ],
  },
]
