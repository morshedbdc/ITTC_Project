import hreo from "../images/ittc.jpg";
// import { GrUpdate } from "react-icons/gr";
// import { RiUserFollowLine } from "react-icons/ri";
// import { FaRegHandshake } from "react-icons/fa";


function Home() {
  return (
    <section>
      <div>
        <div className="w-full h-auto cursor-pointer flex items-center justify-center">
          <img src={hreo} className="w-full h-52 md:h-[450px] -z-50 relative" alt="..." />
            <p className="absolute px-4 text-lg md:text-xl lg:text-3xl xl:text-3xl text-[#efefef] drop-shadow-glow">
            Iraq Technology
            Training Center
            </p>
        </div>
        <div className="md:grid grid-cols-2">
          <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-4 text-[#1d0e6a]">Who we are ?</h1>
          <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
            ITTC - Iraq Technology Training Center ITTC is part of the Iraq
            Technology Solutions group, specializing in providing professional
            development and training in the field of information technology. The
            center aims to enhance the technical skills and capabilities of
            industry professionals through comprehensive and integrated training
            programs.
          </p>
          </div>
          <div></div>
        </div>
      <div className="md:grid grid-cols-2">
        <div></div>
        <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-4 text-[#1d0e6a]">Vision</h1>
        <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
          To be the leading institute in providing specialized professional training that enhances 
          the skills of engineers and technicians, enabling them to keep 
          up with technological advancements 
          in infrastructure and engineering fields.</p>
        </div>
      </div>
      <div className="md:grid grid-cols-2">
          <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-4 text-[#1d0e6a]">Mission</h1>
          <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
          To deliver specialized and practical training programs focused on developing the technical 
          and professional skills of engineers and technicians, utilizing the latest tools and 
          technologies to ensure the effective application of engineering standards in real-world projects.
          </p>
          </div>
          <div></div>
        </div>
        {/* <div className="mt-16">
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
      </div> */}
          {/* <button
            type="button"
            className="py-3 px-5 text-sm font-semibold text-center block mx-auto my-10 rounded-lg sm:w-fit bg-gray-200 hover:bg-[#1d0e6a] hover:text-white focus:ring-4 focus:outline-none"
          >
            Contact As
          </button> */}
      </div>
    </section>
  );
}

export default Home;
