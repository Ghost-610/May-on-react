import React from 'react'

function header() {
return (
    <nav className='Nav-bar flex justify-between items-center bg-black -800 p-4'>
        <ul className='Nav-menu flex space-x-4 text-lg text-white align-center text-right ml-auto'>
            <li className='Nav-item hover:bg-white hover:text-black'><a href="#about-me">About Me</a></li>
            <li className='Nav-item hover:bg-white hover:text-black'><a href="#portfolio">Portfolio</a></li>
            <li className='Nav-item hover:bg-white hover:text-black'><a href="#skills">Skills</a></li>
            <li className='Nav-item hover:bg-white hover:text-black'><a href="#contact-me">Contact Me</a></li>
        </ul>
    </nav>
)
}

export default header