import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import Coin from './Coin'
import BalanceChart from './BalanceChart'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    '8c4319836d77d15f4d82890fa64afefd66548f875a575de7d3e547d62755f158',
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/'
    )
  )
)

const Portfolio = () => {
  //const [sanityTokens, setSanityTokens] = useState([]);
  //const [thirdWebTokens, setThirdWebTokens] = useState([])

  /*useEffect(() => {
    (
  (async () => {
      const sanityTokens = await coins.json().result
      setSanityTokens(sanityTokens)

      setThirdWebTokens(
        sanityTokens.map(token => sdk.getTokenModule(token.contractAddress)))*
    })
    const getSanityAndThirdWebTokens = async () => {
 
      /*
      const sanityTokens = (await coins.json()).result
      setSanityTokens(sanityTokens)
    
     setThirdWebTokens(
      sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))
     )*/
  //}

  //return getSanityAndThirdWebTokens()
  //}, [])


  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle> Portfolio balance</BalanceTitle>
              <BalanceValue>
                {'$'}
                {/*{walletBalanc.toLocalString()}*/}
                46,000
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>

        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map(coin => (
                <div>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper >
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`
const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`
const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`
const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`