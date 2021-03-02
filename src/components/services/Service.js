import React from 'react'
import { BrowserRouter, Switch, Route, Link }  from 'react-router-dom'

import Products from '../products/Products'

import Icon1 from '../../images/drip.png'
import Icon2 from '../../images/bamboo.png'
import Icon3 from '../../images/grinder.png'
import { 
    ServiceContainer, 
    ServiceH1, 
    ServiceWrapper, 
    ServiceCard,
    ServiceIcon,
    ServiceH2,
    ServiceP,
    BtnWrap,
    NavLinks,
} from './ServiceElements'

import { Button } from '../ButtonElements'

const Service = ({ primary, dark, dark2, }) => {

    return (
        <ServiceContainer id='services'>
            <ServiceH1>Products</ServiceH1>
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
                <NavLinks>
                    <BtnWrap>
                        <Button 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1: 0}
                            dark2={dark2 ? 1: 0}
                                //Link to shop
                            >
                                <ul>
                                    <li>
                                        <Link to='/products'>Go to Store</Link>
                                    </li>
                                </ul>
                        </Button>
                    </BtnWrap>
                </NavLinks>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Service
