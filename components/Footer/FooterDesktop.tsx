import React from 'react'
import ArrowButton from '../ArrowButton'
import {
    AiFillFacebook as FacebookIcon,
    AiFillYoutube as YoutubeIcon,
    AiOutlineTwitter as TwitterIcon,
    AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai'
import { BsPinterest as PinterestIcon } from 'react-icons/bs'
import Logo from '../../public/assets/components-svg/Logo'

const FooterDesktop = () => {
    return (
        <div className="hidden xl:grid-cols-4 xl:grid">
            <div className="flex flex-col justify-between items-center space-y-[85px]">
                <Logo fill="#fff" />
                <div className="flex items-center space-x-3">
                    <FacebookIcon size={25} />
                    <YoutubeIcon size={25} />
                    <TwitterIcon size={25} />
                    <PinterestIcon size={25} />
                    <InstagramIcon size={25} />
                </div>
            </div>
            <div>
                <ul className="flex flex-col space-y-6">
                    <li className="footer-li">Home</li>
                    <li className="footer-li">Stories</li>
                    <li className="footer-li">Features</li>
                    <li className="footer-li">Pricing</li>
                </ul>
            </div>
            <div></div>
            <div className="flex flex-col justify-between items-end">
                <div>
                    <ArrowButton
                        value="Get an invite"
                        variant="white"
                    />
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

export default FooterDesktop
