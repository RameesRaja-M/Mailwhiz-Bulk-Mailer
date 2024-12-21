{/* Framer Motion */ }
import { motion } from "framer-motion"
import { useState } from "react"
import axios from "axios"
import * as XLSX from "xlsx"

function Mail() {

    const [msg, setMsg] = useState("")
    const [status, setStatus] = useState(false)
    const [emailList, setEmailList] = useState([])

    function handleMsg(event) {
        setMsg(event.target.value)
    }

    function send() {

        setStatus(true)
        axios.post("http://localhost:5000/sendmail", { msg: msg, emailList: emailList })
            .then(function (data) {
                if (data.data === true) {
                    alert("Email Sent Successfully")
                    setStatus(false)
                }
                else {
                    alert("Email Sent Failed")
                }
            })
    }

    function handleFile(event) {
        const file = event.target.files[0]

        const reader = new FileReader();

        reader.onload = function (event) {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' })
            const sheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[sheetName]
            const emailList = XLSX.utils.sheet_to_json(worksheet, { header: 'A' })
            const totalEmail = emailList.map(function (item) { return item.A })
            console.log(totalEmail)
            setEmailList(totalEmail)
        }

        reader.readAsBinaryString(file);
    }

    return (
        <>
            <motion.section
                initial={{ opacity: 0, translateY: "+50%" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2 }}

                className="bg-[#1cbccf] mt-10 shadow-2xl md:m-10 rounded-xl ">
                <div className="bg-[#1cbccf] text-white text-center rounded-xl ">
                    <h1 className=" text-3xl md:text-4xl font-medium px-5 py-3 mt-3 font-poppins">M A I L W H I Z </h1>
                    <h1 className="text-2xl md:text-3xl font-medium px-5 py-3 font-poppins">We Can Help Your Business with Sending Multiple E-mails at Once  </h1>
                    <h1 className="text-2xl text-[#333333] font-bold px-5 py-3">DRAG AND DROP </h1>
                </div>
                <div className="flex flex-col items-center text-black px-5 py-3">

                    <textarea onChange={handleMsg} value={msg} className="w-[80%] h-32 py-2 outline-none px-2 border-[#FDBA19] rounded-md"
                        placeholder="Enter the E-Mail Text....."></textarea>

                    <div>
                        <input onChange={handleFile} type="file" className="border-4 border-dashed py-4 px-4 my-5 " />
                    </div>

                    <p className="text-white text-2xl font-semibold font-poppins">Total Emails in this File : {emailList.length} </p>

                    <button onClick={send} className="bg-[#fdba19] py-2 px-2 text-white font-bold rounded-md w-fit my-8">
                        {status ? "S E N D I N G ..." : "S E N D"} </button>

                </div>
            </motion.section>
        </>
    )
}
export default Mail