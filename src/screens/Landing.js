import React, { useState } from 'react'
import SideBar from '../components/header/sidebar/SideBar'
import Navbar from '../components/header/Navbar'
import HeroSection from '../components/herosection/Hero'
import Info from '../components/infosection/Info'
import { homeObjOne } from '../components/infosection/Data'

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} /> 
           <HeroSection />
           <Info {...homeObjOne}/>
        </>
    )
}

export default Landing
