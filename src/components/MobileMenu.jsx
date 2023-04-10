import React from 'react'

const MobileMenu = ({ hideMobile }) => {
    return (
        <div className="fixed h-screen w-screen top-0 left-0 bg-white p-6 z-50">
            <div className="flex flex-row justify-between">
                <a href="/" className="text-black font-semibold text-lg">omar</a>
                <button onClick={() => hideMobile(false)} className='text-2xl font-semibold'>&times;</button>
            </div>
            <ul className="flex flex-col gap-6 justify-center items-center mt-52">
                <li><a href="/services" className='text-2xl font-semibold'>Servizi</a></li>
                <li><a href="/blog" className='text-2xl font-semibold'>Blog</a></li>
                <li><a href="/projects" className='text-2xl font-semibold'>Progetti</a></li>
                <li><a href="/about" className='text-2xl font-semibold'>Chi Sono</a></li>
            </ul>
        </div>
    )
}

export default MobileMenu