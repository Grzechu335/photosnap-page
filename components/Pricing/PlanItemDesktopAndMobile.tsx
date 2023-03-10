import React from 'react'

type Props = {
    plan: string
    description: string
    price: string
    renderNumber: number
}

const PlanItemDesktopAndMobile = ({
    plan,
    description,
    price,
    renderNumber,
}: Props) => {
    return (
        <div
            className={`${
                renderNumber === 1
                    ? 'bg-pure-black text-pure-white my-0'
                    : 'bg-[#F5F5F5] text-pure-black my-[30px]'
            } p-[40px] text-center flex flex-col justify-center relative shadow-lg`}
        >
            {renderNumber === 1 && (
                <span className="absolute  block left-0 top-0 my-auto w-full h-[6px] main-accent-bg z-20"></span>
            )}
            <div>
                <h3>{plan}</h3>
                <p
                    className={`${
                        renderNumber === 1
                            ? 'text-pure-white/60'
                            : 'text-pure-black/60'
                    } mt-[18px]`}
                >
                    {description}
                </p>
                <div className="mt-[40px]">
                    <h2>${price}</h2>
                    <span
                        className={`${
                            renderNumber === 1
                                ? 'text-pure-white/60'
                                : 'text-pure-black/60'
                        }`}
                    >
                        per month
                    </span>
                </div>
                <button
                    className={`${
                        renderNumber === 1
                            ? 'button-rect-white'
                            : 'button-rect-black'
                    } mt-[40px] w-full`}
                >
                    pick plan
                </button>
            </div>
        </div>
    )
}

export default PlanItemDesktopAndMobile
