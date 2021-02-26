import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon,
    SocialIconLink,   
} from '../footer/FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">careers</FooterLink>
                                <FooterLink to="/">Terms of use</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Phone Number</FooterLink>
                                <FooterLink to="/">Email</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Location</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Barrista stuff</FooterLinkTitle>
                                <FooterLink to="/">Coffee</FooterLink>
                                <FooterLink to="/">Tea</FooterLink>
                                <FooterLink to="/">Iced coffee</FooterLink>
                                <FooterLink to="/">ewwtoob</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Something else idk</FooterLinkTitle>
                                <FooterLink to="/">Influencers</FooterLink>
                                <FooterLink to="/">Deals</FooterLink>
                                <FooterLink to="/">Students</FooterLink>
                                <FooterLink to="/">Whats Happening</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"
                        onClick={toggleHome}
                        >
                            logo
                        </SocialLogo>
                        <WebsiteRights>logo © {new Date().getFullYear()}
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
