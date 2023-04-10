import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {

    const [showMobile, setShowMobile] = useState(false)

    return (
        <nav class="flex flex-row items-center w-full justify-between">
            <a href="/" class="text-black font-semibold text-lg">omar</a>
            <ul class="hidden flex-row gap-4 md:flex">
                <li><a href="/services">Servizi</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/projects">Progetti</a></li>
                <li><a href="/about">Chi Sono</a></li>
            </ul>

            {/* <!-- Hamburger Menu --> */}
            <button class="flex flex-col justify-between gap-[0.2rem] cursor-pointer md-hidden" id="hamburger-menu" onClick={() => setShowMobile(true)}>
                <div class="bar-1 w-5 h-[2px] bg-black"></div>
                <div class="bar-2 w-5 h-[2px] bg-black"></div>
                <div class="bar-3 w-5 h-[2px] bg-black"></div>
            </button>

            {
                showMobile && <MobileMenu hideMobile={setShowMobile} />
            }
        </nav>
    )
}

export default Navbar