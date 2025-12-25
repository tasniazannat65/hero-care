'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
        {
            text: 'HeroCare helped me find someone I could truly trust with my child.',
            name: 'Rina Ahmed',
            role: 'Baby Care',
            image: '/assets/person1.avif',
            rating: 5
        },
        {
            text: 'The caregiver treated my father with dignity and respect.',
            name: 'Arif Rahman',
            role: 'Elderly Care',
            image: '/assets/person2.avif',
            rating: 5
        },
        {
            text: 'Reliable service and genuine care. Highly recommended.',
            name: 'Sadia Khan',
            role: 'Patient Care',
            image: '/assets/person3.avif',
            rating: 4
        },
        {
            text: 'Professional caregivers and smoothe booking process.',
            name: 'Hasan Ali',
            role: 'Patient Care',
            image: '/assets/person4.jpg',
            rating: 5
        },
        {
            text: 'I finally feel relaxed leaving my mother in safe hands.',
            name: 'Nusrat Jahan',
            role: 'Elderly Care',
            image: '/assets/person5.webp',
            rating: 5
        },
        {
            text: 'Care that truly feels human and compassionate.',
            name: 'Tanvir Islam',
            role: 'Baby Care',
            image: '/assets/person6.jpg',
            rating: 4
        },
    ]
    return (
        <div className='py-14 px-6'>
            <div className='w-11/12 mx-auto text-center'>
            <motion.h2
            className='text-4xl md:text-5xl font-bold text-primary mb-4'
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            >
                Stories That Build Trust

            </motion.h2>
            <p className='text-neutral mb-16'>Families rely on HeroCare for care that truly matters.</p>
            <Swiper
            className='testimonial-swiper'
            modules={[Autoplay, Pagination, Navigation]}
            loop
            grabCursor
            autoplay={{delay: 3000, disableOnInteraction: false}}
            navigation
            pagination={{clickable: true}}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
                768: {slidesPerView: 2},
                1024: {slidesPerView: 3}
            }}
            
            >
                {
                    testimonials.map((test, index)=> (
                        <SwiperSlide key={index}>
                            <div className='relative rounded-3xl bg-white shadow-lg p-8
                             pt-14 h-full flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300'>
                                <span className='absolute top-6 left-6 text-7xl font-serif text-secondary/20 pointer-events-none'>
                                “
                                </span>
                                <div className='w-20 h-20 mb-4 relative'>
                                    <Image src={test.image} alt={test.name}
                                    fill
                                    
                                    className='rounded-full object-cover border-4 border-primary'
                                    />

                                </div>
                                <div className='flex gap-1 text-yellow-400 mb-4'>
                                    {Array.from({
                                        length: test.rating
                                    }).map((_, i)=>(
                                        <FaStar key={i}/>
                                    ))}

                                </div>
                                <p className='text-neutral leading-relaxed mb-3'>{test.text}</p>
                                <h4 className='font-bold text-primary'>{test.name}</h4>
                                <span className='text-sm text-secondary'>{test.role}</span>

                            </div>

                        </SwiperSlide>
                    ))
                }

            </Swiper>

            </div>
            
        </div>
    );
};

export default Testimonial;