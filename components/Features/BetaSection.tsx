import Image from 'next/image'
import React from 'react'
import ArrowButton from '../Shared/ArrowButton'
import bgBetaDesktop from '../../public/assets/shared/desktop/bg-beta.jpg'
import bgBetaMobile from '../../public/assets/shared/mobile/bg-beta.jpg'

const BetaSection = () => {
    return (
        <div className="relative w-full text-pure-white ">
            <Image
                src={bgBetaDesktop}
                alt="background beta"
                className="absolute hidden -z-40 sm:block"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
            />
            <Image
                src={bgBetaMobile}
                alt="background beta"
                className="absolute -z-40 sm:hidden"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
            />
            <div className="relative max-w-screen-xl mx-auto py-[64px] sm:py-[68px] px-[33px] xl:px-[170px]">
                <span className="absolute xl:hidden block left-[33px] top-0 my-auto w-1/3 h-[6px] main-accent-bg z-20"></span>
                <div className="grid sm:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h2>We’re in beta. Get your invite today!</h2>
                    </div>
                    <div></div>
                    <div className="flex justify-start sm:justify-end mt-[24px] sm:mt-0">
                        <ArrowButton
                            variant="white"
                            value="Get an Invite"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetaSection
