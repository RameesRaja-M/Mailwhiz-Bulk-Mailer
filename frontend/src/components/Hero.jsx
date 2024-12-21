import hero from "../assets/images/hero.png"
import { RiCustomerService2Fill, } from "react-icons/ri";
{/* Framer Motion */ }
import { motion } from "framer-motion"

function Hero() {
    return (
        <>
            <section className="bg-gray-200 py-12 xl:pt-12 xl:pb-0 overflow-hidden shadow-2xl">
                <div className="container mx-auto h-full">
                    <div className="flex flex-col xl:flex-row items-center justify-between h-full ">
                        <div className="xl:w-[48%] text-center xl:text-left xl:pl-32 ">

                            <motion.div
                                initial={{ opacity: 0, translateX: "-100%" }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 1 }}

                                className="bg-white flex items-center gap-x-2 w-fit px-3 py-2 rounded-xl mb-2 hover:bg-[#FF5733] cursor-pointer">
                                <RiCustomerService2Fill className="text-2xl text-[#1cbccf]" />
                                <div className=" font-medium">C O N T A C T</div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, translateX: "-100%" }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 2 }}
                                className="text-black text-3xl md:text-5xl font-medium mb-3 font-poppins
                            ">Reach Your Audience in Minutes!</motion.h1>

                            <motion.h3
                                initial={{ opacity: 0, translateX: "-100%" }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 2.5 }}
                                className="text-black text-xl mb-3 font-poppins">Fast, efficient, and reliable email marketing at your fingertips.</motion.h3>

                            <motion.button
                                initial={{ opacity: 0, translateX: "-100%" }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 2.5 }}
                                className="bg-[#1cbccf] py-2 px-4 rounded-md hover:bg-[#FF5733] text-white font-medium mb-3
                            ">Get Started</motion.button>

                        </div>

                        <motion.div
                            initial={{ opacity: 0, translateX: "+100%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <img className="w-[1000px]" src={hero} alt="Hero" />
                        </motion.div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Hero