import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';

/* import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: "600", subsets: ["latin"] }); */

/* import { Inter } from 'next/font/google';
const poppins = Inter({ weight: "600", subsets: ["latin"] }); */

/* import { Montserrat } from 'next/font/google';
const poppins = Montserrat({ weight: "600", subsets: ["latin"] }); */

/* import { Raleway } from 'next/font/google';
const poppins = Raleway({ weight: "600", subsets: ["latin"] }); */

/* import { Rubik } from 'next/font/google';
const poppins = Rubik({ weight: "600", subsets: ["latin"] }); */
/* 
import { Oswald } from 'next/font/google';
const poppins = Oswald({ weight: "600", subsets: ["latin"] }); */

import { Nunito } from 'next/font/google';
const poppins = Nunito({ weight: "700", subsets: ["latin"] });
const poppins2 = Nunito({ weight: "300", subsets: ["latin"] });

function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-4 sm:p-4 md:p-8 items-center 
        sm:border-b md:border-b-0 border-b '>
            <Bars3Icon className="h-8 w-8 cursor-pointer"/>
            <Link href="/" prefetch={false}>
                <h1 className={`${poppins.className} lg:text-[38px] text-2xl sm:text-2xl md:text-3xl text-center`}>News Hub</h1>
            </Link>

        <div className='flex items-center justify-end space-x-2'>
            {/* DarkModeButton */}

            <button className={`${poppins2.className} hidden md:inline bg-black text-white
            px-6 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-white dark:text-black
            text-base md:text-sm lg:text-base 
            `}>
                Subscribe Now
            </button>
        </div>
        </div>
        
        <NavLinks />

        <SearchBox />

    </header>
  );
}

export default Header