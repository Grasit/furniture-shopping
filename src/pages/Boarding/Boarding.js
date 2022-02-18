function Boarding() {
    return (
        <div className= "bg-[url('/public/images/couch.png')] w-screen h-screen grid grid-rows-3">
            <div></div>
            <div>
            <div className=" top-11 flex flex-col text-left ml-10 font-[gelasio]">
                <span className="text-black3 uppercase font-semibold text-left text-xl">Make your </span>
                <span className="uppercase font-bold text-3xl text-black-font">home beautiful</span>
                <p className="text-black3 ml-6 text-lg font-sans">
                The best simple place where you discover most wonderful furnitures and make your home beautiful
                </p>
            </div>
            </div>
            <div>
                <button className="top-20 bg-primary text-white px-10 py-5 rounded text-xl font-semibold">Get Started</button>
            </div>
        </div>
        );
}

export default Boarding;