import React from "react";
import { Link } from "react-router-dom";
import Footer from "../elements/Footer";
import NetworkBar from "../elements/NetworkBar";

const Profile =() => {
    return (
        <div className="font-primary text-primary space-y-4">
            <NetworkBar/>
            <div className="flex gap-10  text-center px-4 text-black-font">
                    <img src="/images/Search.png" alt="search icon" className="w-4 h-4"/>
                <p className="w-2/3 font-bold font-[Merriweather]">Profile</p>
                <Link to={"/Home"}>
                    <img src="/images/Logout.png" alt="logout icon"/>
                </Link>
            </div>
            <div className="flex space-x-4 px-4">
                <img src="/images/Pham.png" alt="Pham's profile pic" className="w-20 h-20"/>
                <div className="space-y-1 my-auto">
                    <p className="text-xl font-bold text-black-font">Bruno Pharm</p>
                    <p className="text-grey text-sm">bruno203@gmail.com</p>
                </div>
            </div>
            <div className=" flex justify-between p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] mx-4 h-20">
                <div>
                    <p className="text-lg font-bold">My Orders</p>
                    <p className="text-grey text-xs">Already have 10 orders</p>
                </div>
                <Link to={"/Order"}>
                    <img src="/images/Forward.png" alt="front icon" className="w-1.5 h-3 mt-4"/>
                </Link>
            </div>
            <div className=" flex justify-between p-4 shadow-[0px_7px_40px_rgba(138,149,158,0.2)] mx-4 h-20">
                <div>
                    <p className="text-lg font-bold">Shipping Addresses</p>
                    <p className="text-grey text-xs">03 addresses</p>
                </div>
                <Link to={"/Shipping"}>
                    <img src="/images/Forward.png" alt="front icon" className="w-1.5 h-3 mt-4"/>
                </Link>
            </div>
            <div className=" flex justify-between p-4 shadow-[0px_7px_40px_rgba(138,149,158,0.2)] mx-4 h-20">
                <div>
                    <p className="text-lg font-bold">Payment Method</p>
                    <p className="text-grey text-xs">You have 2 cards</p>
                </div>
                <Link to={"/Payment"}>
                    <img src="/images/Forward.png" alt="front icon" className="w-1.5 h-3 mt-4"/>
                </Link>
            </div>
            <div className=" flex justify-between p-4 shadow-[0px_7px_40px_rgba(138,149,158,0.2)] mx-4 h-20">
                <div>
                    <p className="text-lg font-bold">My Reviews</p>
                    <p className="text-grey text-xs">Reviews for 2 items</p>
                </div>
                <Link to={"/Review"}>
                    <img src="/images/Forward.png" alt="front icon" className="w-1.5 h-3 mt-4"/>
                </Link>
            </div>
            <div className=" flex justify-between p-4 shadow-[0px_7px_40px_rgba(138,149,158,0.2)] mx-4 h-20">
                <div>
                    <p className="text-lg font-bold">Settings</p>
                    <p className="text-grey text-xs">Notification, Password, FAQ, Contact</p>
                </div>
                <Link to={"/Settings"}>
                    <img src="/images/Forward.png" alt="front icon" className="w-1.5 h-3 mt-4"/>
                </Link>
            </div>
            <Footer/>
        </div>
    )
};

export default Profile;