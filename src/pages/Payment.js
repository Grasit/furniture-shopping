import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Payment =() => {
    return (
        <div className="space-y-4 font-primary p-4">
            <NetworkBar/>
            <div className="flex gap-10  text-center">
                <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather]">Payment Method</p>
            </div>
            <img src="/images/Payment card.png" alt="a debit card"/>
            <div className="flex space-x-6 text-black text-sm">
                <input type={"checkbox"} className="my-auto w-5 h-5 bg-primary border-2 rounded-md"/>
                <p>Use as the shipping address</p>
            </div>
            <img src="/images/Payment card (1).png" alt="a debit card" className="w-80 mx-auto"/>
            <div className="flex space-x-6 text-black text-sm">
                <input type={"checkbox"} className="my-auto w-5 h-5 bg-primary border-2 rounded-md"/>
                <p>Use as the shipping address</p>
            </div>
            <Link to={"/AddPayment"}>
                <div className="w-14 h-14 rounded-full shadow-[0px_2px_60px_rgba(138,149,158,0.3)] ml-64 mt-32 flex justify-center text-center">
                    <p className="my-auto w-4 h-4">+</p>
                </div>
            </Link>
        </div>
    )
};

export default Payment;