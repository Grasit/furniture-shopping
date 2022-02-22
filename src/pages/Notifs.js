import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Notifs =() => {
    return (
        <div className=" space-y-4 font-primary">
            <NetworkBar/>
            <div className="flex gap-10  text-center px-4">
                <Link to={"/Home"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Meriweather]">Notification</p>
            </div>
            <div className="bg-[#F5F5F5] flex  gap-4 h-24 px-4 py-2">
                <img src="/images/Minimal Stand.png" alt="a stand" className="w-16 h-16 rounded-lg"/>
                <div>
                    <p className="font-bold text-primary text-xs">Your order #123456789 has been confirmed</p>
                    <p className="text-[12px] text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </p>
                    <p className="text-success float-right text-sm">NEW!</p>
                </div>
            </div>
            <div className="flex  gap-4 h-24 px-4 py-2">
                <img src="/images/Lamp.png" alt="a lamp" className="w-16 h-16 rounded-lg"/>
                <div className="h-16 space-y-2">
                    <p className="font-bold text-primary text-xs">Your order #123456789 has been cancelled</p>
                    <p className="text-[12px] text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </p>
                </div>
            </div>
            <div className="bg-[#F5F5F5]  gap-4 h-24 px-4 py-2 space-y-2">
                <p className="font-bold text-primary text-xs">Discover hot sale furnitures this week.</p>
                <p className="text-[12px] text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </p>
                <p className="text-red float-right text-sm font-extrabold">HOT!</p>
            </div>
            <div className="bg-[#F5F5F5] flex  gap-4 h-24 px-4 py-2">
                <img src="/images/Table Set.png" alt="a coffee set" className="w-16 h-26 rounded-lg"/>
                <div className="h-16 space-y-2">
                    <p className="font-bold text-primary text-xs">Your order #123456789 has been shipped successfully</p>
                    <p className="text-[12px] text-grey">Please help us to confirm and rate your order to get 10% discount code for next order. </p>
                </div>
            </div>
            <div className=" flex  gap-4 h-24 px-4 py-2">
                <img src="/images/Table Set.png" alt="a coffee set" className="w-16 h-26 rounded-lg"/>
                <div className="h-16 space-y-2">
                    <p className="font-bold text-primary text-xs">Your order #123456789 has been confirmed</p>
                    <p className="text-[12px] text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </p>
                </div>
            </div>
            <div className="flex  gap-4 h-24 px-4 py-2">
                <img src="/images/Minimal Stand.png" alt="a coffee set" className="w-16 h-26 rounded-lg"/>
                <div className="h-16 space-y-2">
                    <p className="font-bold text-primary text-xs">Your order #123456789 has been confirmed</p>
                    <p className="text-[12px] text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </p>
                </div>
            </div>
            <div className=" flex  gap-4 h-24 px-4 py-2">
                <img src="/images/Minimal Stand.png" alt="a coffee set" className="w-16 h-26 rounded-lg"/>
                <div className="h-16 space-y-2">
                    <p className="font-bold text-primary text-xs">Your order #123456789 has been confirmed</p>
                    <p className="text-[12px] text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </p>
                </div>
            </div>
        </div>
    )
};

export default Notifs;