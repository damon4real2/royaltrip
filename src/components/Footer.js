import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {
  FooterBackground,
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  // FooterLink,
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
            <div className="royalTripLogo">
            <Link to="/">
              <img className="royalTripLogo" src={require("../assets/images/logo.svg")} alt="footer-logo" />
            </Link>
            </div>
            <div className="appstore-playstore2">
            {/* eslint-disable-next-line */}
            <a href="https://www.apple.com/ng/ios/app-store/" target="_blank"><img src={require("../assets/images/app-store.svg")} alt="app-store" /></a>
            {/* eslint-disable-next-line */}
            <a href="https://play.google.com/store/apps" target="_blank"><img src={require("../assets/images/google-play.svg")} alt="google-play" /></a>
          </div>
            <div className="question">
            <img className="question-icon" src={require("../assets/images/question-icon.jpeg")} alt="question" />
            <p>Help Center</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
        <div className="footerLinks">
        <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>For Riders</FooterLinkTitle>
              {/* <FooterLink><Link to="/">Sign In</Link></FooterLink>
              <FooterLink to='/'>Sign Up</FooterLink>
              <FooterLink to='/'>Find A Driver</FooterLink> */}
              <a href="/Rider">Sign In</a>
              <a href="/Rider">Sign Up</a>
              <a href="/FindADriver">Find A Driver</a>
              {/* <FooterLink to='/'>Terms of Use (Riders)</FooterLink> */}
              <a href="/TermsOfUsePolicyRiders">Terms Of Use</a>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Our Company</FooterLinkTitle>
              <a href="/ContactUs">About Us</a>
              <a href="/ContactUs">Contact Us</a>
              <a href="/FAQ">FAQ</a>
              <a href="/PrivacyPolicy">Privacy Policy</a>
              {/* <FooterLink to='/ContactUs'>About Us</FooterLink> */}
              {/* <FooterLink to='/ContactUs'>Contact Us</FooterLink>
              <FooterLink to='/FAQ'>FAQ</FooterLink> */}
              {/* <FooterLink to='/'>Privacy Policy</FooterLink> */}
            </FooterLinkItems>
           
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>For Drivers</FooterLinkTitle>
              {/* <FooterLink to='/'>Sign In</FooterLink>
              <FooterLink to='/'>Sign Up</FooterLink> */}
              <a href="/Driver">Sign In</a>
              <a href="https://forms.gle/uHkPzawq51gFprtA9">Sign Up</a>
              {/* <FooterLink to='/'>Why Join Us?</FooterLink> */}
              <a href="/WhyJoinUsPage">Why Join Us</a>
              {/* <FooterLink to='/'>Terms of Use (Drivers)</FooterLink> */}
              <a href="/">Terms Of Use</a>
            </FooterLinkItems>
         
            
           
            <FooterLinkItems>
              
              <FooterLinkTitle>Help</FooterLinkTitle>
              {/* <FooterLink to='/'>Forum</FooterLink>
              <FooterLink to='/'>Blog</FooterLink>
              <FooterLink to='/'>Talk To Us</FooterLink>
              <FooterLink to='/'>Help Line</FooterLink>
              <FooterLink to='/'>...</FooterLink>
              <FooterLink to='/'>...</FooterLink> */}
              {/* eslint-disable-next-line */}
              <a href="https://www.quora.com/profile/RoyalTrip" target='_blank'>Forum</a>
              {/* eslint-disable-next-line */}
              <a href="https://medium.com/@royaltrip" target='_blank'>Blog</a>
              <a href="/https://direct.lc.chat/12476826/">Talk To Us</a>
              <a href="/FAQ">Help</a>
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
              <SocialIconLink href='https://web.facebook.com/Royal-Trips-107283564520818' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/royaltrips_ng/' target='_blank' aria-label='Instagram'>
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
              <SocialIconLink href='https://twitter.com/RoyalTrips3' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/royal-trips/about/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
            </div>
          </div>
          <div className="col-md-8">
            <div>
            <WebsiteRights>&copy; 2020, Royal Trip. All rights reserved.</WebsiteRights>
            </div>
          </div>
        </div>
      </FooterContainer>
    </FooterBackground>
  );
}

export default Footer;