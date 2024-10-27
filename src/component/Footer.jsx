import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { GrPhone } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";

function Footer() {
    return (
        <footer>
        <div className="mx-auto w-full p-4 py-6 lg:py-8 bg-[#f1f2f6] ">
        
            <div>
            <h2 className="mb-6 text-base font-semibold text-[#1d0e6a] uppercase">Contact us</h2>
            <div className="text-gray-600">
            <a
                href="mailto:info@iraq-technology-iq.com"
                className="flex mb-4"
            >
                <TfiEmail className="m-1 size-4" />
                <span className="hover:underline">info@iraq-technology-iq.com</span>
            </a>
            <div
                className="flex mb-4"
            >
                <GrPhone className="m-1 size-4" />
                <span className="hover:underline">+964 782 149 4948</span>
            </div>
            <a
                href="https://www.google.com/maps/@33.2951121,44.4238022,17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                className="flex mb-4"
            >
                <GrLocation className="m-1 size-4" />
                <span className="hover:underline">
                Hariri Building, Al-Huria Square, Al-Karada, Baghdad, Iraq,
                </span>
            </a>
            </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between">
            
            <div className="flex mt-4 sm:justify-center sm:mt-0"> 
            <a
                href="https://www.instagram.com/ittc.iq?igsh=eHEyenIxejAzOTE3"
                className="text-gray-600 hover:text-gray-900 dark:hover:text-[#FFD700]"
            >
                <FaInstagram className="m-1 size-6" />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=61564752944718&mibextid=LQQJ4d"
                className="text-gray-600 hover:text-gray-900 dark:hover:text-[#FFD700]"
            >
                <AiOutlineFacebook className="m-1 size-6" />
            </a>
            <a
                href="https://www.linkedin.com/company/iraq-technology-training-center/"
                className="text-gray-600 hover:text-gray-900 dark:hover:text-[#FFD700]"
            >
                <AiOutlineLinkedin className="m-1 size-6" />
            </a>
            </div>
            <div className="text-sm text-gray-500 sm:text-center ">
            &copy;2024 Iraq Technology, All Rights reserve
            </div>
            </div>
            
        </div>
        </footer>
    );
}

export default Footer;
