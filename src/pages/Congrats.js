import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Congrats =() => {
    return (
        <div className="p-4 font-primary">
            <NetworkBar/>
            <p className="font-[Merriweather] text-4xl font-bold text-black-font text-center mt-24">SUCCESS!</p>
            <div className="relative ml-8">
                <img src="/images/Congrats bg.png" alt="a background" className="relative top-16 w-64 ml-2"/>
                <img src="/images/Congrats.png" alt="a table set" className="absolute ml-8 top-20"/>
                <img src="/images/Check Mark.png" alt="a check mark" className="absolute top-[17rem] left-[7rem] w-10 h-10"/>
            </div>
            <p className="text-lg text-black3 mt-28 w-[18rem] mx-auto">Your order will be delivered soon.Thank you for choosing our app!
            </p>
            <Link to={""}>
                <button className="p-4 text-white bg-black rounded-lg w-full text-xl font-semibold my-4 shadow-[0px_10px_20px_rgba(48,48,48,0.25)]">Track your orders</button>
            </Link>
            <Link to={"/Home"}>
                <button className="p-4 border border-black text-black bg-white rounded-lg w-full text-lg font-semibold uppercase ">back to home</button>
            </Link>
        </div>
    )
};

export default Congrats;