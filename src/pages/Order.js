import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../elements/Footer";
import NetworkBar from "../elements/NetworkBar";

const Order =() => {
    const [activeTab, setActiveTab] = useState("delivered");
    return (
        <div className="font-primary space-y-4">
            <NetworkBar/>
            <div className="flex gap-10  text-center px-4">
                <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather]">My Order</p>
            </div>
            <ul className="flex justify-between text-lg p-4 cursor-pointer">
                <li onClick={() => setActiveTab('delivered')}
                    className={(activeTab === 'delivered' ? 'nav-active' : 'nav-inactive') + ' mx-3'}>Delivered</li>
                <li  onClick={() => setActiveTab('processing')}
                    className={(activeTab === 'processing' ? 'nav-active' : 'nav-inactive') + ' mx-3'}>Processing</li>
                <li  onClick={() => setActiveTab('cancelled')}
                    className={(activeTab === 'cancelled' ? 'nav-active' : 'nav-inactive') + ' mx-3'}>Cancelled</li>
            </ul>
            { activeTab === "delivered" && 
                <ul className="space-y-6">
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No138562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No132562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                </ul>
            }
            { activeTab === "processing" && 
                <ul className="space-y-6">
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                </ul>
            }
            { activeTab === "cancelled" && 
                <ul className="space-y-6">
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                    <li className="p-4 mx-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                        <p className="space-x-20">
                            <span className="text-semibold ">Order No238562312</span>
                            <span>20/03/2020</span>
                        </p>
                        <hr/>
                        <p className="space-x-20">
                            <span>Quantity : <span className="font-semibold">03</span></span>
                            <span>Total Amount: <span className="font-semibold">$150</span></span>
                        </p>
                        <div className="flex justify-between relative">
                            <div className="bg-black text-white text-lg px-4 py-2 w-32 rounded-lg text-center font-semibold ">
                                Detail
                            </div>
                            <p className="text-lg text-success my-auto mx-0">Delivered</p>
                        </div>
                    </li>
                </ul>
            }
            <Footer/>
        </div>
    )
};

export default Order;