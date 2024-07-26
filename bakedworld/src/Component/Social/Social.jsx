import React from 'react'
import './social.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import bonline from '../../assets/img/lineBonjour.png';

export default function Social() {
  return (
      <>
          <div className='social-container pt-44'>
          <div name="bonjour" className="flex items-center justify-center gap-2">
            <img className=" w-6 h-1" src={bonline} alt="" />
            <h1 className="bonjour">bonjour</h1>
            <img className=" w-6 h-1" src={bonline} alt="" />
              </div>
              <div className='social-head flex justify-center items-center flex-col'>
                  <h1 className='contact-head'>Contact Us</h1>
                  <p className='social-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p className='social-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className='social-links flex items-center justify-center py-4 gap-2'>
                      <h1 className='font-bold'>Follow us</h1>
                      <img className=" w-16 h-1" src={bonline} alt="" />
                      <FaFacebookF />
                      <FaInstagram/>
                  </div>
              </div>
      </div>
      </>
  )
}
