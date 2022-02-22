import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Cart =() => {
    return (
            <div className="p-4 space-y-4 relative font-primary">
                <NetworkBar/>
                <div className="flex gap-10  text-center">
                    <Link to={"/Home"}>
                        <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                    </Link>
                    <p className="w-2/3 font-bold font-[Meriweather]">My Cart</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <img src="/images/Minimal Stand.png" alt="a stand" className="rounded-lg h-36"/>
                    <div className="grid grid-rows-3">
                        <p className="font-semibold text-sm text-disabled mt-1">Minimal Stand</p>
                        <p className="font-bold text-black-font">$ 25.00</p>
                        <div className="grid grid-flow-col self-end">
                            <div className="bg-gray-4 text-black w-7 h-7 rounded-md text-center">+</div>
                            <p className="text-primary text-lg font-semibold">01</p>
                            <div className="bg-gray-4 text-black w-7 h-7 rounded-md text-center">-</div>
                        </div>
                    </div>
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center ml-20 mt-1">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                </div>
                <hr/>
                <div className="grid grid-cols-3 gap-4">
                    <img src="/images/Table Set.png" alt="a coffee table" className="rounded-lg h-36"/>
                    <div className="grid grid-rows-3">
                        <p className="font-semibold text-sm text-disabled mt-1">Coffee Table</p>
                        <p className="font-bold text-black-font">$ 20.00</p>
                        <div className="grid grid-flow-col self-end">
                            <div className="bg-gray-4 text-black w-7 h-7 rounded-md text-center">+</div>
                            <p className=" text-primary text-lg font-semibold">01</p>
                            <div className="bg-gray-4 text-black w-7 h-7 rounded-md text-center">-</div>
                        </div>
                    </div>
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center ml-20 mt-1">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                </div>
                <hr/>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <img src="/images/Simple Desk.png" alt="a desk" className="rounded-lg h-36"/>
                    <div className="grid grid-rows-3">
                        <p className="font-semibold text-sm text-disabled mt-1">Minimal Desk</p>
                        <p className="font-bold text-black-font">$ 50.00</p>
                        <div className="grid grid-flow-col self-end">
                            <div className="bg-gray-4 text-black w-7 h-7 rounded-md text-center">+</div>
                            <p className="text-primary text-lg font-semibold">01</p>
                            <div className="bg-gray-4 text-black w-7 h-7 rounded-md text-center">-</div>
                        </div>
                    </div>
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center ml-20 mt-1">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                </div>
                <div className="relative flex h-11">
                    <label className="absolute mt-2 ml-4 text-base text-[#999999]">Enter Promo Code Here</label>
                    <input type={"text"} name={"promo"} className="p-4 outline-none w-full shadow-[0px_2px_20px_rgba(138,149,158,0.12)]"/>
                    <div className="w-11 h-full rounded-lg bg-black flex justify-center ">
                        <img src="/images/Front Container.png" alt="a front icon" className="mx-auto my-auto"/>
                    </div>
                </div>

            <div className="p-4  font-bold text-lg">
                <span className="text-grey">Total:</span>
                <span className="float-right text-black-font">$95. 00</span>
            </div>
            <Link to={"/CheckOut"}>
                <button className="p-4 text-white bg-black rounded-lg w-full text-lg font-semibold">Check out</button>
            </Link>
            </div>
    )
};

export default Cart;