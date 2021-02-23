import React from 'react'
import video from '././video/video.mp4'
import { HeroContainer, HeroBg, VideoBg} from './HeroElement'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection
