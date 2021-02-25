import React from 'react'
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SideBtnWrap,
    SidebarMenu,
    SidebarRoutes,
 } from './SideBarElements'

import LoginButton from '../LoginButton' 
import LogoutButton from '../LogoutButton'
import Profile from '../Profile'


const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <CloseIcon />  
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                {/* if adding more pages, or navigation to click click on scroll add onClick={toggle} */}
                    <SidebarLink to='/'>
                    <Profile />
                        <LoginButton />
                    </SidebarLink>
                    <SidebarLink to='/1'>
                        <LogoutButton />
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes>
                    </SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
