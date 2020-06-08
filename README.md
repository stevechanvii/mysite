# My personal website

Welcome to my personal website

## Getting Started

[Live Demo](https://stevechanvii.me)

## Deployment

```
npm install
gatsby develop
```

GraphQL

- http://localhost:8000/___graphql

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          title
          date
          author
        }
        excerpt
      }
    }
  }
}
```

## Built With

- [Gatsby](https://www.gatsbyjs.org/) - Super fast React Framework.
- [React](https://reactjs.org/) - Framework used.
- [GraphQL](https://graphql.org/) - Image lazy loading for faster response.
- [Sass](https://sass-lang.com/) - Css and animations.
- [Material Icons](https://material-ui.com/components/material-icons/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Todo List

- Add popup animation to projects page.
- Change navbar style for small screen.
- Add a gallery of my photography.
- Add Chinese version.

## Authors

- **Danyang Chen** - _Initial work_ -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
