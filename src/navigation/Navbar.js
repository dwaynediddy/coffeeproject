import React from 'react'
import { 
    NavLink, 
    Nav, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavBarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign up
                    </NavLink>

                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
