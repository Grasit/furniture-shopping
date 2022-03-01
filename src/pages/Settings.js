import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Settings =() => {
    return (
         <div className="p-4 font-primary space-y-4">
             <NetworkBar/>
            <div className="flex gap-10  text-center">
                <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather] text-black-font">Setting</p>
            </div>
            <div className="flex justify-between font-semibold text-lg text-[#909191]">
                <p>Personal Information</p>
                <img src="/images/Pen.png" alt="a pen icon" className="w-4 h-5"/>
            </div>
            <div className=" p-4 space-y-2 shadow-[0px_2px_40px_rgba(138,149,158,0.2)] rounded">
                <p className="text-xs text-grey">Name</p>
                <p className="text-primary font-semibold text-sm">Bruno Pham</p>
            </div>
            <div className=" p-4 space-y-2 shadow-[0px_2px_40px_rgba(138,149,158,0.2)] rounded">
                <p className="text-grey text-xs">Email</p>
                <p className="text-primary font-semibold text-sm">brunopham@gmail.com</p>
            </div>
            <div className="flex justify-between font-semibold text-[#909191]">
                <p>Password</p>
                <img src="/images/Pen.png" alt="a pen icon" className="w-4 h-5"/>
            </div>
            <div className="p-4 space-y-2 shadow-[0px_2px_40px_rgba(138,149,158,0.2)]">
                <p className="text-xs text-grey">Name</p>
                <p className="text-primary font-semibold text-sm">*************</p>
            </div>
            <p className="text-[#909191] font-semibold">Notifications</p>
            <div className=" p-4 space-y-2 flex justify-between shadow-[0px_2px_40px_rgba(138,149,158,0.2)] rounded">
                <p className="text-primary font-semibold">Sales</p>
                <input type={"checkbox"}/>
            </div>
            <div className="p-4 space-y-2 flex justify-between shadow-[0px_2px_40px_rgba(138,149,158,0.2)] rounded">
                <p className="text-primary font-semibold">New Arrivals</p>
                <input type={"checkbox"}/>
            </div>
            <div className="p-4 space-y-2 flex justify-between shadow-[0px_2px_40px_rgba(138,149,158,0.2)] rounded">
                <p className="text-primary font-semibold">Delivery Status Changes</p>
                <input type={"checkbox"}/>
            </div>
            <p className="text-[#909191] font-semibold">Help Center</p>
            <div className=" p-4 space-y-2 flex justify-between shadow-[0px_7px_40px_rgba(138,149,158,0.2)] rounded">
                <p className="text-primary font-semibold">FAQ</p>
                <img src="/images/Forward.png" alt="front icon"/>
            </div>
         </div>
    )
};

export default Settings;