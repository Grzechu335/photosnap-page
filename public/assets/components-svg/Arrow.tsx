import * as React from 'react'
import { SVGProps } from 'react'

const Arrow = ({ fill, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={43}
        height={14}
        {...props}
    >
        <path
            d="M0 7h41.864m-6.436-6 6 6-6 6"
            fill={fill}
            fillRule="evenodd"
            stroke={fill}
        />
    </svg>
)

export default Arrow
