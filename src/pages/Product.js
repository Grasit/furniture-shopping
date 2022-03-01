import React from "react";
import { Link } from "react-router-dom";

const Product =() => {
    return (
        <div className="relative p-4 font-[Nunito Sans]">
                <div className="relative w-full">
                        <div className="flex flex-row justify-between row-start-1 row-span-1 absolute w-full my-4">
                                <p className="text-md text-black font-['SF Pro Text'] w-12">
                                    9:41
                                </p>
                            <div className="flex flex-row space-x-2 w-16">
                                <img src="/images/Combined Shape.png" alt="network bar" className="w-4 h-3"/>
                                <img src="/images/Wi-Fi.png" alt=" wi-fi bar" className="w-3 h-3"/>
                                <img src="/images/Battery.png" alt="battery" className="w-4 h-3"/>
                            </div>
                        </div>
            
                    <img src="/images/Minimal Stand.png" alt=" a stand" className="w-80 ml-10 object-cover rounded-bl-[40px]"/>
                </div>
                <Link to={"/Home"}>
                    <div className="absolute top-16 w-10 h-10 rounded-lg bg-white ml-6 flex justify-center shadow-[0px_4px_40px_rgba(138,149,158,0.2)]">
                    <img src="/images/Back Container.png" alt="back icon" className="mx-auto my-auto"/>
                    </div>
                </Link>
                <div className="w-16 h-48 bg-white rounded-[40px] absolute top-32 flex flex-col items-center justify-around ml-2 shadow-[0px_4px_40px_rgba(138,149,158,0.2)]">
                    <div className="w-8 h-8 rounded-full border-4 border-[#909090]"></div>
                    <div className="w-8 h-8 rounded-full border-4 bg-[#B4916C] border-[#F0F0F0]"></div>
                    <div className="w-8 h-8 rounded-full border-4 bg-[#E4CBAD] border-[#F0F0F0]"></div>
                </div>
                <p className="text-2xl font-medium font-[Gelasio] my-4">Minimal Stand</p>
                <div className="flex justify-between">
                    <p className="text-3xl font-bold">$ 50</p>
                    <div className="flex justify-between w-1/2">
                        <div className="bg-gray-5 text-black w-7 h-7 rounded-md text-center">+</div>
                        <p>01</p>
                        <div className="bg-gray-5 text-black w-7 h-7 rounded-md text-center">-</div>
                    </div>
                </div>
                <div className="flex gap-4 my-4 font-[#808080]">
                    <img src="/images/Yellow Star.png" alt="a star" className="bg-yellow"/>
                    <p className="text-lg font-semibold">4.5</p>
                    <Link to={"/Review"}>
                        <p>(50 reviews)</p>
                    </Link>
                </div>
                <p className="my-4 text-sm text-black3 font-light leading-5 tracking-wider">Minimal Stand is made of by natural wood. 
                    The design that is very simple and minimal. 
                    This is truly one of the best furnitures in any family for now. 
                    With 3 different colors, you can easily select the best match for your home.
                </p>
                <div className="flex justify-between">
                    <div className="bg-[#F5F5F5] rounded-xl w-14 h-14 flex justify-center">
                        <img src="/images/Marker.png" alt="a marker" className="w-4 h-5 my-auto"/>
                    </div>
                    <button className="bg-primary text-white text-center w-64 rounded-xl font-semibold text-lg">
                        Add to Cart
                    </button>
                </div>
        </div>
    )
}

export default Product;