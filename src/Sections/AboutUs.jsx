import Image from "../component/Image";


function AboutUs() {
  return (
    <div className="md:flex">
      <div className="container md:my-24 xl:my-32 px-2 py-2">
        <h2 className="max-w-2xl md:text-lg lg:text-xl md:ml-4 text-gray-800">
        ITTC offers a wide range of courses that cover the latest technologies and trends in IT, 
        ensuring that professionals can improve their technical skills and stay up-to-date with 
        the rapidly evolving technological landscape. We strive to empower both individuals and 
        companies by equipping them with the knowledge and tools they need to succeed in 
        an ever-changing technological environment.
        </h2>
        </div>
      <Image />
    </div>
  );
}

export default AboutUs;
