'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    const images = [
        '/assets/about1.webp',
        '/assets/about2.jpg',
        '/assets/about3.jpg',
        '/assets/about4.jpg'
    ]
    return (
        <div className='relative w-full py-20'>
            <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-0 gap-12'>
            <div className='flex-1'>
                <motion.h2 
                className='text-4xl md:text-5xl font-bold text-primary mb-6'
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                >
                    Trusted Care, Anytime, Anywhere

                </motion.h2>
                <motion.p
                className='text-lg text-neutral mb-6'
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.8}}
                >
                    We make babySitting, elderly care, and patient support simple, safe, and reliable.

                </motion.p>
                <motion.ul
                className='space-y-4 mb-8'
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {staggerChildren: 0.3}
                    }
                }}
                >
                    {
                        [
                            'Verified Caregivers - Professionals you can trust',
                            'Flexible Scheduling - Book by time & location',
                            'Pease of Mind - Caring for your loved ones',
                        ].map((item, index)=> (
                            <motion.li key={index}
                            className='flex items-center text-gray-500 font-medium'
                            variants={{
                                hidden: {opacity: 0, x: -20},
                                visible: {opacity: 1, x: 0}
                            }}
                            >
                                <span className='text-secondary mr-3 text-xl'>✔</span>
                                {item}
                                 
                            </motion.li>
                        ))
                    }

                </motion.ul>

                <motion.a 
                href='/booking'
                className='inline-block bg-gradient-to-r from-primary via-accent to-secondary hover:from-secondary hover:to-primary text-white px-8 py-3 rounded-md font-semibold transition-all'
                whileHover={{scale: 1.05}}
                >
                    Book a Caregiver

                </motion.a>

            </div>
            <motion.div
            className='flex-1 grid grid-cols-2 grid-rows-2 gap-4'
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5, duration: 1}}
            >
                {
                    images.map((src, index)=> (
                        <div key={index} className='overflow-hidden rounded-xl shadow-lg'>
                            <Image src={src}
                            alt={`Caregiving Image ${index + 1}`}
                            width={250}
                            height={200}
                            className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 '
                            />

                        </div>
                    ))
                }

            </motion.div>

            </div>
            
        </div>
    );
};

export default About;