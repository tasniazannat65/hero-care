'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import NavLink from '../button/NavLink';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = ({isLoggedIn = false, userName = 'user'}) => {
    const [open, SetOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const nav = (
        <>
        <li>
            <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink href={'/about'}>About</NavLink>
        </li>
        <li>
            <NavLink href={'/contact'}>Contact</NavLink>
        </li>
        <li className='relative'>
            <button onClick={()=> setServiceOpen(!serviceOpen)} className='font-semibold text-primary hover:text-secondary flex items-center gap-1 whitespace-nowrap'>
                Service <IoMdArrowDropdown />


            </button>
            {
                serviceOpen && (
                    <ul className='absolute top-8 left-0 bg-base-200 shadow-lg rounded-md w-48  z-50'>
                        <li>
                            <NavLink href={'/service/baby'} className="block px-4 py-2 hover:bg-gray-100">Baby Care</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/service/elderly'} className="block px-4 py-2 hover:bg-gray-100">Elderly Care</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/service/sick'} className="block px-4 py-2 hover:bg-gray-100">Sick  Care</NavLink>
                        </li>

                    </ul>
                )
            }

        </li>
        {
           isLoggedIn &&  <li>
            <NavLink href={'/my-booking'}>My Booking</NavLink>
        </li>
        }
        
        
        </>
    )
    return (
        <div className='fixed top-4 left-0 right-0 z-50 px-4'>
            <nav className=' backdrop-blur'>
                <div className='flex items-center justify-between px-5 py-2'>
                    <Logo/>
                    <div className='hidden md:block  items-center gap-2  font-semibold'>
                        <ul className='flex  items-center space-x-3'>
                            {nav}
                        </ul>

                    </div>
                    {
                        !isLoggedIn ? (
                              <Link href={'/login'} className='hidden md:inline-flex rounded-md bg-primary px-5 py-2 text-lg font-semibold text-white hover:bg-secondary transition'>
                    Login</Link>

                        ) : (
                            <div className='hidden md:flex relative'>
                                <button onClick={()=> setProfileOpen(!profileOpen)} className='px-4 py-2 font-semibold text-primary hover:text-secondary flex items-center'>
                                    {userName} <IoMdArrowDropdown />

                                </button>
                                {
                                    profileOpen && (
                                        <ul className='absolute right-0 top-10 w-40 bg-white shadow-lg rounded-md z-50'>
                                            <li>
                                                <NavLink href={'/profile'}className="block px-4 py-2 hover:bg-gray-100" 
                                                >
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <li>
                                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100" 
                                                >
                                                    Logout
                                                </button>
                                            </li>

                                        </ul>
                                    )
                                }

                            </div>
                        )
                    }
                  
                    <button onClick={()=> SetOpen(!open)}
                        className='md:hidden cursor-pointer text-primary'
                        >
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
    

                    </button>

                </div>
                <div className={`md:hidden transition-opacity duration-300 ${open ? ' opacity-100' : ' opacity-0 hidden' }`}>
                    <div className='p-6 bg-base-300 space-y-3'>
                        <ul className='flex flex-col items-center justify-center '>
                            {nav}
                        </ul>
                        {
                            !isLoggedIn ? (
                                 <Link href={'/login'} className='block rounded-xl bg-primary  px-4 py-3 text-center text-white font-semibold hover:bg-secondary'>
                        Login
                        
                        </Link>

                            ) : (
                                <div className='space-y-2'>
                                    <NavLink href={'/profile'} className="block text-center bg-white rounded px-4 py-2 hover:bg-gray-100">Profile</NavLink>
                                    <button className='block w-full text-center bg-white rounded px-4 py-2 hover:bg-gray-100'>Logout</button>

                                </div>
                            )
                        }
                       

                    </div>

                </div>


            </nav>
            
        </div>
    );
};

export default Navbar;