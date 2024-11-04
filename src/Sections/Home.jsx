import { useTranslation } from "react-i18next";
import Vision from '../images/Vision.png';
import Mission from '../images/Mission.png'

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <div>
        <div className="w-full h-auto cursor-pointer flex items-center justify-center bg-black-blue/40">
          <img src="https://img.freepik.com/free-photo/woman-touching-smart-technology-holographic-interface_53876-96144.jpg?t=st=1730617858~exp=1730621458~hmac=b1bbd14bacc567ff91a48560fe471ff80b5c43596ee2368265191c676b32dee9&w=826" 
          className="w-full h-52 md:h-[450px] -z-40 relative object-cover" alt="..." />
            <p className="absolute px-4 text-lg md:text-xl lg:text-3xl xl:text-4xl text-[#ececee] font-semibold">
            {t("company name")}
            </p>
        </div>
        <div className="md:grid grid-cols-2">
          <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-6 text-[#1d0e6a] mr-4 md:mr-10 font-semibold">{t("Who we are ?")}</h1>
          <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
            {t("description")}
          </p>
          </div>
          <div></div>
        </div>
      <div className="md:grid grid-cols-2">
        <div>
          <img src={Vision} alt="Vision" className="size-28 block mx-auto mt-24" />
        </div>
        <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-6 text-[#1d0e6a] mr-4 md:mr-10 font-semibold">{t("Vision")}</h1>
        <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
          {t("description2")}</p>
        </div>
      </div>
      <div className="md:grid grid-cols-2">
          <div>
        <h1 className="ml-4 md:ml-10 text-3xl lg:text-5xl mt-16 pb-6 text-[#1d0e6a] mr-4 md:mr-10 font-semibold">{t("Mission")}</h1>
          <p className="text-justify mx-4 md:mx-10 pb-10 lg:text-xl text-gray-600">
          {t("description3")}
          </p>
          </div>
          <div>
          <img src={Mission} alt="Mission" className="size-32 block mx-auto mt-28" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
