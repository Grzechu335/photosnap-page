import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ArrowButton from '../components/Shared/ArrowButton'
import StoriesHero from '../components/Story/StoriesHero'
import StoriesItem from '../components/Story/StoriesItem'
import { storiesData } from '../public/assets/data/homePageData'

const stories = () => {
    return (
        <div className="w-full mt-[72px]">
            <Head>
                <title>Stories</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <StoriesHero />
        </div>
    )
}

export default stories
