import React from "react";
import Footer from "../elements/Footer";
import NetworkBar from "../elements/NetworkBar";

const Favorite =() =>{
    return (
        <div className="p-4 space-y-4 relative">
            <NetworkBar/>
            <div className="flex justify-between rows-start-2 row-span-1 my-4">
               <img src="/images/Search.png" alt="search bar" className="w-5"/>
               <p className="w-28 text-center font-bold text-black-font font-[Meriweather]">Favorites</p>
               <img src="/images/Cart.png" alt="a shopping cart" className="w-6"/>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <img src="/images/Table Set.png" alt="a coffee table set" className="rounded-lg h-36"/>
                <div className="w-28 font-[Nunito Sans] ">
                    <p className="font-semibold text-sm text-black3">Coffee Table</p>
                    <p className="font-bold text-black-font my-1.5">$50.00</p>
                </div>
                <div className="grid justify-items-end">
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                    <div className="bg-gray-4 w-9 h-9 grid justify-items-center rounded-lg">
                        <img src="/images/Black Shopping Bag.png" alt="a shopping bag" className="w-4 h-4 my-auto"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 gap-4">
                <img src="/images/Table Set.png" alt="a coffee table set" className="rounded-lg h-36"/>
                <div className="w-28 font-[Nunito Sans] ">
                    <p className="font-semibold text-sm text-black3">Coffee Table</p>
                    <p className="font-bold text-black-font my-1.5">$ 50.00</p>
                </div>
                <div className="grid justify-items-end">
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                    <div className="bg-gray-4 w-9 h-9 grid justify-items-center rounded-lg">
                        <img src="/images/Black Shopping Bag.png" alt="a shopping bag" className="w-4 h-4 my-auto"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 gap-4">
                <img src="/images/Coffee Chair.png" alt="a coffee chair" className="rounded-lg h-36"/>
                <div className="w-28 font-[Nunito Sans] ">
                    <p className="font-semibold text-sm text-black3">Coffee Chair</p>
                    <p className="font-bold text-black-font my-1.5">$ 20.00</p>
                </div>
                <div className="grid justify-items-end">
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                    <div className="bg-gray-4 w-9 h-9 grid justify-items-center rounded-lg">
                        <img src="/images/Black Shopping Bag.png" alt="a shopping bag" className="w-4 h-4 my-auto"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 gap-4">
                <img src="/images/Minimal Stand.png" alt="a stand" className="rounded-lg h-36"/>
                <div className="w-28 font-[Nunito Sans] ">
                    <p className="font-semibold text-sm text-black3">Minimal Stand</p>
                    <p className="font-bold text-black-font my-1.5">$ 25.00</p>
                </div>
                <div className="grid justify-items-end">
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                    <div className="bg-gray-4 w-9 h-9 grid justify-items-center rounded-lg">
                        <img src="/images/Black Shopping Bag.png" alt="a shopping bag" className="w-4 h-4 my-auto"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 gap-4">
                <img src="/images/Simple Desk.png" alt="a desk" className="rounded-lg h-36"/>
                <div className="w-28 font-[Nunito Sans] ">
                    <p className="font-semibold text-sm text-black3">Minimal Desk</p>
                    <p className="font-bold text-black-font my-1.5">$ 50.00</p>
                </div>
                <div className="grid justify-items-end">
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                    <div className="bg-gray-4 w-9 h-9 grid justify-items-center rounded-lg">
                        <img src="/images/Black Shopping Bag.png" alt="a shopping bag" className="w-4 h-4 my-auto"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <img src="/images/Lamp.png" alt="a lamp" className="rounded-lg h-36"/>
                <div className="w-28 font-[Nunito Sans] ">
                    <p className="font-semibold text-sm text-black3">Minimal Lamp</p>
                    <p className="font-bold text-black-font my-1.5">$ 12.00</p>
                </div>
                <div className="grid justify-items-end">
                    <div className="w-5 h-5 bg-white text-black border-2 border-black rounded-full text-center">
                        {/* <p className="w-2 h-2"> */}
                            x
                            {/* </p> */}
                    </div>
                    <div className="bg-gray-4 w-9 h-9 grid justify-items-center rounded-lg">
                        <img src="/images/Black Shopping Bag.png" alt="a shopping bag" className="w-4 h-4 my-auto"/>
                    </div>
                </div>
            </div>
            <button className="absolute bg-primary text-white bottom-16 w-80">Add all to my cart</button>
            <Footer/>
        </div>
    )
};

export default Favorite;