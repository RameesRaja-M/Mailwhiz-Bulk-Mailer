{/* Framer Motion */ }
import { motion } from "framer-motion"

function About() {
    return (
        <>
            <section className="text-center bg-gray-200 shadow-2xl mt-20 mb-10 md:m-10">
                <h1 className="text-4xl font-bold mt-5 text-[#1cbccf] font-chakra">About US</h1>
                <p className="m-2 md:text-xl font-poppins font-medium mt-5">This platform is designed for those who value seamless communication and effective email marketing </p>
                <div className="md:flex ">
                    <motion.div
                    initial={{ opacity: 0, translateY: "+100%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 2 }}
                    
                    className="border border-white bg-[#FF5733] text-white p-2 m-6">

                        <h2 className="text-2xl font-medium text-white font-poppins">Bulk Email Made Simple</h2>
                        <p>Discover the ultimate solution for email marketing with MailWhiz.
                            From personalized templates to advanced analytics, we provide the tools to create and manage
                            impactful email campaigns. Whether you're reaching out to clients or growing your audience,
                            streamline your communication and achieve success with MailWhiz today!</p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, translateY: "+130%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 2 }}
                    
                    className="border border-white bg-[#FF5733] text-white p-2 m-6">

                        <h2 className="text-2xl font-medium text-white font-poppins">Seamless Campaigns </h2>
                        <p>Transform your email marketing with MailWhiz's seamless tools.
                            From automated scheduling to detailed reports, we offer everything you need to run successful campaigns.
                            Engage your audience with beautifully designed emails and track your growth in real-time.
                            Elevate your marketing game effortlessly with MailWhiz today!</p>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, translateY: "+160%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 2 }}
                    
                    className="border border-white bg-[#FF5733] text-white p-2 m-6">

                        <h2 className="text-2xl font-medium text-white font-poppins">Smarter Email Marketing</h2>
                        <p>MailWhiz makes email marketing smarter and more effective. With advanced segmentation,
                            personalized templates, and real-time analytics, you can target the right audience and maximize engagement.
                            Whether you're a beginner or a pro, MailWhiz empowers you to achieve better results with ease!</p>
                    </motion.div>

                </div>
            </section>
        </>
    )
}
export default About