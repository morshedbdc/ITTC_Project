import { useState } from "react";
import { Link } from "react-router-dom";
import ittc from "../images/ittc.png";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav
      className="flex px-4 border-b md:shadow-lg items-center w-full fixed z-40 "
      style={{
        backgroundImage: "linear-gradient(-40deg, #1d0e6a, #ececee)",
      }}
    >
      <div className="text-lg font-bold md:py-1 py-4">
        <img src={ittc} alt="Logo" className="w-40 xl:w-52" />
      </div>
      <div className="ml-auto md:flex md:items-center hidden">
        <ul className="flex md:space-x-2">
          <li>
            <Link to="/" className="flex p-4 items-center hover:text-pink-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="flex p-4 items-center hover:text-pink-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Courses" className="flex p-4 items-center  hover:text-pink-500">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex p-4 items-center  hover:text-pink-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto md:hidden cursor-pointer" onClick={() => setToggleNav(prev => !prev)}>
        {toggleNav ? <AiOutlineClose className="size-5" /> : <TiThMenuOutline className="size-5" />}
      </div>
      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 transition-all duration-300 ${toggleNav ? 'block' : 'hidden'} bg-white`}>
        <ul className="flex flex-col">
          <li>
            <Link to="/" className="flex p-4 items-center  hover:text-gray-500" onClick={() => setToggleNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="flex p-4 items-center  hover:text-gray-500" onClick={() => setToggleNav(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Courses" className="flex p-4 items-center  hover:text-gray-500" onClick={() => setToggleNav(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="flex p-4 items-center  hover:text-gray-500" onClick={() => setToggleNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
