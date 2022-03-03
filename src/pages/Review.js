import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const Review =() => {
    return(
        <div className="space-y-4 font-primary text-primary relative">
            <NetworkBar/>
            <div className="flex gap-10  text-center px-5">
                <Link to={"/Product"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 text-black-font font-bold font-[Merriweather]">Rating $ Review</p>
            </div>
            <div className="flex gap-4 px-5 mb-5">
                <img src="/images/Minimal Stand.png" alt="a stand" className="w-24 h-24 rounded-lg"/>
                <div className="space-y-2 text-black-font">
                    <p>Minimal Stand</p>
                    <div className="flex gap-6">
                        <img src="/images/Yellow Star.png" alt="a star" className="my-auto" />
                        <p className="text-2xl font-bold text-black-font">4.5</p>
                    </div>
                    <p className="text-lg">10 reviews</p>
                </div>
            </div>
            <hr/>
            <ul className="space-y-4 pb-4">
                <li className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] mx-5 mt-10 relative rounded-lg">
                    <img src="/images/Bruno.png" alt="bruno's profile pic" className="absolute ml-32 -top-4"/>
                    <p className="my-4">
                        <span className="text-sm font-semibold">Bruno Fernandes</span>
                        <span className="ml-32 text-grey text-xs">20/03/2020</span>
                    </p>
                    <div className="flex gap-2">
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                    </div>
                    <p className="text-sm mt-4">Nice Furniture with good delivery. The delivery time is very fast. 
                        Then products look like exactly the picture in the app.
                        Besides, color is also the same and quality is very good despite very cheap price.
                    </p>
                </li>
                <li className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] mx-5 mb-5 top-6 relative rounded-lg">
                    <img src="/images/Tracy.png" alt="bruno's profile pic" className="absolute ml-32 -top-4"/>
                    <p className="my-4">
                        <span className="text-sm font-semibold">Tracy Mosby</span>
                        <span className="ml-32 text-grey text-xs">20/03/2020</span>
                    </p>
                    <div className="flex gap-2">
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                    </div>
                    <p className="text-sm mt-4">Nice Furniture with good delivery. The delivery time is very fast. 
                        Then products look like exactly the picture in the app.
                        Besides, color is also the same and quality is very good despite very cheap price.
                    </p>
                </li>
                <li className="p-4 shadow-[0px_8px_40px_rgba(138,149,158,0.2)] mx-5 top-8 relative rounded-lg">
                    <img src="/images/Tracy.png" alt="bruno's profile pic" className="absolute ml-32 -top-4"/>
                    <p className="my-4">
                        <span className="text-sm font-semibold">Tracy Mosby</span>
                        <span className="ml-32 text-grey text-xs">20/03/2020</span>
                    </p>
                    <div className="flex gap-2">
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                        <img src="/images/Yellow Star.png" alt="five stars"/>
                    </div>
                    <p className="text-sm mt-4">Nice Furniture with good delivery. The delivery time is very fast. 
                        Then products look like exactly the picture in the app.
                        Besides, color is also the same and quality is very good despite very cheap price.
                    </p>
                </li>
            </ul>
            <Link to={""}>
                <button className="fixed bottom-8 shadow-[0px_10px_20px_rgba(48,48,48,0.25)] p-4 text-white w-11/12  bg-primary rounded-lg text-lg font-semibold mx-4">Write a review</button>
            </Link>
        </div>
    )
};

export default Review;