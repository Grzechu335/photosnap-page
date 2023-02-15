import React from 'react'
import Logo from '../../public/assets/components-svg/Logo'
import {
    AiFillFacebook as FacebookIcon,
    AiFillYoutube as YoutubeIcon,
    AiOutlineTwitter as TwitterIcon,
    AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai'
import { BsPinterest as PinterestIcon } from 'react-icons/bs'
import Link from 'next/link'
import ArrowButton from '../Shared/ArrowButton'

const FooterMobile = () => {
    return (
        <div className="flex flex-col items-center sm:hidden">
            <Logo fill="#fff" />
            <div className="flex items-center space-x-3 mt-[32px]">
                <FacebookIcon size={25} />
                <YoutubeIcon size={25} />
                <TwitterIcon size={25} />
                <PinterestIcon size={25} />
                <InstagramIcon size={25} />
            </div>
            <div className="mt-[49px]">
                <ul className="flex flex-col items-center space-y-6">
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
            <div className="mt-[119px]">
                <ArrowButton
                    value="Get an invite"
                    variant="white"
                />
            </div>
            <div className="mt-[34px]">
                <p className="text-[15px] leading-[20px] text-pure-white/50">
                    Copyright 2019. All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default FooterMobile
