import React from 'react'
import { 
    NavLink, 
    Nav, 
    NavMenu, 
    NavBtn,
    NavLogo,
    MobileIcon,
    NavLinks,
    NavIcon,
    NavIcon2
    
} from './NavBarElements'


import { FaBars } from 'react-icons/fa'
import { CgProfile, CgShoppingCart } from "react-icons/cg";

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
                        <NavIcon2>
                             <CgShoppingCart />                      
                        </NavIcon2> 
                        </NavLinks>
                    </NavBtn>
                </NavMenu>
                {/* <div className='userProfile'>
                    <Profile />
                </div> */}
            </Nav>
        </>
    )
}

export default Navbar
