import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";
import ShoppingBag from "../elements/ShoppingBag";

const Home = () => {
    return (
       <div className="grid grid-rows-[1fr 1fr 1fr 6fr 1fr] p-4 gap-5 font-primary">
           <NetworkBar/>
           <div className="flex justify-between rows-start-2 row-span-1">
               <img src="/images/Search.png" alt="seacrh bar" className="w-5 h-5 my-auto"/>
               <p className="w-28 text-center text-lg text-[#909090] font-[Gelatio]">Make Home <span className="font-bold uppercase text-black-font">beautiful</span>
               </p>
               <Link to={"/Cart"}>
                    <img src="/images/Cart.png" alt="a shopping cart" className="w-6 h-6 mt-4"/>
                </Link>
            </div>
            <div className="flex row-start-3 row-span-1 justify-between text-[#999999] text-sm text-center">
                <div className="flex flex-col">
                    <div className="bg-black-font rounded-xl w-11 h-11 flex justify-center">
                        <img src="/images/Star.png" alt="a star" className=" my-auto"/>
                    </div>
                    <p className="text-primary font-semibold">
                        Popular
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="bg-[#F5F5F5] rounded-xl w-11 h-11 flex justify-center">
                        <img src="/images/Chair.png" alt="a chair" className=" my-auto"/>
                    </div>
                    <p>
                            Chair
                        </p>
                </div>
                <div className="flex flex-col">
                    <div className="bg-[#F5F5F5] rounded-xl w-11 h-11 flex justify-center">
                        <img src="/images/Table.png" alt="a table" className="my-auto"/>
                    </div>
                    <p>
                            Table
                        </p>
                </div>
                <div className="flex flex-col">
                    <div className="bg-[#F5F5F5] rounded-xl w-11 h-11 flex justify-center">
                        <img src="/images/Armchair.png" alt="an armchair" className="my-auto"/>
                    </div>
                    <p>
                            Armchair
                    </p>
                </div>
                <div className="flex flex-col text-center">
                    <div className="bg-[#F5F5F5] rounded-xl w-11 h-11 flex justify-center">
                        <img src="/images/Bed.png" alt="a bed" className="my-auto"/>
                    </div>
                    <p>
                            Bed
                        </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-black3">
                <div>
                    <div className="relative bg-[#C4C4C4] rounded-xl w-40">
                        <img src="/images/Lamp.png" alt="a black simple lamp" className="w-40 rounded-md"/>
                        <ShoppingBag/>
                    </div>
                    <p className="my-2">Black Simple Lamp</p>
                    <p className="font-bold text-black-font">$ 12.00</p>
                </div>
                <div>
                    <Link to={"/Product"}>
                        <div className="relative">
                            <img src="/images/Minimal Stand.png" alt=" a stand" className="rounded-md"/>
                            <ShoppingBag/>
                        </div>
                    </Link>
                    <p className="my-2">Minimal Stand</p>
                    <p className="font-bold text-black-font">$ 25.00</p>
                </div>
                <div>
                    <div className="relative">
                        <img src="/images/Coffee Chair.png" alt="a coffee chair" className="rounded-md"/>
                        <ShoppingBag/>
                    </div>
                    <p className="my-2">Coffee Chair</p>
                    <p className="font-bold text-black-font">$ 20.00</p>
                </div>
                <div >
                    <div className="relative">
                        <img src="/images/Simple Desk.png" alt="a simple deak" className="rounded-md"/>
                        <ShoppingBag/>
                    </div>
                    <p className="my-2">Simple Desk</p>
                    <p className="font-bold text-black-font">$ 50.00</p>
                </div>
            </div>
            <div className="flex justify-around">
                <img src="/images/Home.png" alt=" a house" className="w- h-"/>
                <Link to={"/Favorite"}>
                    <img src="/images/Marker.png" alt="a marker" className="w- h-"/>
                </Link>
                <Link to={"/Notifs"}>
                    <img src="/images/Bell.png" alt="a bell" className="w- h-"/>
                </Link>
                <Link to={"/Profile"}>
                    <img src="/images/Person.png" alt="a person icon" className="w- h-"/>
                </Link>
            </div>
       </div>
    )
};

export default Home;
