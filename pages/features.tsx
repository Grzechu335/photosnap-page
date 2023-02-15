import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ArrowButton from '../components/Shared/ArrowButton'
import BetaSection from '../components/Features/BetaSection'
import FeaturesHero from '../components/Features/FeaturesHero'
import FeaturesPresentation from '../components/Features/FeaturesPresentation'
import HeroComponent from '../components/Shared/HeroItem/HeroComponent'
import PresentationItem from '../components/Shared/PresentationItem'
import {
    featuresData,
    presentationFeaturesData,
} from '../public/assets/data/featuresData'

const features = () => {
    return (
        <div className="w-full mt-[72px]">
            <Head>
                <title>Features</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <FeaturesHero />
            <FeaturesPresentation />
            <BetaSection />
        </div>
    )
}

export default features