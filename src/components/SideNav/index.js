import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc } from 'react-feather'
import Link from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'

import { useEthPrice } from '../../contexts/GlobalData'
import { formattedNum } from '../../utils'

import Home from '../../assets/svg/home-icon.svg'
import Trade from '../../assets/svg/trade-icon.svg'
import Docs from '../../assets/svg/docs-icon.svg'
import Pools from '../../assets/svg/pools_icon.svg'
import Farm from '../../assets/svg/farm_icon.svg'
import Lottery from '../../assets/svg/lottery_icon.svg'
import Info from '../../assets/svg/info_icon.svg'
import Active from '../../assets/svg/active_menu.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Reddit from '../../assets/svg/reddit.svg'
import Telegram from '../../assets/svg/telegram.svg'
import Twitter from '../../assets/svg/twitter.svg'


const Wrapper = styled.div`
  height: ${({ isMobile }) => (isMobile ? '100%' : 'calc(100vh - 64px)')};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text1};
  position: fixed;
  padding-top: 16px;
  z-index: 9999;
  box-sizing: border-box;
  width: 240px;
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: 1;
  color: ${({ theme }) => theme.text1};
  display: flex;
  :hover {
    opacity: 1;
  }
  span {
    color: rgb(110, 163, 170);
    transition: color 0.4s ease 0s;
    -webkit-box-flex: 1;
    flex-grow: 1;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .active {
    position: absolute;
    left: 0;
    margin-left: 0;
    width: 20px;
    margin-top: -5px;
  }
`

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 500;
  display: inline-box;
  display: -webkit-inline-box;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  a {
    color: ${({ theme }) => theme.white};
  }
`

const Polling = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  padding: 1rem;
  color: white;
  opacity: 0.4;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green1};
`

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()

  const [ethPrice] = useEthPrice()
  const formattedEthPrice = ethPrice ? formattedNum(ethPrice, true) : '-'

  return (
    <Wrapper isMobile={below1080}>
      <DesktopWrapper>
        <AutoColumn gap="0">
          {/* <Title /> */}
          <AutoColumn gap="0">
            <StyledAbsoluteLink
              href="https://cremepieswapfinance.com/"
            >
              <Option>
                <img src={Home} alt="home" style={{ marginRight: 15 }} />
                <span>Home</span>
              </Option>
            </StyledAbsoluteLink>
            <StyledAbsoluteLink
              href="https://swap.cremepieswapfinance.com/"
            >
              <Option>
                <img src={Trade} alt="trade" style={{ marginRight: 15 }} />
                <span>Trade</span>
              </Option>
            </StyledAbsoluteLink>
            <StyledAbsoluteLink
              href="https://cremepieswapfinance.com/farms"
            >
              <Option>
                <img src={Farm} alt="farm" style={{ marginRight: 15 }} />
                <span>Farms</span>
              </Option>
            </StyledAbsoluteLink>
            <StyledAbsoluteLink
              href="https://cremepieswapfinance.com/pools"
            >
              <Option>
                <img src={Pools} alt="pools" style={{ marginRight: 15 }} />
                <span>Pools</span>
              </Option>
            </StyledAbsoluteLink>
            <StyledAbsoluteLink
              href="https://lottery.cremepieswapfinance.com/"
            >
              <Option>
                <img src={Lottery} alt="lottery" style={{ marginRight: 15 }} />
                <span>Lottery</span>
              </Option>
            </StyledAbsoluteLink>
            <StyledAbsoluteLink
              href="https://docs.cremepieswapfinance.com/"
            >
              <Option>
                <img src={Docs} alt="docs" style={{ marginRight: 15 }} />
                <span>Docs</span>
              </Option>
            </StyledAbsoluteLink>
            <StyledAbsoluteLink
              href="https://info.cremepieswapfinance.com/"
            >
              <Option>
                <img className='active' src={Active} alt="active" />
                <img src={Info} alt="info" style={{ marginRight: 15 }} />
                <span>Info</span>
              </Option>
            </StyledAbsoluteLink>
            {/* <BasicLink to="/tokens">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    <Disc size={20} style={{ marginRight: '.75rem' }} />
                    Tokens
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    <PieChart size={20} style={{ marginRight: '.75rem' }} />
                    Pairs
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    <List size={20} style={{ marginRight: '.75rem' }} />
                    Accounts
                  </Option>
                </BasicLink> */}
          </AutoColumn>
        </AutoColumn>
        {/* <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem' }}>
            <HeaderText>
              <Link href="https://uniswap.org" target="_blank">
                Uniswap.org
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://v1.uniswap.info" target="_blank">
                V1 Analytics
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://uniswap.org/docs/v2" target="_blank">
                Docs
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://discord.com/invite/FCfyBSbCU5" target="_blank">
                Discord
              </Link>
            </HeaderText>
            <HeaderText>
              <Link href="https://twitter.com/UniswapProtocol" target="_blank">
                Twitter
              </Link>
            </HeaderText>
            <Toggle isActive={isDark} toggle={toggleDarkMode} />
          </AutoColumn> */}
        {/* {!below1180 && (
            <Polling style={{ marginLeft: '.5rem' }}>
              <PollingDot />
              <a href="/" style={{ color: 'white' }}>
                <TYPE.small color={'white'}>
                  Updated {!!seconds ? seconds + 's' : '-'} ago <br />
                </TYPE.small>
              </a>
            </Polling>
          )} */}
        <MenuFooter>
          <div className='price'>CPIE {formattedEthPrice}</div>
          <div className='social-icons'>
            <div><a href="https://www.facebook.com/CremePieSwap"><img src={Facebook} alt="facebook" /></a></div>
            <div><a href="https://twitter.com/CremePieSwap"><img src={Twitter} alt="Twitter" /></a></div>
            <div><a href="https://www.reddit.com/r/CremePieSwapOfficial"><img src={Reddit} alt="Reddit" /></a></div>
            <div><a href="https://t.me/cremepieswapofficial"><img src={Telegram} alt="Telegram" /></a></div>
          </div>
        </MenuFooter>
      </DesktopWrapper>
    </Wrapper>
  )
}

export default withRouter(SideNav)

const StyledAbsoluteLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 48px;
  overflow: hidden;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.text3};
  :hover {
    color: ${({ theme }) => theme.text2};
    background: #F5F5FA;
    cursor: pointer;
  }
  > img {
    margin-right: 8px;
    &.active {
      display: none;
      margin-left: 0;
    }
  }
`
const MenuFooter = styled.div`
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 240px;
  padding: 20px 0;
  .price {
    color: rgb(110, 163, 170);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
  }
  .social-icons {
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`