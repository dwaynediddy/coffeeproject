import React from 'react'
import { 
    NavLink, 
    Nav, 
    NavMenu, 
    NavBtn,
    NavLogo,
    MobileIcon,
    NavLinks,
    NavIcon
} from './NavBarElements'


import { FaBars } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";

//standard 0authlogin
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'



const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <NavLogo>Logo</NavLogo>
                </NavLink>
                <MobileIcon onClick={toggle}>
                    <CgProfile />
                </MobileIcon>
                <NavMenu>
                    <NavBtn>
                        <NavLinks>
                        <NavIcon onClick={toggle}>
                             <CgProfile />
                        </NavIcon>                          
                        </NavLinks>
                    </NavBtn>
                </NavMenu>
            </Nav>
            <div className='userProfile'>
                <Profile />
            </div>
        </>
    )
}

export default Navbar
