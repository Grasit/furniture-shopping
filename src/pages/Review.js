import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Review =() => {
    return(
        <div className="space-y-4 font-primary">
            <NetworkBar/>
            <div className="flex gap-10  text-center px-4">
                <Link to={"/Product"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather]">Rating $ Review</p>
            </div>
            <div className="flex gap-4 px-4">
                <img src="/images/Minimal Stand.png" alt="a stand" className="w-24 h-full rounded-lg"/>
                <div className="space-y-4 text-black-font">
                    <p className="text-primary">Minimal Stand</p>
                    <div className="flex gap-6">
                        <img src="/images/Yellow Star.png" alt="a star" className="w-5 h-5" />
                        <p className="text-2xl font-bold">4.5</p>
                    </div>
                    <p className="text-lg">10 reviews</p>
                </div>
            </div>
            <hr/>
            <div className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] m-4 relative">
                <img src="/images/Bruno.png" alt="bruno's profile pic" className="absolute ml-32 -top-4"/>
                    <p className="my-4">
                        <span className="text-sm font-semibold text-primary">Bruno Fernandes</span>
                        <span className="ml-32 text-grey text-xs">20/03/2020</span>
                    </p>
                <div className="flex gap-2">
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                </div>
                <p className="text-primary text-sm mt-4">Nice Furniture with good delivery. The delivery time is very fast. 
                    Then products look like exactly the picture in the app.
                    Besides, color is also the same and quality is very good despite very cheap price.
                </p>
            </div>
            <hr/>
            <div className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] m-4 relative">
                <img src="/images/Tracy.png" alt="bruno's profile pic" className="absolute ml-32 -top-4"/>
                    <p className="my-4">
                        <span className="text-sm font-semibold text-primary">Tracy Mosby</span>
                        <span className="ml-32 text-grey text-xs">20/03/2020</span>
                    </p>
                <div className="flex gap-2">
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                    <img src="/images/Yellow Star.png" alt="five stars"/>
                </div>
                <p className="text-primary text-sm mt-4">Nice Furniture with good delivery. The delivery time is very fast. 
                    Then products look like exactly the picture in the app.
                    Besides, color is also the same and quality is very good despite very cheap price.
                </p>
            </div>
            <Link to={"/Home"}>
                <button className="p-4 text-white w-80 ml-8 my-4 mr-4 bg-black rounded-lg text-lg font-semibold m-4">Write a review</button>
            </Link>
        </div>
    )
};

export default Review;