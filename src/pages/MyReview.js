import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const MyReview =() => {
    return (
        <div className="p-4 space-y-4 font-primary">
            <NetworkBar/>
            <div className="flex gap-10  text-center text-black-font">
            <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="logout icon"/>
                </Link>  
                <p className="w-2/3 font-bold font-[Merriweather]">My Reviews</p>
               
                <img src="/images/Search.png" alt="search icon" className="w-4 h-4"/>
            </div>
            <ul className="space-y-4">
                <li className="shadow-[0px_8px_40px_rgba(138,149,158,0.2)] p-4 space-y-4 rounded-lg">
                    <div className="flex space-x-10">
                        <img src="/images/Table Set.png" alt="a coffee table" className="rounded-lg"/>
                        <div  className="space-y-2">
                            <p className="text-black3 font-semibold">Coffee Table</p>
                            <p className="font-extrabold text-primary">$50. 00</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                        </div>
                        <p>20/03/2020</p>
                    </div>
                    <p className="text-sm text-primary">Nice Furniture with good delivery. The delivery time is very fast. 
                       Then products look like exactly the picture in the app.
                        Besides, color is also the same and quality is very good despite very cheap price
                    </p>
                </li>
                <li className="shadow-[0px_8px_40px_rgba(138,149,158,0.2)] p-4 space-y-4 rounded-lg">
                    <div className="flex space-x-10">
                        <img src="/images/Table Set.png" alt="a coffee table" className="rounded-lg"/>
                        <div  className="space-y-2">
                            <p className="text-black3 font-semibold">Coffee Table</p>
                            <p className="font-extrabold text-primary">$50. 00</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                        </div>
                        <p>20/03/2020</p>
                    </div>
                    <p className="text-sm text-primary">Nice Furniture with good delivery. The delivery time is very fast. 
                       Then products look like exactly the picture in the app.
                        Besides, color is also the same and quality is very good despite very cheap price
                    </p>
                </li>
                <li className="shadow-[0px_8px_40px_rgba(138,149,158,0.2)] p-4 space-y-4 rounded-lg">
                    <div className="flex space-x-10">
                        <img src="/images/Table Set.png" alt="a coffee table" className="rounded-lg"/>
                        <div  className="space-y-2">
                            <p className="text-black3 font-semibold">Coffee Table</p>
                            <p className="font-extrabold text-primary">$50. 00</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                            <img src="/images/Yellow Star.png" alt="ratings"/>
                        </div>
                        <p>20/03/2020</p>
                    </div>
                    <p className="text-sm text-primary">Nice Furniture with good delivery. The delivery time is very fast. 
                       Then products look like exactly the picture in the app.
                        Besides, color is also the same and quality is very good despite very cheap price
                    </p>
                </li>
            </ul>
        </div>
    )
};

export default MyReview;