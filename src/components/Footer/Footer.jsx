import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h4>Stay Connected</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="">
            <FaSquareXTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Supreme. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
