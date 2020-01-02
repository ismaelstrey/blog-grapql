import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="tomato"
      category="Misc"
      date="30 de julho de 2019"
      timeToRead="5"
      title="Diga não ao Midium: Tenha sua propria plataforma"
      description="Culpa veniam enim incididunt do qui adipisicing nulla consequat deserunt ex."
    />
  </Layout>
)

export default IndexPage
