import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-full flex fixed top-0 z-20 px-60 py-3 bg-slate-800'>
            <div className='w-full flex justify-between items-center'>
                {/* logo and title on left side of navbar */}
                <Link
                    to='/'
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}
                    className='flex items-center gap-5'
                >
                    <img src={require('../assets/logo192.png')} className='w-12 h-12 object-contain' />
                    <p className='text-white text-[28px] font-bold'>Carson Forsyth</p>
                </Link>

                <div className='flex gap-6 text-[24px] text-white'>
                    <a
                        href='#About'
                        className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-cyan-500 to-lime-500'
                    >
                        About
                    </a>
                    <a
                        href='#Skills'
                        className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-cyan-500 to-lime-500'
                    >
                        Skills
                    </a>
                    <a
                        href='#Courses'
                        className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-cyan-500 to-lime-500'
                    >
                        Courses
                    </a>
                    <a
                        href='#Projects'
                        className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-cyan-500 to-lime-500'
                    >
                        Projects
                    </a>
                    <a
                        href='#Contact'
                        className='hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-cyan-500 to-lime-500'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar