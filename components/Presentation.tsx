import Image from 'next/image'
import React from 'react'
import { presentationData } from '../public/assets/data/homePageData'
const Presentation = () => {
    return (
        <div className="w-full mt-[80px] my-[80px] sm:my-[120px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid xl:grid-cols-3 gap-[56px] sm:gap-[80px] xl:gap-[30px] px-[33px] sm:px-[155px] xl:px-[165px]">
                    {presentationData.map((el, i) => (
                        <div
                            key={i}
                            className="flex flex-col justify-center items-center text-center "
                        >
                            <div className="h-[50%]">
                                <Image
                                    src={el.image}
                                    alt="image"
                                />
                            </div>
                            <div className="h-[10%] flex justify-center items-center mt-[48px]">
                                <h5 className="text-[18px] leading-[25px] font-bold">
                                    {el.title}
                                </h5>
                            </div>
                            <div>
                                <p className="mt-[16px] text-pure-black/60 ">
                                    {el.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Presentation
