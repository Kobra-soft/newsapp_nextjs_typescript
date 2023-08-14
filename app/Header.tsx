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


function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-8 items-center'>
            <Bars3Icon className="h-8 w-8 cursor-pointer"/>
            <Link href="/" prefetch={false}>
                <h1 className={`${poppins.className} text-4xl text-center`}>News App</h1>
            </Link>

        <div className='flex items-center justify-end space-x-2'>
            {/* DarkModeButton */}

            <button className={`${poppins.className} hidden md:inline bg-black text-white
            px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800`}>
                Subscribe Now
            </button>
        </div>
        </div>

        {/* NavLinks */}
        <NavLinks />

        <SearchBox />

    </header>
  );
}

export default Header