import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

type Props = {
    functionality: string
    plans: {
        basic: boolean
        pro: boolean
        business: boolean
    }
}

const FunctionalityItem = ({ functionality, plans }: Props) => {
    const plansArray = Object.entries(plans)
    return (
        <div className="grid grid-cols-9 sm:grid-cols-10 row-span-1 py-[23px] border-b border-b-light-gray">
            <div className="flex items-center justify-center sm:justify-start col-span-full sm:col-span-4">
                <h4 className="uppercase">{functionality}</h4>
            </div>
            {plansArray.map((plan, i) => {
                if (plan[1] === true)
                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center col-span-3 sm:col-span-2"
                        >
                            <p className="sm:hidden  text-[10px] leading-[13px] tracking-[1.37px] uppercase text-pure-black/50 mt-[16px]">
                                {plan[0]}
                            </p>
                            <AiOutlineCheck
                                size={25}
                                className="mt-[8px] sm:mt-0"
                            />
                        </div>
                    )
                else
                    return (
                        <div
                            key={i}
                            className="flex items-center justify-center col-span-3 sm:col-span-2"
                        >
                            <p className="sm:hidden mb-auto text-[10px] leading-[13px] tracking-[1.37px] uppercase text-pure-black/50 mt-[16px]">
                                {plan[0]}
                            </p>
                            {''}
                        </div>
                    )
            })}
        </div>
    )
}

export default FunctionalityItem
