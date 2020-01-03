import React from 'react'
import * as S from './styled'
import { Home } from 'styled-icons/boxicons-regular/Home'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb'
import { Grid } from 'styled-icons/boxicons-solid/Grid'

const MenuBar = () => (
  <S.MenuBarWrapper>
    {/* Primeiro menu */}
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar Para home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    {/* terceiro menu */}
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o Tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar Visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
