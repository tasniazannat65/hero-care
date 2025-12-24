'use client';
import React from 'react';
import Logo from './Logo';
import {FaFacebookF, FaWhatsapp, FaEnvelope, FaInstagram} from "react-icons/fa";
import {FaLinkedinIn, FaXTwitter} from "react-icons/fa6"
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='relative mt-20 overflow-hidden text-neutral'>
   <div className='absolute inset-0 bg-cover bg-center' 
   style={{backgroundImage: "url('/assets/bg.jpg')"}}
   >

   </div>
   <div className='absolute inset-0 bg-base-200/60'>

   </div>
   <div className='relative z-10 max-w-7xl mx-auto px-6 py-16 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
    <div>
        <Logo/>
        <p className='mt-4 text-sm leading-relaxed'>
            Reliable and trusted caregiving services for children, elderly, and sick people. Making care simple, safe, and accessible.

        </p>
        <div className='flex flex-wrap gap-1 mt-5'>
            <a href="#" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-transform'>
                <FaFacebookF/>
            </a>
            <a href="#" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-transform'>
                <FaWhatsapp/>
            </a>
            <a href="#" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-transform'>
                <FaEnvelope/>
            </a>
            <a href="#" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-transform'>
                <FaXTwitter/>
            </a>
            <a href="#" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-transform'>
                <FaInstagram/>
            </a>
            <a href="#" className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-transform'>
                <FaLinkedinIn/>
            </a>

        </div>

    </div>
    <div>
        <h3 className='text-lg font-bold text-primary mb-4'>Quick Links</h3>
        <ul className='space-y-2 text-sm'>
            <li><Link href={'/'} className='hover:text-secondary hover:underline'>Home</Link></li>
            <li><Link href={'/about'} className='hover:text-secondary hover:underline'>About</Link></li>
            <li><Link href={'/contact'} className='hover:text-secondary hover:underline'>Contact</Link></li>
            <li><Link href={'/my-booking'} className='hover:text-secondary hover:underline'>My Booking</Link></li>
        </ul>

    </div>
    <div>
         <h3 className='text-lg font-bold text-primary mb-4'>Services</h3>
        <ul className='space-y-2 text-sm'>
            <li><Link href={'/service/baby'} className='hover:text-secondary hover:underline'>Baby Care</Link></li>
            <li><Link href={'/service/elderly'} className='hover:text-secondary hover:underline'>Elderly Care</Link></li>
            <li><Link href={'/service/sick'} className='hover:text-secondary hover:underline'>Sick Care</Link></li>
           
        </ul>

    </div>
    <div>
         <h3 className='text-lg font-bold text-primary mb-4'>Legal</h3>
        <ul className='space-y-2 text-sm'>
            <li><a href='#' className='hover:text-secondary hover:underline'>Terms of use</a></li>
            <li><a href='#' className='hover:text-secondary hover:underline'>Privacy policy</a></li>
            <li><a href='#' className='hover:text-secondary hover:underline'>Cookie policy</a></li>
           
           
        </ul>

    </div>
    <div>
        <h3 className='text-lg font-bold text-primary mb-4'>Stay Connected</h3>
        <p className='text-sm mb-3'>Get care tips & service updates.</p>
        <div className='flex'>
            <input type="email" placeholder='Your Email' className='w-full px-3 py-2 rounded-l-md border border-primary focus:outline-none' />
            <button className='bg-primary px-3 py-2 rounded-r-md text-primary-content font-semibold hover:bg-secondary transition'>Subscribe</button>

        </div>
    </div>

   </div>
   <div className='relative z-10 bg-primary text-white py-4 text-center text-base'>
    © {new Date().getFullYear()} HeroCare. All rights reserved.

   </div>
            
        </div>
    );
};

export default Footer;