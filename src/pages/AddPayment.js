import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const AddPayment =() => {
    return (
        <div className="p-4 space-y-4 font-primary">
            <NetworkBar/>
            <div className="flex gap-10  text-center">
                <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather] text-black-font">Add Payment Method</p>
            </div>
            <form className="space-y-4">
                <img src="/images/Payment card (2).png" alt="a debit card"/>
                <div className="bg-[#F5F5F5] flex flex-col p-4 rounded-[4px] space-y-2">
                    <label className="text-grey text-xs" for="fullName">Cardholder Name</label>
                    <input type={"text"} name="fullName" placeholder="Ex: Bruno Pharm" className="bg-[#F5F5F5] focus:outline-none text-[#B2B2B2]" />
                </div>
                <div className="flex flex-col p-4 rounded-[4px] space-y-2 border ">
                    <label className="text-grey text-xs" for="number">Card Number</label>
                    <input type={"text"} name="number" placeholder="**** **** **** 3456" className="focus:outline-none text-primary font-semibold" />
                </div>
                <div className="flex space-x-6">
                    <div className="bg-[#F5F5F5] flex flex-col p-4 rounded-[4px] space-y-2 w-40">
                        <label className="text-grey text-xs" for="cvv">CVV</label>
                        <input type={"text"} name="cvv" placeholder="Ex: 123" className="bg-[#F5F5F5]"/>
                    </div>
                    <div className="border flex flex-col p-4 rounded-[4px] space-y-2 w-40">
                        <label className="text-grey text-xs" for="date">Expiration Date</label>
                        <input type={"text"} name="date" placeholder="03/2022" className="text-primary font-semibold"/>
                    </div>
                </div>
                <input type={"submit"} value="ADD NEW CARD" className="p-4 bg-primary text-white w-full text-xl rounded-lg font-semibold shadow-[0px_10px_20px_rgba(48,48,48,0.25)]"/>
            </form>
        </div>
    )
};

export default AddPayment;