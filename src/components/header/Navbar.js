import React from 'react'
import { 
    NavLink, 
    Nav, 
    Bars, 
    NavMenu, 
    NavBtn,
    NavLogo,
    MobileIcon,
    NavLinks,
} from './NavBarElements'
import { FaBars } from 'react-icons/fa'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <NavLogo>Logo</NavLogo>
                </NavLink>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
               
                <NavMenu>
                    <NavBtn>
                        <NavLinks>
                            <LoginButton />
                            <LogoutButton />
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
