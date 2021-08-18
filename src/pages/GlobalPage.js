import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Box } from 'rebass'
import styled from 'styled-components'

import { AutoRow, RowBetween } from '../components/Row'
import { AutoColumn } from '../components/Column'
import PairList from '../components/PairList'
import TopTokenList from '../components/TokenList'
import TxnList from '../components/TxnList'
import GlobalChart from '../components/GlobalChart'
import Search from '../components/Search'
import GlobalStats from '../components/GlobalStats'

import { useGlobalData, useGlobalTransactions } from '../contexts/GlobalData'
import { useAllPairData } from '../contexts/PairData'
import { useMedia } from 'react-use'
import Panel from '../components/Panel'
import { useAllTokenData } from '../contexts/TokenData'
import { formattedNum, formattedPercent } from '../utils'
import { TYPE, ThemedBackground } from '../Theme'
import { transparentize } from 'polished'
import { CustomLink, RouterURL } from '../components/Link'

import { PageWrapper, ContentWrapper } from '../components'
import CheckBox from '../components/Checkbox'
import QuestionHelper from '../components/QuestionHelper'

const ListOptions = styled(AutoRow)`
  height: 40px;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 600;

  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const GridRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  align-items: start;
  justify-content: space-between;
`

function GlobalPage() {
  // get data for lists and totals
  const allPairs = useAllPairData()
  const allTokens = useAllTokenData()
  const transactions = useGlobalTransactions()
  const { totalLiquidityUSD, oneDayVolumeUSD, volumeChangeUSD, liquidityChangeUSD } = useGlobalData()

  // breakpoints
  const below800 = useMedia('(max-width: 800px)')

  // scrolling refs
  useEffect(() => {
    document.querySelector('body').scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }, [])

  // for tracked data on pairs
  const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <MenuBlock>
        <div className="container">
          <RedirectBlock>
            <RouterURL to={'/home'} className='item active'>Overview</RouterURL>
            <RouterURL to={'/pairs'} className='item'>Pairs</RouterURL>
            <RouterURL to={'/tokens'} className='item'>Tokens</RouterURL>
          </RedirectBlock>
          <Search />
        </div>
      </MenuBlock>
      <ContentWrapper>
        <div>
          <AutoColumn gap="16px" style={{ paddingBottom: below800 ? '0' : '24px' }}>
            <TYPE.largeHeader>CremePieSwap Analytics</TYPE.largeHeader>
            <GlobalStats />
          </AutoColumn>
          {below800 && ( // mobile card
            <Box mb={20}>
              <Panel>
                <Box>
                  <AutoColumn gap="36px">
                    <AutoColumn gap="20px">
                      <RowBetween>
                        <TYPE.main>Volume (24hrs)</TYPE.main>
                        <div />
                      </RowBetween>
                      <RowBetween align="flex-end">
                        <TYPE.main fontSize={'1.5rem'} lineHeight={1} fontWeight={600}>
                          {oneDayVolumeUSD ? formattedNum(oneDayVolumeUSD, true) : '-'}
                        </TYPE.main>
                        <TYPE.main fontSize={12}>{volumeChangeUSD ? formattedPercent(volumeChangeUSD) : '-'}</TYPE.main>
                      </RowBetween>
                    </AutoColumn>
                    <AutoColumn gap="20px">
                      <RowBetween>
                        <TYPE.main>Total Liquidity</TYPE.main>
                        <div />
                      </RowBetween>
                      <RowBetween align="flex-end">
                        <TYPE.main fontSize={'1.5rem'} lineHeight={1} fontWeight={600}>
                          {totalLiquidityUSD ? formattedNum(totalLiquidityUSD, true) : '-'}
                        </TYPE.main>
                        <TYPE.main fontSize={12}>
                          {liquidityChangeUSD ? formattedPercent(liquidityChangeUSD) : '-'}
                        </TYPE.main>
                      </RowBetween>
                    </AutoColumn>
                  </AutoColumn>
                </Box>
              </Panel>
            </Box>
          )}
          {!below800 && (
            <GridRow>
              <Panel style={{ height: '100%', minHeight: '300px' }}>
                <GlobalChart display="liquidity" />
              </Panel>
              <Panel style={{ height: '100%' }}>
                <GlobalChart display="volume" />
              </Panel>
            </GridRow>
          )}
          {below800 && (
            <AutoColumn style={{ marginTop: '6px' }} gap="24px">
              <Panel style={{ height: '100%', minHeight: '300px' }}>
                <GlobalChart display="liquidity" />
              </Panel>
            </AutoColumn>
          )}
          <ListOptions gap="10px" style={{ marginTop: '2rem', marginBottom: '.5rem' }}>
            <RowBetween>
              <TYPE.largeHeader style={{ whiteSpace: 'nowrap' }}>
                Top Tokens
              </TYPE.largeHeader>
            </RowBetween>
          </ListOptions>
          <Panel style={{ marginTop: '6px', padding: '1.125rem 0 ' }}>
            <TopTokenList tokens={allTokens} />
          </Panel>
          <ListOptions gap="10px" style={{ marginTop: '2rem', marginBottom: '.5rem' }}>
            <RowBetween>
              <TYPE.largeHeader style={{ whiteSpace: 'nowrap' }}>
                Top Pairs
              </TYPE.largeHeader>
            </RowBetween>
          </ListOptions>
          <Panel style={{ marginTop: '6px', padding: '1.125rem 0 ' }}>
            <PairList pairs={allPairs} useTracked={useTracked} />
          </Panel>
          <span>
            <TYPE.largeHeader style={{ marginTop: '2rem' }}>
              Transactions
            </TYPE.largeHeader>
          </span>
          <Panel style={{ margin: '1rem 0' }}>
            <TxnList transactions={transactions} color='#5B5A99' />
          </Panel>
        </div>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default withRouter(GlobalPage)

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
.container {
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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