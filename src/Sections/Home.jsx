// import { GrUpdate } from "react-icons/gr";
// import { RiUserFollowLine } from "react-icons/ri";
// import { FaRegHandshake } from "react-icons/fa";
import { useTranslation } from "react-i18next";


function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <div>
        <div className="w-full h-auto cursor-pointer flex items-center justify-center ">
          <img src="https://img.freepik.com/free-photo/woman-touching-smart-technology-holographic-interface_53876-96144.jpg?t=st=1730617858~exp=1730621458~hmac=b1bbd14bacc567ff91a48560fe471ff80b5c43596ee2368265191c676b32dee9&w=826" 
          className="w-full h-52 md:h-[450px] -z-50 relative object-cover filter blur-[px]" alt="..." />
            <p className="absolute px-4 text-lg md:text-xl lg:text-3xl xl:text-4xl text-[#ececee]">
            {t("company name")}
            </p>
        </div>
        <div className="md:grid grid-cols-2">
          <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-4 text-[#1d0e6a]">{t("Who we are ?")}</h1>
          <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
            {t("description")}
          </p>
          </div>
          <div></div>
        </div>
      <div className="md:grid grid-cols-2">
        <div></div>
        <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-4 text-[#1d0e6a]">{t("Vision")}</h1>
        <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
          {t("description2")}</p>
        </div>
      </div>
      <div className="md:grid grid-cols-2">
          <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-4 text-[#1d0e6a]">{t("Mission")}</h1>
          <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
          {t("description3")}
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
