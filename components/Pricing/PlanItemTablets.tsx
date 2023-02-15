import React from 'react'

type Props = {
    plan: string
    description: string
    price: string
    renderNumber: number
}

const PlanItemTablets = ({ plan, description, price, renderNumber }: Props) => {
    return (
        <div
            className={`${
                renderNumber === 1
                    ? 'bg-pure-black text-pure-white my-0'
                    : 'bg-light-gray text-pure-black my-[30px]'
            } p-[40px] mx-[40px] grid grid-cols-2 relative`}
        >
            {renderNumber === 1 && (
                <span className="absolute xl:hidden block left-0 top-0 my-auto w-full h-[6px] main-accent-bg z-20"></span>
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

            <div className="flex justify-end">
                <div className="flex flex-col items-end">
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
            </div>
        </div>
    )
}

export default PlanItemTablets
