import { useTranslation } from "react-i18next";
import Image from "../component/Image";
import hero from "../images/technology.jpg";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-auto cursor-pointer flex items-center justify-center bg-black-blue/40">
        <img
          src={hero}
          className="w-full h-[350px] md:h-[450px] relative object-cover -z-40"
          alt="..."
        />
        <p className="absolute px-4 text-[18px] md:text-xl lg:text-3xl xl:text-3xl text-[#efefef] font-semibold">
          {t("company name")}
        </p>
      </div>
      <div className="md:flex">
        <div className="container my-6 md:my-24 xl:my-52 px-2 py-2">
          <h2 className="text-center mx-4 lg:text-lg xl:text-xl md:ml-4 text-gray-800">
            {t("AboutUs")}
          </h2>
        </div>
        <Image />
      </div>
    </>
  );
}

export default AboutUs;
