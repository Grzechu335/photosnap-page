import React from 'react'
import ArrowButton from '../ArrowButton'

type Props = {
    title: string
    text: string
    buttonText: string
    variant: HeroVariantEnum
}

type HeroVariantEnum = 'black' | 'white'

const HeroTextItem = ({ title, text, variant, buttonText }: Props) => {
    return (
        <>
            <h2>{title}</h2>
            <p
                className={`${
                    variant === 'black'
                        ? 'text-light-gray/50'
                        : 'text-pure-black/50'
                } mt-6`}
            >
                {text}
            </p>
            <div className="mt-12">
                <ArrowButton
                    value={buttonText}
                    variant={`${variant === 'black' ? 'white' : 'black'}`}
                />
            </div>
        </>
    )
}

export default HeroTextItem
