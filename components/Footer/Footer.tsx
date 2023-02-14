import React from 'react'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'
import FooterTablet from './FooterTablet'

const Footer = () => {
    return (
        <div className="w-full bg-pure-black text-pure-white py-[64px] sm:px-[39px] xl:px-[170px]">
            <div className="max-w-screen-xl mx-auto">
                <FooterDesktop />
                <FooterTablet />
                <FooterMobile />
            </div>
        </div>
    )
}

export default Footer
