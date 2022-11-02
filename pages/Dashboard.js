import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'


const sdk =
  new ThirdwebSDK(

    new ethers.Wallet(
      '8c4319836d77d15f4d82890fa64afefd66548f875a575de7d3e547d62755f158',
      ethers.getDefaultProvider(
        'https://rpc.testnet.fantom.network'
      )
    )
  )

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [twTokens, settwTokens] = useState([])

  useEffect(() => {
    const getSanityAndtwTokens = async () => {

      const coins = await fetch(
        "https://bgqb51w7.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      )
      const sanityTokens = (await coins.json()).result
      setSanityTokens(sanityTokens)

      settwTokens
        (sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))
        )
    }

    getSanityAndtwTokens()
  }, [])

  // console.log('Sanity =>', sanityTokens)
  // console.log('Thirdweb =>', twTokens)

  return (
    <Wrapper>
      <Sidebar
        walletAddress={address}
        sanityTokens={sanityTokens}
        twTokens={twTokens} />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          twTokens={twTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          twTokens={twTokens} />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`

const MainContainer = styled.div`
  flex: 1;
`