import React from "react";

const NetworkBar = () => {
    return (
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
    )
}

export default NetworkBar;