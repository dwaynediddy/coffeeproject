import React from 'react'
import { 
    NavLink, 
    Nav, 
    Bars, 
    NavMenu, 
    NavBtn, 
} from './NavBarElements'

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
            <div className='userProfile'>
                <Profile />
            </div>
        </>
    )
}

export default Navbar
