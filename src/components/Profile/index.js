import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    }
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          title
          position
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="#home">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}
export default Profile
