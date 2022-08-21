import React from 'react'
//import styled from 'styled-components'

const Portfolio = () => {
    return (
        <Wrapper>
            <Title>Assets</Title>
            <ButtonsContainer>
                <Button style={{ backgroundColor: '#3773f5', color: '#0a0b0d' }}>
                    Buy/Sell
                </Button>
                <Button>Send / Receive</Button>
            </ButtonsContainer>
        </Wrapper>
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