# SteveChan.me

Welcome to my personal website

## Getting Started

[Live Demo](https://stevechanvii.github.io/WhackMole/)

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

- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Sass](https://sass-lang.com/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Danyang Chen** - _Initial work_ -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
