'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className= ""}) => {
    const path = usePathname();
    return (
        <Link className={`${path.startsWith(href) && 'text-white bg-secondary rounded-full px-3 py-1 '} font-medium text-primary text-[16px] ${className}`} href={href}>{children}</Link>
    );
};

export default NavLink;