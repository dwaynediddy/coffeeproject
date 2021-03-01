import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { 
    NavbarContainer, 
    Nav, 
    NavMenu, 
    NavBtn,
    NavLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavIcon,
    NavIcon2,
} from './NavBarElements'

import { CgProfile, CgShoppingCart } from "react-icons/cg";


const Navbar = ({ toggle }) => {

    const [ scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLinks to='/'>
                        <NavLogo onClick={toggleHome}>Logo</NavLogo>
                    </NavLinks>
                    <MobileIcon onClick={toggle}>
                        <CgProfile />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavBtn>
                                <NavLinks to="" >
                                    <NavLinks to="about"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true' 
                                      offset={-80}
                                    >Rewards</NavLinks>
                                    <NavLinks to="coffee"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true' 
                                      offset={-80}
                                    >Coffee</NavLinks>
                                    <NavLinks to="services"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true' 
                                      offset={-80}
                                    >Services</NavLinks>
                                    <NavLinks to="social"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true' offset={-80}
                                    >Social Media</NavLinks>
                                    <NavIcon onClick={toggle}>
                                        <CgProfile />         
                                    </NavIcon> 
                                    <NavIcon2>
                                        <CgShoppingCart />                      
                                    </NavIcon2> 
                                </NavLinks>
                            </NavBtn>
                        </NavItem>
                    </NavMenu>
                    {/* <div className='userProfile'>
                        <Profile />
                    </div> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
