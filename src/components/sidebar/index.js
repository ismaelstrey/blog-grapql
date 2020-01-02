import React from 'react'
import Profile from '../Profile'
import MenuLinks from '../MenuLinks'
import * as S from './styled'

import SocialLinks from '../SocialLinks'
const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)
export default Sidebar
