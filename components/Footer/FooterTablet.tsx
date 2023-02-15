import React from 'react'
import {
    AiFillFacebook as FacebookIcon,
    AiFillYoutube as YoutubeIcon,
    AiOutlineTwitter as TwitterIcon,
    AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai'
import { BsPinterest as PinterestIcon } from 'react-icons/bs'
import Logo from '../../public/assets/components-svg/Logo'
import Link from 'next/link'
import ArrowButton from '../Shared/ArrowButton'

const FooterTablet = () => {
    return (
        <div className="hidden xl:hidden sm:grid grid-rows-4 space-y-[32px]">
            <div className="flex items-center justify-between">
                <Logo fill="#fff" />
                <ArrowButton
                    value="Get an invite"
                    variant="white"
                />
            </div>
            <div>
                <ul className="flex space-x-[26px]">
                    <Link href="/">
                        <li className="footer-li">Home</li>
                    </Link>
                    <Link href="/stories">
                        <li className="footer-li">Stories</li>
                    </Link>
                    <Link href="/features">
                        <li className="footer-li">Features</li>
                    </Link>
                    <Link href="/pricing">
                        <li className="footer-li">Pricing</li>
                    </Link>
                </ul>
            </div>
            <div></div>
            <div className="flex justify-between">
                <div className="flex items-center space-x-3">
                    <FacebookIcon size={25} />
                    <YoutubeIcon size={25} />
                    <TwitterIcon size={25} />
                    <PinterestIcon size={25} />
                    <InstagramIcon size={25} />
                </div>
                <div>
                    <p className="text-[15px] leading-[20px] text-pure-white/50">
                        Copyright 2019. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterTablet
