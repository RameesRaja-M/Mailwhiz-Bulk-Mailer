import logo from "../assets/images/logo.png"
function Header() {
    return (
        <>
            <nav className="flex flex-col py-2 px-4 items-center lg:flex-row justify-between bg-blue-50 shadow-2xl sticky top-0 z-10">
                <div>
                    <img className="w-60 lg:w-64" src={logo} alt="Logo" />
                </div>
                <div className="flex flex-col lg:flex-row gap-x-10 font-semibold ">
                    <div className="hover:text-[#1CBCCF] cursor-pointer hidden md:block">Home</div>
                    <div className="hover:text-[#1CBCCF] cursor-pointer hidden md:block">About</div>
                    <div className="hover:text-[#1CBCCF] cursor-pointer hidden md:block">Feature</div>
                    <div className="hover:text-[#1CBCCF] cursor-pointer hidden md:block">Pricing</div>
                    <div className="hover:text-[#1CBCCF] cursor-pointer hidden md:block">Contact</div>
                </div>
                <div className="flex gap-x-5 text-white font-medium">
                    <button className="bg-[#1cbccf] py-2 px-4 rounded-md hover:bg-[#FF5733] hidden md:block">Login</button>
                    <button className="bg-[#1cbccf] py-2 px-4 rounded-md hover:bg-[#FF5733] hidden md:block">Sign Up</button>
                </div>
            </nav>
        </>
    )
}
export default Header