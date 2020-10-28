import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterBackground,
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  // SocialLogo,
//   SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import "./css/Footer.css";

function Footer() {
  return (
    <FooterBackground>
      <FooterContainer>
        <div className="row">
        <div className="col-md-4">
          <div className="royalTrip">
            {/* <div className="royalTripLogo">
              <img src={require("../assets/images/logo.svg")} alt="footer-logo" />
            </div> */}
            <div className="appstore-playstore2">
              <img src={require("../assets/images/app-store.svg")} alt="app-store" />
              <img src={require("../assets/images/google-play.svg")} alt="app-store" />
            </div>
            <div className="question">
            <img src={require("../assets/images/question.svg")} alt="question" />
            <p>Help Center</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
        <div className="footerLinks">
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Company</FooterLinkTitle>
              <FooterLink to='/sign-up'>About Us</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>FAQ</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>For Riders</FooterLinkTitle>
              <FooterLink to='/'>Sign In</FooterLink>
              <FooterLink to='/'>Sign Up</FooterLink>
              <FooterLink to='/'>Find A Driver</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>For Drivers</FooterLinkTitle>
              <FooterLink to='/'>Sign In</FooterLink>
              <FooterLink to='/'>Sign Up</FooterLink>
              <FooterLink to='/'>Why Join Us?</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Help</FooterLinkTitle>
              <FooterLink to='/'>Forum</FooterLink>
              <FooterLink to='/'>Blog</FooterLink>
              <FooterLink to='/'>Talk To Us</FooterLink>
              <FooterLink to='/'>Contact Us</FooterLink>
              <FooterLink to='/'>FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <div className="royalTripIcons">
            <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to='/'>
              <SocialIcon />
            </SocialLogo> */}
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href={
                  '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                }
                rel='noopener noreferrer'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
            </div>
          </div>
          <div className="col-md-8">
            <div>
            <WebsiteRights>2020, Royal Trips. All rights reserved.</WebsiteRights>
            </div>
          </div>
        </div>
      </FooterContainer>
    </FooterBackground>
  );
}

export default Footer;