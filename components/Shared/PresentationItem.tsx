import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    title: string
    text: string
    image: StaticImageData
}

const PresentationItem = ({ title, text, image }: Props) => {
    return (
        <div className="grid grid-rows-2 text-center">
            <div className="flex items-start justify-center">
                <Image
                    src={image}
                    alt="image"
                />
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <h5 className="text-[18px] leading-[25px] font-bold">
                        {title}
                    </h5>
                </div>
                <div className="mt-[16px] flex flex-col justify-start">
                    <p className=" text-pure-black/60">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default PresentationItem
