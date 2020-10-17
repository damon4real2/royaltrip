import React from 'react';
// import { Button } from '../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
//   SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import './Footer.css';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Company</FooterLinkTitle>
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
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            {/* <SocialIcon /> */}
          </SocialLogo>
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
          <WebsiteRights>2020, Royal Trip. All rights reserved.</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;