import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                background
                category
                description
                title
                date(
                  difference: ""
                  locale: "pt-br"
                  formatString: "DD [de] MMMM [de] YYYY"
                )
              }
              timeToRead
            }
          }
        }
      }
    `
  )
  const postList = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            id,
            fields: { slug }
          }
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
