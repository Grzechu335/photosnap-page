import Image from 'next/image'
import React from 'react'
import { presentationFeaturesData } from '../../public/assets/data/featuresData'
import PresentationItem from '../Shared/PresentationItem'
const Presentation = () => {
    return (
        <div className="w-full mt-[80px] my-[80px] sm:my-[120px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid xl:grid-cols-3 gap-[56px] sm:gap-[80px] xl:gap-[30px] px-[33px] sm:px-[155px] xl:px-[165px]">
                    {presentationFeaturesData
                        .slice(0, 3)
                        .map(({ title, text, image }, i) => (
                            <PresentationItem
                                key={i}
                                title={title}
                                text={text}
                                image={image}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Presentation
