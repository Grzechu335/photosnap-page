import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    desktopImage: StaticImageData
    tabletImage: StaticImageData
    mobileImage: StaticImageData
}

const HeroImageItem = ({ desktopImage, tabletImage, mobileImage }: Props) => {
    return (
        <>
            <Image
                src={desktopImage}
                alt="image"
                style={{ width: '100%', height: '100%' }}
                className="hidden xl:block"
            />
            <Image
                src={tabletImage}
                alt="image"
                style={{ width: '100%', height: '100%' }}
                className="hidden sm:block xl:hidden"
            />
            <Image
                src={mobileImage}
                alt="image"
                style={{ width: '100%', height: '100%' }}
                className="block sm:hidden"
            />
        </>
    )
}

export default HeroImageItem
