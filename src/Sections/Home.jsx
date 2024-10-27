import hreo from "../images/ittc.jpg";
import { GrUpdate } from "react-icons/gr";
import { RiUserFollowLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";

function Home() {
  return (
    <section>
      <div>
        <div className="relative w-full h-auto cursor-pointer">
          <img src={hreo} className="w-full h-52 md:h-96" alt="..." />
          <div className="flex justify-center items-center absolute px-4 md:text-lg lg:text-2xl xl:text-3xl text-white bottom-6 md:bottom-20 md:left-20 lg:bottom-32 lg:left-32">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ducimus.
            </p>
          </div>
        </div>
        <div>
          <p className="max-w-3xl text-center mx-4 md:mx-10 lg:mx-32 xl:mx-auto pt-20 md:pt-[7.5rem] pb-20 lg:text-xl text-gray-800">
            ITTC - Iraq Technology Training Center ITTC is part of the Iraq
            Technology Solutions group, specializing in providing professional
            development and training in the field of information technology. The
            center aims to enhance the technical skills and capabilities of
            industry professionals through comprehensive and integrated training
            programs.
          </p>
        </div>
        <div className="mt-16">
          <h1 className="text-center text-3xl lg:text-5xl mb-10 text-[#1d0e6a]">
            Why us ?
          </h1>
          <div className="md:flex justify-center mb-6">
          <div className="flex justify-center my-5 px-5">
            <GrUpdate className="size-6 lg:size-7 text-[#1d0e6a]" />
            <span className="px-2 text-lg">Up-to-Date Content</span>
          </div>
        <div className="flex justify-center my-5 px-5 -ml-5">
          <RiUserFollowLine className="size-8 lg:size-8 text-[#1d0e6a]" />
          <span className="px-2 text-lg">Expert Instructors</span>
        </div>
        <div className="flex justify-center my-5 px-5 -ml-2">
          <FaRegHandshake className="size-8 lg:size-9 text-[#1d0e6a]" />
          <span className="px-2 text-lg">Hands-On Projects</span>
        </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl lg:text-5xl mt-16 mb-5 text-[#1d0e6a]">Vision</h1>
        <p className="max-w-3xl text-center mx-4 md:mx-10 lg:mx-32 xl:mx-auto py-4 lg:text-xl text-gray-800">To be the leading institute in providing specialized professional training that enhances 
          the skills of engineers and technicians, enabling them to keep up with technological advancements 
          in infrastructure and engineering fields.</p>
      </div>
          <button
            type="button"
            className="py-3 px-5 text-sm font-semibold text-center block mx-auto my-10 rounded-lg sm:w-fit bg-gray-200 hover:bg-[#1d0e6a] hover:text-white focus:ring-4 focus:outline-none"
          >
            Contact As
          </button>
      </div>
    </section>
  );
}

export default Home;
