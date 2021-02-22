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


const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <CloseIcon />  
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/'>
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
