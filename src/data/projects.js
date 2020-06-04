import Portfolio from "../images/project-portfolio.svg"

/* Color palettes
 * https://coolors.co/f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590
 * 
 * Data formate
{
  backgroundStyle: {backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)"},
  image: Object,
  imageTitle: "",
  title: "",
  labels: [{name: "React", color: "#4880EC"}],
  content: ["", "", ""],
  button: [{name: "Demo", link: "", style: {}, color: ""]
}
*/
export default [
  {
    backgroundStyle: {
      backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    },
    image: Portfolio,
    imageTitle: "Web",
    title: "My Portfolio",
    labels: [
      { name: "React", color: "#5FD5F5" },
      { name: "Gatsby", color: "#663399" },
      { name: "Sass", color: "#CF649A" },
      { name: "AWS", color: "#23303E" },
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
        color: "#CF649A",
      },
      {
        name: "GitHub",
        link: "https://github.com/stevechanvii/mysite",
        style: "btn__effect-left-git",
        color: "#CF649A",
      },
    ],
  },
]
