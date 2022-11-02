import { useState } from 'react'
import styled from 'styled-components'
import CoinbaseLogo from '../assets/cb-logo.png'
import Image from 'next/image'
import { navItems } from '../static/navItems'

import { navItem } from '../static/navItems'


import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransferModal from './modal/TransferModal'
import Link from 'next/link'

Modal.setAppElement('#__next')


const Sidebar = ({ twTokens, sanityTokens, walletAddress, selectedToken, connectWallet }) => {
  const router = useRouter()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0a0b0d',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
  }

  function change() {
    <Change />
  }

  const [activeIcon, setActiveIcon] = useState(navItem[0].title)

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          {/* <Image src={CoinbaseLogo} alt='Coinbase Logo' /> */}
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItem.map(item => (
          <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && '#3773f5' }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
        {/* </NavItemsContainer> */}
        <NavItem>
          <NavIcon>
            {navItems[0].icon}
          </NavIcon>
          <NavTitle>{navItems[0].title}</NavTitle>
        </NavItem>

        <NavItem>
          <NavIcon>
            {navItems[1].icon}
          </NavIcon>
          <NavTitle>{navItems[1].title}</NavTitle>
        </NavItem>
        <Link href={'/?transfer=1'} onClick={change()}>
          <NavItem>
            <NavIcon>
              {navItems[2].icon}
            </NavIcon>
            <NavTitle>{navItems[2].title}</NavTitle>
          </NavItem>
        </Link>
      </NavItemsContainer>

      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <TransferModal
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          walletAddress={walletAddress} />
      </Modal>
    </Wrapper >
  )
}

export default Sidebar

const Wrapper = styled.div`
      height: calc(100vh);
      border-right: 1px solid #282b2f;
      width: calc(22rem - 16px - 16px);
      /* TRouBLe */
      padding: 0 1rem;
      `
const LogoContainer = styled.div`
      /* TRouBLe */
      margin: 1.5rem 0;
      `

const Logo = styled.div`
      width: 44%;
      object-fit: contain;
      margin-left: 1.5rem;
      `

const NavItemsContainer = styled.div`
      margin-top: 3rem;

      &:hover {
        cursor: pointer;
  }
      `

const NavItem = styled.div`
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      font-weight: 500;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
      height: 4rem;

      &:hover {
        background - color: #141519;
  }
      `

const NavIcon = styled.div`
      background-color: #141519;
      padding: 0.7rem;
      border-radius: 50%;
      margin: 0 1rem;
      display: grid;
      place-items: center;
      `

const NavTitle = styled.div``

const Change = styled.div`
      color: #3773f5;
      `

