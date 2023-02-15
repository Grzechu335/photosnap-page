import React from 'react'
import { pricingData } from '../../public/assets/data/pricingData'
import HeroComponent from '../Shared/HeroItem/HeroComponent'

type Props = {}

const PricingHero = (props: Props) => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto">
                {pricingData.map(({ title, images, text }, i) => (
                    <HeroComponent
                        key={i}
                        text={text}
                        title={title}
                        desktopImage={images.desktop}
                        tabletImage={images.tablet}
                        mobileImage={images.mobile}
                    />
                ))}
            </div>
        </div>
    )
}

export default PricingHero
