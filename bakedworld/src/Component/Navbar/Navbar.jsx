import React from 'react'
import './navbar.css'
import logo from '..//..//assets/img/logo.png';
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
    return (
        <>
            <div className="container px-6 py-4">
                {/* Logo */}
                <div className='logodiv'>
                    <img className='logo' src={logo} alt="" />
                </div>
                {/* Nav-links */}
                <div className='navlinks'>
                    <ul>
                       <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Shipping</a></li>
                        <li><a href="">Recipes</a></li>
                       <li><a href="">Blog</a></li>
                   </ul>
                </div>

                {/* cart */}
                <div className='shop-cart'>
                    <IoCartOutline size={27} className=' text-white'/>
                </div>
        </div>
        </>
  )
}
