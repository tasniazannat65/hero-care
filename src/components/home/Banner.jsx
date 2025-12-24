'use client'
import React from 'react';
import  {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    const slides = [
        {
            title: 'Caring Hands for Tiny Wonders',
            subtitle: 'Safe & loving child care at home',
            video: '/videos/banner_video1.mp4',
            cta: 'Book Child Care'

        },
        {
            title: 'Hands That Honor, Hearts That Care',
            subtitle: 'Professional elderly care you can trust',
            video: '/videos/banner_video2.mp4',
            cta: 'Book Elderly Care'

        },
        {
            title: 'Hands That Heal, Hearts That Care',
            subtitle: 'Home care for sick & special needs',
            video: '/videos/banner_video3.mp4',
            cta: 'Book Sick Care'

        },

    ]
    return (
        <div className='relative w-full h-[80vh]'>
            <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{delay: 9000, disableOnInteraction: false}}
            loop={true}
            pagination={{clickable: true}}
            navigation={true}
            className="h-full"
            
            
            >
                {
                    slides.map((slide, index)=>(
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-[80vh] flex items-center'>
                                <video src={slide.video}
                                className='absolute w-full h-full object-cover'
                                autoPlay
                                muted
                                loop
                                playsInline
                                ></video>
                                <div className='absolute inset-0 bg-black/40'>

                                </div>
                                <div className='relative z-10 px-6 md:px-16  max-w-3xl'>
                                 <h1 className='text-3xl md:text-5xl font-bold leading-16'>
                                    {
                                        slide.title.split(' ').map((word, i, arr)=> {
                                            const color = i < 2 ? 'text-primary' : 'text-white';
                                            return (
                                                <span key={i} className={color}>
                                                    {word}{i < arr.length - 1 ? ' ': ''}
                                                </span>
                                            )
                                        })
                                    }

                                 </h1>

                                    <p className='mt-3 md:mt-5 text-md text-neutral-content md:text-lg'>{slide.subtitle}</p>
                                    <button className='mt-5 bg-primary hover:bg-secondary cursor-pointer px-6 py-3 text-white rounded-md font-semibold'>{slide.cta}</button>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
            
        </div>
    );
};

export default Banner;