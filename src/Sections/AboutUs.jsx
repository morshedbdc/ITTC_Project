import Image from "../component/Image";
import hero from '../images/laptop.jpg';

function AboutUs() {
  return (
    <>
    <div className="w-full h-auto cursor-pointer flex items-center justify-center">
          <img src={hero} className="w-full h-52 md:h-[500px] object-cover -z-50 relative drop-shadow-2xl" alt="..." />
            <p className="absolute px-4 text-lg md:text-xl lg:text-3xl xl:text-3xl text-[#efefef] drop-shadow-dark">
            Iraq Technology
            Training Center
            </p>
        </div>
    <div className="md:flex">
      <div className="container my-6 md:my-24 xl:my-52 px-2 py-2">
        <h2 className="text-center lg:text-lg xl:text-xl md:ml-4 text-gray-800">
        ITTC offers a wide range of courses that cover the latest technologies and trends in IT, 
        ensuring that professionals can improve their technical skills and stay up-to-date with 
        the rapidly evolving technological landscape. We strive to empower both individuals and 
        companies by equipping them with the knowledge and tools they need to succeed in 
        an ever-changing technological environment.
        </h2>
        </div>
      <Image />
    </div>
    </>
  );
}

export default AboutUs;
