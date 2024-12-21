{/* Framer Motion */ }
import { motion } from "framer-motion"

function Review() {
    return (
        <>
            <section className="bg-gray-200 shadow-2xl mt-10 mb-10 md:m-10 ">
                <h1 className="font-bold text-3xl mt-5 text-center text-[#1cbccf]">Customer Review</h1>
                <div className="flex flex-col items-center justify-center  m-5 text-white gap-5 mt-10">

                    <motion.div 
                    initial={{ opacity: 0, translateY: "+100%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 2 }}

                    className="bg-[#FF5733] p-5 container">
                        <p>MailWhiz has completely transformed my email campaigns! The interface is user-friendly,
                            and the analytics tools provide invaluable insights.
                            I've seen a significant increase in engagement and open rates.
                            The customization options for templates are amazing.
                            Highly recommend MailWhiz for anyone looking to take their email marketing to the next level!</p>
                        <p className="font-bold text-black">by Jeny</p>
                        <p className="font-bold text-black">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                    <motion.div
                     initial={{ opacity: 0, translateY: "+100%" }}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{ duration: 2 }}

                    className="bg-[#FF5733] p-5 container">
                        <p>MailWhiz is an absolute game-changer for my business! Scheduling bulk emails has never been easier.
                            The platform is super intuitive, and the delivery rate is top-notch.
                            The detailed reports help me track campaign performance effectively.
                            I'm thrilled with the results so far.
                            A must-have tool for email marketing enthusiasts!</p>
                        <p className="font-bold text-black">by Samantha K</p>
                        <p className="font-bold text-black">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                    <motion.div
                     initial={{ opacity: 0, translateY: "+100%" }}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{ duration: 2 }}
                    
                    className="bg-[#FF5733] p-5 container">
                        <p>Using MailWhiz has been a fantastic experience! The customizable templates are stunning,
                            and I can create professional-looking emails in minutes. The response from my clients has been overwhelming,
                            with more clicks and leads than ever before.
                            If you're serious about email marketing, this is the app you need!</p>
                        <p className="font-bold text-black">by Priya Sharma</p>
                        <p className="font-bold text-black">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                    <motion.div
                     initial={{ opacity: 0, translateY: "+100%" }}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{ duration: 2 }}
                    
                    className="bg-[#FF5733] p-5 container">
                        <p>MailWhiz simplifies everything about bulk emailing! The smart segmentation feature lets me target the right audience,
                            and the performance tracking tools are incredibly accurate. It saves me so much time,
                            and my campaigns have never performed better.
                            I highly recommend MailWhiz to anyone serious about growing their audience!
                        </p>
                        <p className="font-bold text-black">by Emily Green</p>
                        <p className="font-bold text-black">4.5 ⭐⭐⭐⭐</p>
                    </motion.div>

                </div>
            </section>
        </>
    )
}
export default Review