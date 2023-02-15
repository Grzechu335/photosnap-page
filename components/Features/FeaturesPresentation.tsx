import React from 'react'
import { presentationFeaturesData } from '../../public/assets/data/featuresData'
import PresentationItem from '../Shared/PresentationItem'

const FeaturesPresentation = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto">
                <div className="mt-[80px] my-[80px] sm:my-[120px]">
                    <div className="grid xl:grid-cols-3 gap-[56px] sm:gap-[80px] xl:gap-[30px] px-[33px] sm:px-[155px] xl:px-[165px]">
                        {presentationFeaturesData.map(
                            ({ title, text, image }, i) => (
                                <PresentationItem
                                    key={i}
                                    title={title}
                                    text={text}
                                    image={image}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPresentation
