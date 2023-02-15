import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoIosMenu as MenuIcon, IoIosClose as CloseIcon } from 'react-icons/io'
import Logo from '../../public/assets/components-svg/Logo'

function Header() {
    const router = useRouter()
    const [nav, setNav] = useState(false)
    const navToggle = () => {
        setNav(!nav)
    }
    useEffect(() => {
        setNav(false)
    }, [router.pathname])
    return (
        <header className="fixed left-0 top-0 w-full h-[72px] z-[100] bg-pure-white/30 backdrop-blur-md">
            <div className="h-full max-w-screen-xl mx-auto">
                <div className="flex h-full justify-between items-center py-7 px-[24px]  sm:px-[39px] md:px-[165px]">
                    {/* Logo */}
                    <Link href="/">
                        <Logo fill="#000" />
                    </Link>
                    <div className="hidden sm:flex">
                        <ul className="flex items-center space-x-[37px]">
                            <Link href="/stories">
                                <li className="uppercase hover:text-pure-black/30">
                                    Stories
                                </li>
                            </Link>
                            <Link href="/features">
                                <li className="uppercase hover:text-pure-black/30">
                                    Features
                                </li>
                            </Link>
                            <Link href="/pricing">
                                <li className="uppercase hover:text-pure-black/30">
                                    Pricing
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="hidden sm:flex">
                        <button className="button-rect-black">
                            Get an invite
                        </button>
                    </div>
                    {/* Mobile menu icon */}
                    <div
                        className="cursor-pointer sm:hidden"
                        onClick={navToggle}
                    >
                        <MenuIcon size={30} />
                    </div>
                    {/* Menu nav */}
                    {nav && (
                        <div className="fixed top-0 left-0 w-full h-screen bg-pure-black/40">
                            <div className="top-0 w-full bg-pure-white h-1/2">
                                <div className="flex justify-between items-center py-4 px-[24px]">
                                    <div>
                                        <Logo fill="#000" />
                                    </div>
                                    <div
                                        className="cursor-pointer sm:hidden"
                                        onClick={navToggle}
                                    >
                                        <CloseIcon size={40} />
                                    </div>
                                </div>
                                <div className="px-8 mt-8 space-y-5">
                                    <ul className="flex flex-col space-y-5 text-center">
                                        <Link href="/stories">
                                            <li className="uppercase">
                                                Stories
                                            </li>
                                        </Link>
                                        <Link href="/features">
                                            <li className="uppercase">
                                                Features
                                            </li>
                                        </Link>
                                        <Link href="/pricing">
                                            <li className="uppercase">
                                                Pricing
                                            </li>
                                        </Link>
                                    </ul>
                                    <span className="mt-8 h-[2px] block bg-light-gray w-full"></span>
                                    <button className="w-full h-12 button-rect-black">
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
