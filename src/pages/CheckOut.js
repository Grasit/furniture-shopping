import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const CheckOut =() => {
    return  (
        <div className=" p-4 space-y-4 font-primary">
            <NetworkBar/>
            <div className="flex gap-10  text-center">
                <Link to={"/Cart"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 text-black-font font-bold font-[Merriweather]">Check Out</p>
            </div>
            <div className="flex justify-between font-semibold text-lg text-grey-2">
                <p>Shipping Address</p>
                <img src="/images/Pen.png" alt="a pen icon" className="w-4 h-5"/>
            </div>
            <div className=" p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] rounded-lg">
                <p className="font-bold text-lg mb-2.5">Bruno Fernandes</p>
                <hr/>
                <p className="text-grey mt-2.5">25 rue Robert Latouche, Nice, 06200, Côte D'azur, France</p>
            </div>
            <div className="flex justify-between font-semibold text-lg text-grey-2">
                <p>Payment</p>
                <img src="/images/Pen.png" alt="a pen icon" className="w-4 h-5"/>
            </div>
            <div className="flex space-x-4 p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] rounded-lg">
                <div className="bg-white flex justify-center shadow-[0px_1px_25px_rgba(0,0,0,0.08)] w-16 h-9">
                    <img src="/images/mastercard.png" alt="a debit card" className="mx-auto my-auto "/>
                </div>
                <p className="text-primary font-semibold my-auto">**** **** **** 3947</p>
            </div>
            <div className="flex justify-between font-semibold text-lg text-grey-2">
                <p>Delivery Method</p>
                <img src="/images/Pen.png" alt="a pen icon" className="w-4 h-5"/>
            </div>
            <div className="flex space-x-4 p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] rounded-md">
                    <img src="/images/DHL Logo.png" alt="a debit card" className=" my-auto"/>
                <p className="text-primary font-bold my-auto">Fast (2-3 days)</p>
            </div>
            <div className="grid grid-cols-2 gap-48 content-between p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)]">
                <div className="text-lg text-grey space-y-4">
                    <p>Order:</p>
                    <p>Delivery:</p>
                    <p>Total:</p>
                </div>
                <div className="text-lg text-right text-primary font-semibold space-y-4">
                    <p>$95.00</p>
                    <p>$5.00</p>
                    <p>$100.00</p>
                </div>
            </div>
            <Link to={"/Congrats"}>
                <button className="mt-6 p-4 text-white bg-black rounded-lg w-full text-xl font-semibold uppercase">submit order</button>
            </Link>
        </div>
    )
};

export default CheckOut;