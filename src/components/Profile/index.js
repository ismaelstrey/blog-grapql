import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        site {
          siteMetadata {
            description
            title
            position
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description }
      }
    }) => (
      <div className="Profiler-wrapper">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
)
export default Profile
