import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosMenu as MenuIcon, IoIosClose as CloseIcon } from 'react-icons/io'
import Logo from '../public/assets/components-svg/Logo'

function Header() {
    const [nav, setNav] = useState(false)
    const navToggle = () => {
        setNav(!nav)
    }
    return (
        <header className="fixed left-0 top-0 w-full h-[72px] z-[100] bg-pure-white/30 backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto h-full">
                <div className="flex h-full justify-between items-center py-7 px-[24px]  sm:px-[39px] md:px-[165px]">
                    {/* Logo */}
                    <div>
                        <Logo fill="#000" />
                    </div>
                    <div className="hidden sm:flex">
                        <ul className="flex items-center space-x-[37px]">
                            <li className="uppercase">Stories</li>
                            <li className="uppercase">Features</li>
                            <li className="uppercase">Pricing</li>
                        </ul>
                    </div>
                    <div className="hidden sm:flex">
                        <button className="button-rect-black">
                            Get an invite
                        </button>
                    </div>
                    {/* Mobile menu icon */}
                    <div
                        className="sm:hidden cursor-pointer"
                        onClick={navToggle}
                    >
                        <MenuIcon size={30} />
                    </div>
                    {/* Menu nav */}
                    {nav && (
                        <div className="fixed left-0 top-0 w-full h-screen bg-pure-black/40">
                            <div className="w-full top-0 bg-pure-white h-1/2">
                                <div className="flex justify-between items-center py-4 px-[24px]">
                                    <div>
                                        <Logo fill="#000" />
                                    </div>
                                    <div
                                        className="sm:hidden cursor-pointer"
                                        onClick={navToggle}
                                    >
                                        <CloseIcon size={40} />
                                    </div>
                                </div>
                                <div className="mt-8 px-8 space-y-5">
                                    <ul className="text-center flex flex-col space-y-5">
                                        <li className="uppercase">Stories</li>
                                        <li className="uppercase">Features</li>
                                        <li className="uppercase">Pricing</li>
                                    </ul>
                                    <span className="mt-8 h-[2px] block bg-light-gray w-full"></span>
                                    <button className="button-rect-black w-full h-12">
                                        Get an invite
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
