import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'feather-icons'

import TopTokenList from '../components/TokenList'
import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { useAllTokenData } from '../contexts/TokenData'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween } from '../components/Row'
import Search from '../components/Search'
import { useMedia } from 'react-use'
import { CustomLink, RouterURL } from '../components/Link'
// import CheckBox from '../components/Checkbox'
// import QuestionHelper from '../components/QuestionHelper'

function AllTokensPage() {
  const allTokens = useAllTokenData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below600 = useMedia('(max-width: 800px)')

  // const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <MenuBlock>
        <div className="container">
          <RedirectBlock>
            <RouterURL to={'/home'} className='item'>Overview</RouterURL>
            <RouterURL to={'/pairs'} className='item'>Pairs</RouterURL>
            <RouterURL to={'/tokens'} className='item active'>Tokens</RouterURL>
          </RedirectBlock>
          <Search />
        </div>
      </MenuBlock>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Top Tokens</TYPE.largeHeader>
        </RowBetween>
        {/* <AutoRow gap="4px">
          <CheckBox checked={useTracked} setChecked={() => setUseTracked(!useTracked)} text={'Hide untracked tokens'} />
          <QuestionHelper text="USD amounts may be inaccurate in low liquiidty pairs or pairs without ETH or stablecoins." />
        </AutoRow> */}
        <Panel style={{ marginTop: '6px', padding: below600 && '1rem 0 0 0 ' }}>
          <TopTokenList tokens={allTokens} itemMax={50} />
        </Panel>
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllTokensPage

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