import React from 'react'
import { storiesData } from '../../public/assets/data/homePageData'
import ArrowButton from '../Shared/ArrowButton'
import StoriesItem from './StoriesItem'
import MoonOfAppalaciaImageDesktop from '../../public/assets/stories/desktop/moon-of-appalacia.jpg'
import MoonOfAppalaciaImageTablet from '../../public/assets/stories/tablet/moon-of-appalacia.jpg'
import Image from 'next/image'

const StoriesHero = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto">
                {/* Stories hero */}
                <div className="relative w-full">
                    <Image
                        src={MoonOfAppalaciaImageDesktop}
                        alt="image"
                        className="absolute hidden -z-40 xl:block"
                        priority
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        quality={100}
                    />
                    <Image
                        src={MoonOfAppalaciaImageTablet}
                        alt="image"
                        className="-z-40 sm:absolute xl:hidden"
                        priority
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        quality={100}
                    />
                    <div className="text-pure-white py-[48px] bg-pure-black sm:bg-transparent px-[29px] sm:pl-[39px] xl:pl-[112px] flex flex-col justify-center space-y-[24px] sm:py-[122px] sm:w-[500px]">
                        <h4 className="uppercase">
                            LAST MONTH&apos;S FEATURED STORY
                        </h4>
                        <h1 className="uppercase text-[40px] leading-[48px] tracking-[4.16px]">
                            Hazy Full Moon of Appalachia
                        </h1>
                        <p className="text-pure-white/50">
                            March 2nd 2020{'   '}
                            <span className="text-pure-white">
                                {' '}
                                &ensp;by John Appleseed
                            </span>
                        </p>
                        <p className="text-pure-white/50">
                            The dissected plateau area, while not actually made
                            up of geological mountains, is popularly called
                            &quot;mountains&quot;, especially in eastern
                            Kentucky and West Virginia, and while the ridges are
                            not high, the terrain is extremely rugged.
                        </p>
                        <ArrowButton
                            value="Read the story"
                            variant="white"
                        />
                    </div>
                </div>
                {/* Stories object */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-4">
                    {storiesData.map(
                        ({ createdBy, date, images, title }, i) => (
                            <StoriesItem
                                key={i}
                                title={title}
                                images={images}
                                date={date}
                                createdBy={createdBy}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default StoriesHero
