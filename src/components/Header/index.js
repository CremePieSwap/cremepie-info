import React, { useState } from 'react'
import styled from 'styled-components'
import { useMedia } from 'react-use'
import Logo from '../../assets/svg/logo-cremepie.svg'
import LogoMobile from '../../assets/svg/cremepie_mini.svg'
import MenuOpen from '../../assets/svg/menu_open.svg'
import MenuClose from '../../assets/svg/menu_close.svg'

const HeaderStyle = styled.div`
  height: 64px;
  position: fixed;
  top: 0;
  background: #fff;
  width: 100vw;
  z-index: 10000;
  display: flex;
  border-bottom: 2px solid rgba(133, 133, 133, 0.1);
`

const MenuIcon = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  width: 56px;
`
const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  :hover {
    cursor: pointer;
  }
`
const UniIcon = styled.div`
  transition: transform 0.3s ease;
  height: 32px;
`

const Header = (props) => {
  const below768 = useMedia('(max-width: 768px)')

  return (
    <HeaderStyle>
      <>
        <MenuIcon>
          <img
            onClick={() => props.set_show_menu(!props.showMenu)}
            width={'25px'}
            src={props.showMenu ? MenuOpen : MenuClose}
            alt="menu"
          />
        </MenuIcon>
        <Title href="https://cremepieswap.finance/">
          <UniIcon>
            <img width={'160px'} src={Logo} alt="logo" />
          </UniIcon>
        </Title>
      </>
    </HeaderStyle>
  )
}

export default Header
