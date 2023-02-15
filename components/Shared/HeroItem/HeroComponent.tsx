import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ArrowButton from '../ArrowButton'
import HeroImageItem from './HeroImageItem'
import HeroTextItem from './HeroTextItem'

type Props = {
    numberOfRender?: number
    title: string
    text: string
    buttonText?: string | undefined
    desktopImage: StaticImageData
    tabletImage: StaticImageData
    mobileImage: StaticImageData
}

type colorVariant = 'black' | 'white'

function HeroComponent({
    numberOfRender = 0,
    title,
    text,
    buttonText,
    desktopImage,
    tabletImage,
    mobileImage,
}: Props) {
    const variant: colorVariant = numberOfRender === 0 ? 'black' : 'white'
    return (
        <div
            className={`${
                numberOfRender === 0
                    ? 'bg-pure-black text-pure-white'
                    : 'bg-pure-white text-pure-black'
            }  grid sm:grid-cols-3 xl:grid-cols-5`}
        >
            <div
                className={`sm:col-span-2 flex flex-col justify-center px-[33px] sm:px-[54px] xl:px-[112px] py-[72px]  ${
                    numberOfRender % 2 === 0 ? 'sm:order-1' : 'sm:order-2'
                } order-2`}
            >
                <HeroTextItem
                    text={text}
                    buttonText={buttonText}
                    title={title}
                    variant={variant}
                />
            </div>
            <div
                className={`sm:col-span-1 xl:col-span-3 w-full h-full order-1  ${
                    numberOfRender % 2 === 0 ? 'sm:order-2' : 'sm:order-1'
                }`}
            >
                <HeroImageItem
                    desktopImage={desktopImage}
                    tabletImage={tabletImage}
                    mobileImage={mobileImage}
                />
            </div>
        </div>
    )
}

export default HeroComponent
