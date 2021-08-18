import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'feather-icons'

import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { useAllPairData } from '../contexts/PairData'
import PairList from '../components/PairList'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween, AutoRow } from '../components/Row'
import Search from '../components/Search'
import { useMedia } from 'react-use'
import QuestionHelper from '../components/QuestionHelper'
import CheckBox from '../components/Checkbox'
import { CustomLink, RouterURL } from '../components/Link'

function AllPairsPage() {
  const allPairs = useAllPairData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below800 = useMedia('(max-width: 800px)')

  const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <MenuBlock>
        <div className="container">
          <RedirectBlock>
            <RouterURL to={'/home'} className='item'>Overview</RouterURL>
            <RouterURL to={'/pairs'} className='item active'>Pairs</RouterURL>
            <RouterURL to={'/tokens'} className='item'>Tokens</RouterURL>
          </RedirectBlock>
          <Search />
        </div>
      </MenuBlock>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Top Pairs</TYPE.largeHeader>
        </RowBetween>
        <AutoRow gap="4px">
          <CheckBox checked={useTracked} setChecked={() => setUseTracked(!useTracked)} text={'Hide untracked pairs'} />
          <QuestionHelper text="USD amounts may be inaccurate in low liquiidty pairs or pairs without ETH or stablecoins." />
        </AutoRow>
        <Panel style={{ padding: below800 && '1rem 0 0 0 ' }}>
          <PairList pairs={allPairs} disbaleLinks={true} maxItems={50} useTracked={useTracked} />
        </Panel>
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllPairsPage

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