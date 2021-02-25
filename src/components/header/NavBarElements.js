import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

import { CgProfile, CgShoppingCart } from "react-icons/cg";

export const Nav = styled.nav`
background: #000;
height: 80px;
/* margin-top: -80px; */
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
padding: 0.5rem calc((100w - 100px) / 2);
z-index: 10;
width: 100%;

@media screen and (min-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLink = styled(Link)`
color: #fff;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:active {
    color: #15cdfc;
}
`

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

&:hover {
    color: orange;
    transition: 0.2s ease-in-out;
}

`
// if you want bars for mobile
// export const Bars = styled(FaBars)`
// display: none;
// color: #fff;

// @media screen and (min-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
// }
// `

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: right;
margin-right: -24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
    height: 180px;
`


export const NavBtn = styled.nav`
display:flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 4px;
background: #fff;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
}
`
export const NavLinks = styled(LinkS)` 
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solod blue;
    }
`
 
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`


export const NavIcon = styled.div`
display:none;

@media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    align-items: right;
    top: -8px;
    right: 40px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    &:hover {
        color: orange;
        transition: 0.2s ease-in-out;
    }
}
`

export const NavIcon2 = styled(CgShoppingCart)`
    display:none;
    
    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        align-items: right;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    
        &:hover {
            color: orange;
            transition: 0.2s ease-in-out;
        }
    }
    `





