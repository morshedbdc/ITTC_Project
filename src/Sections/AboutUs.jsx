import { useTranslation } from "react-i18next";
import Image from "../component/Image";
import hero from '../images/laptop.jpg';


function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
    <div className="w-full h-auto cursor-pointer flex items-center justify-center">
          <img src={hero} className="w-full h-52 md:h-[500px] object-cover -z-50 relative drop-shadow-2xl" alt="..." />
            <p className="absolute px-4 text-lg md:text-xl lg:text-3xl xl:text-3xl text-[#efefef] drop-shadow-dark">
            {t("company name")}
            </p>
        </div>
    <div className="md:flex">
      <div className="container my-6 md:my-24 xl:my-52 px-2 py-2">
        <h2 className="text-center lg:text-lg xl:text-xl md:ml-4 text-gray-800">
        {t("AboutUs")}
        </h2>
        </div>
      <Image />
    </div>
    </>
  );
}

export default AboutUs;
