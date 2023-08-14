'use client'

import { categories } from "@/constants"
import { usePathname } from "next/navigation";
import NavLink from "./NavLink"

/* import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: "600", subsets: ["latin"] }); */

/* import { Inter } from 'next/font/google';
const poppins = Inter({ weight: "600", subsets: ["latin"] }); */

import { Montserrat } from 'next/font/google';
const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

/* import { Raleway } from 'next/font/google';
const poppins = Raleway({ weight: "600", subsets: ["latin"] }); */

/* import { Rubik } from 'next/font/google';
const poppins = Rubik({ weight: "600", subsets: ["latin"] }); */

/* import { Oswald } from 'next/font/google';
const poppins = Oswald({ weight: "600", subsets: ["latin"] }); */

/* import { Nunito } from 'next/font/google';
const poppins = Nunito({ weight: "700", subsets: ["latin"] }); */

function NavLinks() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };

  return ( 
    <nav className={`${poppins.className} grid grid-cols-4 md:grid-cols-8 text-xs md:text-xs lg:text-sm
    gap-4 pb-3 sm:pb-1 md:pb-1 lg:max-w-7xl md:max-w-8xl mx-auto border-b`}>
        {categories.map((category) => (
            <NavLink 
            key={category} 
            category={category} 
            isActive={isActive(category)}/>
        ))}
    </nav>
    );
}

export default NavLinks