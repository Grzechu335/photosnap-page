import React from 'react'
import { plansData } from '../../public/assets/data/pricingData'
import PlanItemDesktopAndMobile from './PlanItemDesktopAndMobile'
import Switch from 'react-switch'
import PlanItemTablets from './PlanItemTablets'

interface Props {
    isYearly: boolean
    billingToggler: () => void
}

const Plans = ({ isYearly, billingToggler }: Props) => {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center max-w-screen-xl mx-auto">
                <label className="flex items-center xl:mb-[48px] mt-[120px] space-x-[32px]">
                    <span>Monthly</span>
                    <Switch
                        onChange={billingToggler}
                        checked={isYearly}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        width={64}
                        height={32}
                        offColor="#DFDFDF"
                        onColor="#000"
                        offHandleColor="#000"
                        onHandleColor="#DFDFDF"
                        handleDiameter={24}
                    />
                    <span>Yearly</span>
                </label>
                {/* Desktop & Mobile Plans */}
                <div className="grid sm:hidden xl:grid xl:grid-cols-3 gap-[40px] xl:px-[165px] px-[29px]">
                    {plansData.map(({ plan, description, price }, i) => (
                        <PlanItemDesktopAndMobile
                            key={i}
                            renderNumber={i}
                            price={isYearly ? price.yearly : price.monthly}
                            description={description}
                            plan={plan}
                        />
                    ))}
                </div>
                <div className="hidden sm:grid xl:hidden">
                    {plansData.map(({ plan, description, price }, i) => (
                        <PlanItemTablets
                            key={i}
                            renderNumber={i}
                            price={isYearly ? price.yearly : price.monthly}
                            description={description}
                            plan={plan}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans
