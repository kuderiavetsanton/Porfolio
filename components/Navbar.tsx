import React, { MouseEventHandler, useState } from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'

 const Navbar:React.FC = function (){
    const [ showNav, setShowNav ] = useState(false)
    return (
        <nav className="fixed z-50 bg-white border-b border-gray-300 navbar__menu"> 
            <a onClick={(e:React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault()
                scroll.scrollToTop()
            }} className="text-2xl text-red-500 cursor-pointer">
                <Image src="/images/my-logo.png" alt="logo" width={60} height={60}/>
            </a>

            <div className={classnames("hamburger__button",{'active':showNav})} onClick={e => setShowNav(!showNav)}>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
            </div>
            <div className={classnames("nav__links",{'active':showNav})}>
                <ul className="flex flex-col w-full text-white md:text-gray-900 md:flex-row">
                    <li className="nav__li"><Link to="about" duration={1000} ignoreCancelEvents={true} isDynamic={true} smooth={true} className="p-3 cursor-pointer md:hover:text-red-500">About</Link></li>
                    <li className="nav__li "><Link to="skills" duration={1000} ignoreCancelEvents={true} isDynamic={true} smooth={true} className="p-3 cursor-pointer md:hover:text-red-500">Skills</Link></li>
                    <li className="nav__li"><Link to="work" offset={-50} ignoreCancelEvents={true} isDynamic={true} duration={1000} smooth={true} className="p-3 cursor-pointer md:hover:text-red-500">My Work</Link></li>
                    <li className="nav__li "><Link to="contact" duration={1000} ignoreCancelEvents={true} isDynamic={true} smooth={true} className="p-3 cursor-pointer md:hover:text-red-500">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar