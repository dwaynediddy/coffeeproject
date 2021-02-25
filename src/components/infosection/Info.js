import React from 'react'
import { Button } from 'react-scroll'

import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    BtnWrap,
    Subtitle,
    Heading,
    ImgWrap,
    TopLine,
    Img,
 } from './InfoElements'

const info = () => {
    return (
        <>
            <InfoContainer />
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Heading>Header</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to='home'/>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column2>

                </InfoRow>
            </InfoWrapper>
        </>
    )
}

export default info
