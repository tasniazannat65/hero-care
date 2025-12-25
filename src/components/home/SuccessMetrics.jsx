'use client';
import React from 'react';
import { FaClock, FaRegCalendarCheck, FaUserCheck } from 'react-icons/fa';
import CountUp from 'react-countup';

const SuccessMetrics = () => {
    const metrics = [
        {
            icon: <FaUserCheck size={32}/>,
            number: 500, suffix: '+',
            label: 'Happy Families'


        },
        {
            icon: <FaClock size={32}/>,
            number: 98, suffix: '%',
            label: 'On-time Service'


        },
        {
            icon: <FaRegCalendarCheck size={32}/>,
            number: 1000, suffix: '+',
            label: 'Successful Booking'


        },
    ]
    return (
        <div className='py-14 px-6'>
            <div className='w-11/12 mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary mb-4'>
                Our Impact in Numbers
            </h2>
            <p className='text-neutral mb-14'>HeroCare consistently delivers quality care that families can trust</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    metrics.map((metric, i)=>(
                        <div key={i}
                        className='bg-primary/10 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all hover:scale-105 duration-300'
                        
                        >
                            <div className='text-primary mb-3'>
                                {metric.icon}
                            </div>
                            <h3 className='text-3xl font-bold text-secondary mb-2'>
                                <CountUp end={metric.number} duration={5} suffix={metric.suffix}/>
                            </h3>
                            <p className='text-neutral'>{metric.label}</p>

                        </div>
                    ))
                }

            </div>

            </div>
            
        </div>
    );
};

export default SuccessMetrics;