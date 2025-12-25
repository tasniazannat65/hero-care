'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const page = () => {
    const steps = [
        {
            title: 'Choose Care Type',
            description: 'Select baby care, elderly care, or patient support based on your needs.'
        },
        {
            title: 'Set Time & Location',
            description: 'Pick a convenient schedule and location for care.'
        },
        {
            title: 'Get Matched',
            description: 'We connect you with verified and trusted caregivers.'
        },
        {
            title: 'Relex & Stay Informed',
            description: 'Your loved one is cared for while you stay updated.'
        },

    ]
    return (
        <div className='w-full overflow-hidden pt-20'>
            <section className='text-center px-6'>
                <motion.h1
                className='text-4xl md:text-5xl font-bold text-primary mb-6'
                initial={{opacity: 0, y: -40}}
                animate={{opacity: 1, y: 0}}
                >
                    Care That Feels Like Family

                </motion.h1>
                <motion.p
                className='max-w-2xl mx-auto text-lg text-neutral'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3}}

                >
                    HeroCare exists to remove fear, stress, and uncertainty from caregiving —
          by connecting families with people they can truly trust.
                </motion.p>

            </section>
            <section className='py-16 px-6 max-w-5xl mx-auto text-center'>
                <motion.h2
                className='text-4xl font-bold text-primary mb-6'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                >
                    Why HeroCare Was Created

                </motion.h2>
                <motion.p
                className='text-neutral text-lg leading-relaxed'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                >
                     Finding reliable care for loved ones should never feel overwhelming.
          HeroCare was built with one belief — caregiving should be simple,
          transparent, and human. We focus on trust, safety, and real connections
          between families and caregivers.

                </motion.p>

            </section>
            <section className='py-16  px-6'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
             {
                [
                    {
                        title: 'Our Mission',
                        text: 'Make caregiving accessible, safe, and stress-free for every family.'
                    },
                    {
                        title: 'Our Vision',
                        text: 'A world where families never worry about the safety of their loved ones.'
                    },
                    {
                        title: 'Our Values',
                        text: 'Trust, empathy, responsibility, and respect guide everything we do.'
                    }
                ].map((item, index)=> (
                    <motion.div key={index}
                    className='rounded-2xl bg-secondary/10 shadow-md p-8'
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    >
                        <h3 className='text-2xl font-bold mb-4 text-primary'>
                            {item.title}
                        </h3>
                        <p className='text-neutral'>{item.text}</p>
                        

                    </motion.div>
                ))
             }
                </div>

            </section>
            <section className='py-16 px-6'>
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-4xl font-bold text-center mb-16 text-primary'>How HeroCare Works</h2>
                    <div className='space-y-12'>
                        {
                            steps.map((step, i)=> (
                                <motion.div key={i}
                                className='flex gap-6 items-start'
                                initial={{opacity: 0, x: -30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                >
                                    <div className='w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold'>
                                        {i + 1}

                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-1 text-primary'>
                                            {step.title}
                                        </h3>
                                        <p className='text-neutral'>{step.description}</p>

                                    </div>

                                </motion.div>
                            ))
                        }

                    </div>

                </div>

            </section>
            <section className='py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <motion.div
                initial={{opacity: 0, x: -40}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                >
                    <h2 className='text-4xl font-bold mb-6 text-primary'>Built on Trust & Care</h2>
                    <p className='text-neutral text-lg'>
                         Every caregiver on HeroCare goes through a verification process.
            We prioritize safety, professionalism, and compassion — because
            your loved ones deserve nothing less.
                    </p>

                </motion.div>
                <motion.div
                initial={{opacity: 0, x: 40}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                >
                    <Image src="/assets/trust.webp" alt='Trusted caregiving' width={600} height={400} className='rounded-2xl shadow-lg object-cover'/>

                </motion.div>

            </section>
            <section className='py-20 text-center px-6 bg-gradient-to-r from-primary/50 to-secondary/50 text-white'>
            <motion.h2
            className='text-4xl font-bold mb-6'
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            >
                Because Your Loved Ones Deserve the Best Care
            </motion.h2>
            <motion.a href='/booking'
            className='inline-block bg-white text-primary border-2 border-primary px-10 py-4 rounded-full text-xl font-semibold hover:scale-105 transition'
            whileHover={{scale: 1.05}}
            >
                Book a Caregiver Today
            </motion.a>

            </section>
       

            
        </div>
    );
};

export default page;