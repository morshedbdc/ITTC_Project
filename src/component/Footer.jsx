import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { GrPhone } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
    return (
        <div>
        <div
            className="max-w-screen- flex flex-wrap items-center justify-between mx-auto p-1 rounded-t-md bg-[#f1f2f6]"
            
        >
            <div className="footer-text"> <FaInstagram /> <AiOutlineFacebook /> <AiOutlineLinkedin /><TfiEmail /> <GrPhone /> <IoLocationOutline />	&copy;2024 Iraq Technology, All Rights reserve</div>
        </div>
        
       
        </div>
    );
}

export default Footer;
