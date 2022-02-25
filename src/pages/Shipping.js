import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";


const Shipping =() => {
    return (
        <div className="p-4 space-y-4 relative font-primary">
             <NetworkBar/>
            <div className="flex gap-10  text-center">
                <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather]">Shipping address</p>
            </div>
            <div className="flex space-x-6">
                <input type={"checkbox"} className="my-auto w-5 h-5 bg-primary"/>
                <p>Use as the shipping address</p>
            </div>
            <div className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                <div className="flex justify-between">
                    <p className="font-bold text-lg  ">Bruno Fernandes</p>
                    <img src="/images/Pen.png" alt="a pen" className="w-4 h-5"/>
                </div>
                <hr/>
                <p className="text-grey">
                    25 rue Robert Latouche, Nice, 06200, Côte D'azur, France
                </p>
            </div>
            <div className="flex space-x-6 text-disabled">
                <input type={"checkbox"} className="my-auto w-5 h-5 bg-primary"/>
                <p>Use as the shipping address</p>
            </div>
            <div className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                <div className="flex justify-between">
                    <p className="font-bold text-lg  ">Bruno Fernandes</p>
                    <img src="/images/Pen.png" alt="a pen" className="w-4 h-5"/>
                </div>
                <hr/>
                <p className="text-grey">
                    25 rue Robert Latouche, Nice, 06200, Côte D'azur, France
                </p>
            </div>
            <div className="flex space-x-6 text-disabled">
                <input type={"checkbox"} className="my-auto w-5 h-5 bg-primary border-2 rounded-md"/>
                <p>Use as the shipping address</p>
            </div>
            <div className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] space-y-4">
                <div className="flex justify-between">
                    <p className="font-bold text-lg  ">Bruno Fernandes</p>
                    <img src="/images/Pen.png" alt="a pen" className="w-4 h-5"/>
                </div>
                <hr/>
                <p className="text-grey">
                    25 rue Robert Latouche, Nice, 06200, Côte D'azur, France
                </p>
            </div>
            <div className="w-14 h-14 rounded-full shadow-[0px_2px_60px_rgba(138,149,158,0.3)] ml-72 mt-20 flex justify-center text-center">
                <p className="my-auto w-4 h-4">+</p>
            </div>
        </div>
    )
};

export default Shipping;