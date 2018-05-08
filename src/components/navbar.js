import React from 'react'
import Link from 'gatsby-link'
//import './navbar.css'
import styled from 'styled-components'

const MainNav = styled.div`
  ul
  {
    display:flex;
    justify-content:center;
    width:50%;
    margin:1rem auto;
  }

  li
  {
    list-style-type:none;
    margin:0 10px;

    a
    {
      color:#333;
      text-decoration:none;

      &:hover
      {
        color:#0f9921;
      }
    }

`
const Navbar = () =>
(
    <MainNav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/gallery">gallery</Link></li>
      </ul>
    </MainNav>
)

export default Navbar
