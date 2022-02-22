import React from "react";
import { useForm } from "react-hook-form";
import HorizontalLine from "../elements/HorizontalLine";
import { Link } from "react-router-dom";
import NetworkBar from "../elements/NetworkBar";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   return( 
        <div className=" grid grid-rows-[1fr 1fr 1fr 5fr] gap-4 p-4 relative">
            <NetworkBar/>
            <div className="grid grid-cols-3 row-start-2 row-span-1">
                <HorizontalLine/>
                <div className="w-16 h-16 rounded-full border-2  border-black4 relative mx-auto">
                    <img src="/images/Group (1).png" alt="lamp" className="w-3 absolute top-2.5 left-3"/>
                    <img src="/images/Group.png" alt="armchair" className="w-8 absolute top-6 left-3"/>
                </div>
                <HorizontalLine/>
            </div>
            <div className="text-2xl my-10 font-semibold uppercase font-['Merriweather'] text-black-font row-start-3 row-span-1">
                <p>Welcome</p>
            </div>
            <div className="row-start-4 row-span-7 shadow-[0px_7px_30px_rgba(138,149,158,0.2)] absolute left-0 w-11/12">
                <form onSubmit={handleSubmit(onSubmit)} className="p-2">
                    <label className=" text-grey-2"> Name</label>
                    <input {...register('name', {required : true})} 
                         className="border-b-2 border-gray-4 w-full p-2 outline-none"/> 
                         <p>{errors?.name?.type === 'required' && "Name is required"}</p> 
                    <label className=" text-grey-2"> Email</label>
                    <input {...register('email', {required : true})} 
                         className="border-b-2 border-gray-4 w-full p-2 outline-none"/> 
                         <p>{errors?.email?.type === 'required' && "Email is required"}</p> 
                    <label className=" text-grey-2"> Password</label>
                    <input {...register('password', {required : true})} 
                         className="border-b-2 border-gray-4 w-full p-2 outline-none"/> 
                         <p>{errors?.password?.type === 'required' && "Password is required"}</p> 
                    <label className=" text-grey-2"> Confirm Password</label>
                    <input {...register ("repeatpassword",{register: true})}  
                     className="border-b-2 border-gray-4 w-full p-2 outline-none"/>
                        <p>{errors?.repeatpassword?.type === 'required' && "Password doesn't match"}</p>
                    <Link to={'/Home'}><input type="submit" className=" mx-auto my-10 p-2 bg-black-font text-white text-xl w-11/12 rounded-lg outline-none shadow-[0px_10px_20px_rgba(48, 48, 48, 0.25)]" value="SIGN UP"/>
                    </Link>
                    <p className=" text-center mx-auto text-sm text-['#808080']">Already have an account?
                         <Link to={'/LogIn'}><span className="font-semibold uppercase text-md text-black ml-4">Sign In</span>
                        </Link>
                     </p>
                </form>
            </div>
        </div>
   )
}

export default SignUp;