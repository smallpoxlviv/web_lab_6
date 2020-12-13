import React from 'react';
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"
import youtube from "../images/social/youtube.svg"
import instagram from "../images/social/instagram.svg"
import { FooterStyle, FooterFlexFirstStyle, WatermarkTextStyle, FooterTextStyle,
    HrStyle, FooterFlexSecondStyle, FooterNavStyle, FooterNavUlStyle,
    FooterNavLiStyle, FooterNavAStyle, FooterSocialStyle, SocialLinkStyle } from "../styles/Footer.styled"
import { ContainerStyle } from "../styles/General.styled"

function Footer() {
    return (
        <FooterStyle>
            <ContainerStyle>
                <FooterFlexFirstStyle>
                    <WatermarkTextStyle>©2020 LPNU</WatermarkTextStyle>
                    <FooterTextStyle>Dwelling</FooterTextStyle>
                </FooterFlexFirstStyle>
                <HrStyle/>
                <FooterFlexSecondStyle>
                    <FooterNavStyle>
                        <FooterNavUlStyle>
                            <FooterNavLiStyle>
                                <FooterNavAStyle href="/">Home</FooterNavAStyle>
                            </FooterNavLiStyle>
                            <FooterNavLiStyle>
                                <FooterNavAStyle href="/about">About</FooterNavAStyle>
                            </FooterNavLiStyle>
                            <FooterNavLiStyle>
                                <FooterNavAStyle href="/contact">Contact</FooterNavAStyle>
                            </FooterNavLiStyle>
                        </FooterNavUlStyle>
                    </FooterNavStyle>
                    <FooterSocialStyle>
                        <SocialLinkStyle>
                            <a href="/"><img src={facebook} width="8px" alt="facebook"/></a>
                        </SocialLinkStyle>
                        <SocialLinkStyle>
                            <a href="/"><img src={linkedin} width="16px" alt="linkedin"/></a>
                        </SocialLinkStyle>
                        <SocialLinkStyle>
                            <a href="/"><img src={twitter} width="16px" alt="twitter"/></a>
                        </SocialLinkStyle>
                        <SocialLinkStyle>
                            <a href="/"><img src={youtube} width="16px" alt="youtube"/></a>
                        </SocialLinkStyle>
                        <SocialLinkStyle>
                            <a href="/"><img src={instagram} width="16px" alt="instagram"/></a>
                        </SocialLinkStyle>
                    </FooterSocialStyle>
                </FooterFlexSecondStyle>
            </ContainerStyle>
        </FooterStyle>
    );
}

export default Footer;

