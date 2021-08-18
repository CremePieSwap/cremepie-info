import React from 'react'
import styled from 'styled-components'
import { RouterURL } from '../Link'
import Search from '../Search'

const MenuBlock = styled.div`
display: grid;
-webkit-box-pack: start;
-webkit-justify-content: start;
-ms-flex-pack: start;
justify-content: space-between;
-webkit-align-items: start;
-webkit-box-align: start;
-ms-flex-align: start;
align-items: start;
grid-template-columns: 1fr;
grid-gap: 24px;
// max-width: 1440px;
width: 100%;
margin: 0 auto;
padding: 0 2rem;
box-sizing: border-box;
background: linear-gradient(
  247.99deg
  , #50E3C2 0%, #6F6C99 98.46%);
margin-bottom: 45px;
@media screen and (max-width: 768px) {
  margin-bottom: 0px;
}
.container {
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: block;
      margin: auto;
    }
  }
}`
const RedirectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF7E2;
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 43px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  .item {
    padding: 0 20px;
    font-size: 14px;
    font-weight: 900;
    line-height: 23px;
    font-family: SFPro900;
    color: #50E3C2;
    cursor: pointer;
    &.active {
      color: #5B5A99;
      background: #50E3C2;
      border-radius: 43px;
    }
  }
}`

const PageHeader = (props) => {

  return (
    <MenuBlock>
      <div className="container">
        <RedirectBlock>
          <RouterURL to={'/home'} className={`item ${props.active === 'home' ? 'active' : ''}`}>Overview</RouterURL>
          <RouterURL to={'/pairs'} className={`item ${props.active === 'pairs' ? 'active' : ''}`}>Pairs</RouterURL>
          <RouterURL to={'/tokens'} className={`item ${props.active === 'tokens' ? 'active' : ''}`}>Tokens</RouterURL>
        </RedirectBlock>
        <Search />
      </div>
    </MenuBlock>
  )
}

export default PageHeader
