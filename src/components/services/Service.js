import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import { 
    ServiceContainer, 
    ServiceH1, 
    ServiceWrapper, 
    ServiceCard,
    ServiceIcon,
    ServiceH2,
    ServiceP,
    
} from './ServiceElements'

const Service = () => {
    return (
        <ServiceContainer id='services'>
            <ServiceH1>Services</ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1} />
                    <ServiceH2>lorum ipsum</ServiceH2>
                    <ServiceP>lorum ipsum</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2} />
                    <ServiceH2>lorum ipsum</ServiceH2>
                    <ServiceP>lorum ipsum</ServiceP>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3} />
                    <ServiceH2>lorum ipsum</ServiceH2>
                    <ServiceP>lorum ipsum</ServiceP>
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Service
