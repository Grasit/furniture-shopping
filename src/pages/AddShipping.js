import React from "react";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const AddShipping =() => {
    return (
        <div className="p-4 space-y-4 font-primary">
            <NetworkBar/>
            <div className="flex gap-10  text-center">
                <Link to={"/Profile"}>
                    <img src="/images/Back Container.png" alt="a back icon" className="w-1.5 h-3.5"/>
                </Link>
                <p className="w-2/3 font-bold font-[Merriweather] text-black-font">Add shipping address</p>
            </div>
            <form className="space-y-4">
                <div className="bg-[#F5F5F5] flex flex-col p-4 rounded-[4px] space-y-2">
                    <label className="text-grey text-xs" for="fullName">Full Name</label>
                    <input type={"text"} name="fullName" placeholder="Ex: Bruno Pharm" className="bg-[#F5F5F5] focus:outline-none text-[#B2B2B2]" />
                </div>
                <div className="bg-[#F5F5F5] flex flex-col p-4 rounded-[4px] space-y-2">
                    <label className="text-grey text-xs" for="address">Address</label>
                    <input type={"text"} name="address" placeholder="Ex: 25 Robert Latouche Street" className="bg-[#F5F5F5] focus:outline-none text-[#B2B2B2]" />
                </div>
                <div className="flex flex-col p-4 rounded-[4px] space-y-2 border ">
                    <label className="text-grey text-xs" for="postalCode">Zipcode (Postal Code)</label>
                    <input type={"text"} name="postalCode" placeholder="Pham Cong Thanh" className="focus:outline-none text-primary font-semibold" />
                </div>
                <div className="bg-[#F5F5F5] flex flex-col p-4 rounded-[4px] space-y-2">
                    <label className="text-grey text-xs" for="country">Country</label>
                    <select name="country" id="country" className="bg-[#F5F5F5] focus:outline-none text-[#B2B2B2]">
                            <option value="select">Select Country</option>
                            <option value="Russia">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="USA">USA</option>
                            <option value="Belarus">Belarus</option>
                    </select>
                </div>
                <div className="border flex flex-col p-4 rounded-[4px] space-y-2">
                    <label className="text-grey text-xs" for="city">City</label>
                    <select name="city" id="city" className=" bg-white focus:outline-none text-primary font-semibold">
                            <option value="NewYork">New York</option>
                            <option value="Moscow">Moscow</option>
                            <option value="Kyiv">Kyiv</option>
                            <option value="Uyo">Uyo</option>
                            <option value="Sydney">Sydney</option>
                    </select>
                </div>
                <div className="bg-[#F5F5F5] flex flex-col p-4 rounded-[4px] space-y-2">
                    <label className="text-grey text-xs" for="district">District</label>
                    <select name="district" id="district" className="bg-[#F5F5F5] focus:outline-none text-[#B2B2B2]">
                            <option value="select">Select District</option>
                            <option value="Russia">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="USA">USA</option>
                            <option value="Belarus">Belarus</option>
                    </select>
                </div>
                
                <input type={"submit"} value="SAVE ADDRESS" className="p-4 bg-primary text-white w-full text-xl rounded-lg font-semibold shadow-[0px_10px_20px_rgba(48,48,48,0.25)]"/>
            </form>
        </div>
    )
};

export default AddShipping;