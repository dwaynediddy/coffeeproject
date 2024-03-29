import React, { useState } from 'react'
import SideBar from '../components/header/sidebar/SideBar'
import Navbar from '../components/header/Navbar'
import HeroSection from '../components/herosection/Hero'
import Info from '../components/infosection/Info'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infosection/Data'
import Service from '../components/services/Service'
import Footer from '../components/footer/Footer'

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
           <Info {...homeObjOne} />
           <Info {...homeObjTwo} />
           <Service />
           <Info {...homeObjThree} />
           <Footer />
        </>
    )
}

export default Landing
