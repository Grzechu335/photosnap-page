import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ArrowButton from '../ArrowButton'

type Props = {
    title: string
    createdBy: string
    date?: string
    images: {
        desktop: StaticImageData
        mobile: StaticImageData
    }
}

const StoriesItem = ({ title, createdBy, date, images }: Props) => {
    return (
        <div className="relative h-[375px] sm:h-[500px] flex items-end cursor-pointer">
            {/* Photo Background */}
            <Image
                src={images.desktop}
                alt="story image"
                className="hidden xl:block -z-40 absolute"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
            />
            <Image
                src={images.mobile}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                alt="story image"
                className="xl:hidden absolute -z-40"
            />
            {/* Content */}
            <div className="w-full h-[70%] stories-content-bg flex items-end">
                <div className="text-pure-white w-full p-[40px]">
                    <h4 className="text-[18px] leading-[25px] text-pure-white font-bold">
                        {title}
                    </h4>
                    <p>
                        by <span>{createdBy}</span>
                    </p>
                    <span className="mt-[16px] w-full h-[2px] block bg-pure-white/25"></span>
                    <div className="flex justify-between items-center mt-[20px]">
                        <ArrowButton
                            value="Read Story"
                            variant="white"
                            expanse
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesItem
