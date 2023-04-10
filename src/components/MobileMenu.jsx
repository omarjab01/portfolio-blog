import React from 'react'

const MobileMenu = ({ hideMobile }) => {
    return (
        <div className="fixed h-screen w-screen top-0 left-0 bg-slate-100 p-4">
            <div className="flex flex-row justify-between">
                <a href="/" class="text-black font-semibold text-lg">omar</a>
                <button onClick={() => hideMobile(false)}>X</button>
            </div>
            <ul class="flex flex-col gap-4 justify-center items-center mt-52">
                <li><a href="/services">Servizi</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/projects">Progetti</a></li>
                <li><a href="/about">Chi Sono</a></li>
            </ul>
        </div>
    )
}

export default MobileMenu