import React, { useState } from 'react'
import SideBar from '../components/header/sidebar/SideBar'
import Navbar from '../components/header/Navbar'

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} /> 
        </>
    )
}

export default Landing
