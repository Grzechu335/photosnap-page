import React from 'react'
import { featuresData } from '../../public/assets/data/featuresData'
import HeroComponent from '../Shared/HeroItem/HeroComponent'

type Props = {}

const FeaturesHero = (props: Props) => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto">
                {featuresData.map(({ title, text, images }, i) => (
                    <HeroComponent
                        key={i}
                        title={title}
                        text={text}
                        desktopImage={images.desktop}
                        mobileImage={images.mobile}
                        tabletImage={images.tablet}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturesHero
