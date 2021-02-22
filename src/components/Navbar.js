import React from 'react'
import { 
    NavLink, 
    Nav, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavBarElements'

import { useAuth0 } from '@auth0/auth0-react'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>

                    <NavBtn>
                        <LoginButton />
                        <LogoutButton />
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
