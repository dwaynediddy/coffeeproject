import React, { useState } from 'react'
import video from '././video/video.mp4'
import { Button } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward
} from './HeroElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Come drink some mother fucking coffee</HeroH1>
                    <HeroP>
                        sign up and get rewards and shit,
                        like free cawfee.
                        thats about it.
                    </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}> 
                        Get Started { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection