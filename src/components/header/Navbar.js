import React from 'react'
import { 
    NavbarContainer,
    NavLink, 
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
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLink to='/'>
                        <NavLogo>Logo</NavLogo>
                    </NavLink>
                    <MobileIcon onClick={toggle}>
                        <CgProfile />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavBtn>
                                <NavLinks to="">
                                    <NavLinks to="about">Rewards</NavLinks>
                                    <NavLinks to="coffee">Coffee</NavLinks>
                                    <NavLinks to="services">Services</NavLinks>
                                    <NavLinks to="social">Social Media</NavLinks>
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
