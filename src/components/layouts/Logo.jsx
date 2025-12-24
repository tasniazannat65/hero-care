import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'}>
        <Image alt='logo image for hero care' src={'/assets/logo1.png'} width={120} height={70}/>
        </Link>
    );
};

export default Logo;