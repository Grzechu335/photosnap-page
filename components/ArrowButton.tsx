import React from 'react'
import Arrow from '../public/assets/components-svg/Arrow'

type Props = {
    value: string
    variant: VariantEnum
    expanse?: boolean
}

type VariantEnum = 'black' | 'white'

const ArrowButton = ({ value, variant, expanse = false }: Props) => {
    return (
        <div
            className={`${
                expanse ? 'justify-between w-full' : 'space-x-5'
            } flex items-center`}
        >
            <button
                className={`uppercase ${
                    variant === 'white' ? 'text-pure-white' : 'text-pure-black'
                } `}
            >
                {value}
            </button>
            <Arrow fill={`${variant === 'white' ? '#fff' : '#000'}`} />
        </div>
    )
}

export default ArrowButton
