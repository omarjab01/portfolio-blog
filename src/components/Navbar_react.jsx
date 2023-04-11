import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {

    const [showMobile, setShowMobile] = useState(false)

    return (
        <nav className="flex flex-row items-center w-full justify-between container mx-auto p-6 max-w-7xl">
            <a href="/" className="text-black font-semibold text-lg">omar</a>
            <ul className="hidden flex-row gap-4 md:flex">
                <li><a href="/services">Servizi</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/projects">Progetti</a></li>
                <li><a href="/about">Chi Sono</a></li>
            </ul>

            {/* <!-- Hamburger Menu --> */}
            <button className="flex flex-col justify-between gap-[0.2rem] cursor-pointer md:hidden" id="hamburger-menu" onClick={() => setShowMobile(true)}>
                <div className="bar-1 w-5 h-[2px] bg-black"></div>
                <div className="bar-2 w-5 h-[2px] bg-black"></div>
                <div className="bar-3 w-5 h-[2px] bg-black"></div>
            </button>

            {
                showMobile && <MobileMenu hideMobile={setShowMobile} />
            }
        </nav>
    )
}

export default Navbar