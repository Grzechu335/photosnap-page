import React from 'react'
import Arrow from '../../public/assets/components-svg/Arrow'

type Props = {
    value: string | undefined
    variant: VariantEnum
    expanse?: boolean
}

type VariantEnum = 'black' | 'white'

const ArrowButton = ({ value, variant, expanse = false }: Props) => {
    return (
        <div
            className={`${expanse ? 'justify-between w-full' : 'space-x-5'} ${
                !value ? 'hidden' : 'flex'
            } items-center`}
        >
            <button
                className={`uppercase ${
                    variant === 'white' ? 'text-pure-white' : 'text-pure-black'
                } `}
            >
                {value}
            </button>
            <div className={`${!value ? 'hidden' : 'block'}`}>
                <Arrow fill={`${variant === 'white' ? '#fff' : '#000'}`} />
            </div>
        </div>
    )
}

export default ArrowButton
