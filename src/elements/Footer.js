import React from "react";
import { Link } from "react-router-dom";


const Footer =() => {
    return (
        <div className="flex justify-around fixed bottom-0 w-full p-4 bg-white">
            <Link to={"/Home"}>
                <img src="/images/Home.png" alt=" a house" className="w- h-"/>
            </Link>
            <Link to={"/Favorite"}>
                <img src="/images/Marker.png" alt="a marker" className="w- h-"/>
            </Link>
            <Link to={"/Notifs"}>
                <img src="/images/Bell.png" alt="a bell" className="w- h-"/>
            </Link>
            <Link to={"/Profile"}>
                <img src="/images/Person.png" alt="a person icon" className="w- h-"/>
            </Link>
        </div>
    )
}

export default Footer;