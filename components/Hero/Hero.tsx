import React from 'react'
import {
    homePageData,
    storiesData,
} from '../../public/assets/data/homePageData'
import StoriesItem from '../Story/StoriesItem'
import HeroComponent from '../Shared/HeroItem/HeroComponent'

const Hero = () => {
    return (
        <div className="w-full mt-[72px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid">
                    {/* Hero elements */}
                    {homePageData.map((el, i) => (
                        <HeroComponent
                            key={i}
                            buttonText={el.buttonText}
                            desktopImage={el.images.desktopImage}
                            mobileImage={el.images.mobileImage}
                            numberOfRender={i}
                            tabletImage={el.images.tabletImage}
                            text={el.text}
                            title={el.title}
                        />
                    ))}
                </div>
                <div className="grid overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
                    {storiesData
                        .slice(0, 4)
                        .map(({ title, createdBy, images }, i) => (
                            <StoriesItem
                                key={i}
                                title={title}
                                createdBy={createdBy}
                                images={images}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
