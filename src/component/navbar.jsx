import { useState } from "react";
import { Link } from "react-router-dom";
import ittc from "../images/logo-01.png";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav
      className="flex pr-4 md:shadow-lg items-center w-full fixed z-40 bg-[#1d0e6a]">
      <div className="text-lg font-bold py-1">
        <img src={ittc} alt="Logo" className="w-[5.5rem] xl:w-24" />
      </div>
      <div className="ml-auto md:flex md:items-center hidden">
        <ul className="flex md:space-x-2">
          <li>
            <Link to="/" className="flex p-4 items-center text-[#ececee] drop-shadow-[#cb6ade]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="flex p-4 items-center text-[#ececee] drop-shadow-[#cb6ade]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Courses" className="flex p-4 items-center text-[#ececee] drop-shadow-[#cb6ade]">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex p-4 items-center text-[#ececee] drop-shadow-[#cb6ade]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto md:hidden cursor-pointer text-[#efefef]" onClick={() => setToggleNav(prev => !prev)}>
        {toggleNav ? <AiOutlineClose className="size-6" /> : <TiThMenuOutline className="size-6" />}
      </div>
      <div className={`absolute top-full left-0 right-0 transition-all duration-700 ${toggleNav ? 'block' : 'hidden'} bg-white`}>
        <ul className="flex flex-col">
          <li>
            <Link to="/" className="flex p-4 items-center" onClick={() => setToggleNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="flex p-4 items-center" onClick={() => setToggleNav(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Courses" className="flex p-4 items-center" onClick={() => setToggleNav(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex p-4 items-center" onClick={() => setToggleNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
