import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'feather-icons'

import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { useAllPairData } from '../contexts/PairData'
import PairList from '../components/PairList'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween, AutoRow } from '../components/Row'
import PageHeader from '../components/PageHeader'
import { useMedia } from 'react-use'

function AllPairsPage() {
  const allPairs = useAllPairData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below800 = useMedia('(max-width: 800px)')

  const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <PageHeader active='pairs' />
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Top Pairs</TYPE.largeHeader>
        </RowBetween>
        <Panel style={{ padding: below800 && '1rem 0 0 0 ' }}>
          <PairList pairs={allPairs} disbaleLinks={true} maxItems={50} useTracked={useTracked} />
        </Panel>
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllPairsPage