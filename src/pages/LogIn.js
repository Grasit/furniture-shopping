import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import HorizontalLine from "../elements/HorizontalLine";
import NetworkBar from "../elements/NetworkBar";

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   return( 
        <div className=" grid grid-rows-[1fr 1fr 1fr 1fr 5fr 1fr] gap-4 p-4 relative">
           <NetworkBar/>
            <div className="grid grid-cols-3 row-start-2 row-span-1">
                <HorizontalLine/>
                <div className="w-16 h-16 rounded-full border-2  border-black4 relative mx-auto">
                    <img src="/images/Group (1).png" alt="lamp" className="w-3 absolute top-2.5 left-3"/>
                    <img src="/images/Group.png" alt="armchair" className="w-8 absolute top-6 left-3"/>
                </div>
                <HorizontalLine/>
            </div>
            <div className="text-3xl text-gray-4 font-[Merriweather] row-start-3 row-span-1 px-4">
                <p>Hello  !</p>
            </div>
            <div className="text-2xl font-semibold uppercase font-[Merriweather] text-black-font row-start-4 row-span-1 px-4">
                <p>Welcome back</p>
            </div>
            <div className="row-start-5 row-span-5 shadow-[0px_7px_30px_rgba(138,149,158,0.2)] absolute left-0 w-11/12 px-4 mt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
                    <label className=" text-grey-2"> Email</label>
                    <input {...register('email', {required : true})} 
                         className="border-b-2 border-gray-4 w-full p-2 outline-none"/> 
                         <p>{errors?.email?.type === 'required' && "Email is required"}</p> 
                    <label className=" text-grey-2"> Password</label>
                    <input {...register ("password",{register: true})}  
                     className="border-b-2 border-gray-4 w-full p-2 outline-none"/>
                        <p>{errors?.password?.type === 'required' && 'Password is required'}</p>
                    <p className="my-10 text-center font-semibold text-lg">Forgot Password</p>
                    <Link to={"/Home"}>
                        <input type="submit" className=" mx-auto p-2 bg-black-font text-white text-xl w-11/12 rounded-lg outline-none shadow-[0px_10px_20px_rgba(48,48,48,0.25)]" value="Log In"/>
                    </Link>
                    <Link to={"/SignUp"}>
                        <p className="uppercase mx-auto text-center text-lg font-semibold my-5"> Sign up</p>
                    </Link>
                </form>
            </div>
           
            <div></div>
        </div>
   )
}

export default LogIn;