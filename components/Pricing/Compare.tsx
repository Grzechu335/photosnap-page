import React from 'react'
import { compareData } from '../../public/assets/data/pricingData.js'
import FunctionalityItem from './FunctionalityItem'

const Compare = () => {
    return (
        <div className="w-full mt-[160px] my-[64px] sm:my-[112px] xl:my-[160px]">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2>Compare</h2>
                <div className="grid-rows-10 sm:px-[39px] xl:px-[355px] mt-[56px]">
                    <div className="grid grid-cols-10 row-span-1 py-[23px] border-b border-b-pure-black uppercase">
                        <div className="flex col-span-full sm:col-span-4">
                            <h4>The Features</h4>
                        </div>
                        <h4 className="hidden col-span-2 sm:inline">Basic</h4>
                        <h4 className="hidden col-span-2 sm:inline">Pro</h4>
                        <h4 className="hidden col-span-2 sm:inline">
                            Business
                        </h4>
                    </div>
                    {compareData.map(({ functionality, plans }, i) => (
                        <FunctionalityItem
                            key={i}
                            functionality={functionality}
                            plans={plans}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Compare
