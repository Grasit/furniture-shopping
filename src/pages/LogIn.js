import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import HorizontalLine from "../elements/HorizontalLine";

const LogIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   return( 
        <div className=" grid grid-rows-[1fr 1fr 1fr 1fr 5fr 1fr] gap-4 p-4 relative">
            <div className="flex flex-row justify-between row-start-1 row-span-1">
                <p className="text-md text-black font-['SF Pro Text'] w-12">
                    9:41
                </p>
                <div className="flex flex-row space-x-2 w-16">
                    <img src="/images/Combined Shape.png" alt="network bar" className="w-4 h-3"/>
                    <img src="/images/Wi-Fi.png" alt=" wi-fi bar" className="w-3 h-3"/>
                    <img src="/images/Battery.png" alt="battery" className="w-4 h-3"/>
                </div>
            </div>
            <div className="grid grid-cols-3 row-start-2 row-span-1">
                <HorizontalLine/>
                <div className="w-16 h-16 rounded-full border-2  border-black4 relative mx-auto">
                    <img src="/images/Group (1).png" alt="lamp" className="w-3 absolute top-2.5 left-3"/>
                    <img src="/images/Group.png" alt="armchair" className="w-8 absolute top-6 left-3"/>
                </div>
                <HorizontalLine/>
            </div>
            <div className="text-3xl text-gray-4 font-['Merriweather'] row-start-3 row-span-1">
                <p>Hello  !</p>
            </div>
            <div className="text-2xl font-semibold uppercase font-['Merriweather'] text-black-font row-start-4 row-span-1">
                <p>Welcome back</p>
            </div>
            <div className="row-start-5 row-span-5 shadow-[0px_7px_30px_rgba(138,149,158,0.2)] absolute left-0 w-11/12">
                <form onSubmit={handleSubmit(onSubmit)} className="p-2">
                    <label className=" text-grey-2"> Email</label>
                    <input {...register('email', {required : true})} 
                         className="border-b-2 border-gray-4 w-full p-2 outline-none"/> 
                         <p>{errors?.email?.type === 'required' && "Email is required"}</p> 
                    <label className=" text-grey-2"> Password</label>
                    <input {...register ("password",{register: true})}  
                     className="border-b-2 border-gray-4 w-full p-2 outline-none"/>
                        <p>{errors?.password?.type === 'required' && 'Password is required'}</p>
                    <p className="my-10 text-center font-semibold text-lg">Forgot Password</p>
                    <input type="submit" className=" mx-auto p-2 bg-black-font text-white text-xl w-11/12 rounded-lg outline-none shadow-[0px_10px_20px_rgba(48, 48, 48, 0.25)]" value="Log In"/>
                    <Link to={"/SignUp"}>
                        <button className="uppercase mx-auto my-4 text-lg font-semibold flex self-center">Sign Up
                        </button>
                    </Link>
                </form>
            </div>
           
            <div></div>
        </div>
   )
}

export default LogIn;