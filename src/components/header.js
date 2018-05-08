import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from './../images/logo.svg'

const HeaderWrapper = styled.div`
    background: rebeccapurple;
    margin-bottom: 0;
`
const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    maxWidth: 960px;
    padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
    <img src={logo} alt="this is my logo" />
  </HeaderWrapper>
)

export default Header
