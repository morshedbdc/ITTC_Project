/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Data } from "../Asset/Data";
import Card from "../component/Card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Courses() {
  const [showMore, setShowMore] = useState([]);
  const [cardShowPage, setCardShowPage] = useState(6);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    setShowMore(Data.slice(0, page * cardShowPage));
  }, [page, cardShowPage]);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/description/${id}`, { state: { data: Data } });
  };

  return (
    <>
      <div className="w-full h-auto cursor-pointer flex items-center justify-center bg-pink/30">
        <img
          src="https://img.freepik.com/free-photo/researcher-using-transparent-digital-tablet-screen-futuristic-technology_53876-101147.jpg?t=st=1730619887~exp=1730623487~hmac=4c9dd06237844d6dcb3bf3073559f34ae126be93a8daafde9302d3a7f294a94e&w=826"
          className="w-full h-[350px] md:h-[450px] relative object-cover -z-40"
          alt="..."
        />
        <p className="absolute px-4 text-[18px] md:text-2xl lg:text-3xl xl:text-3xl text-[#efefef] font-semibold">
          {t("company name")}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center sm:ml-14 lg:ml-16 xl:ml-14 mx-6">
        {showMore.map(({ id, url, title }) => (
          <Card
            key={id}
            url={url}
            title={title}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </div>
      {showMore.length < Data.length && (
        <button
          type="button"
          className="text-sm font-semibold text-center block mx-auto my-6 rounded-lg sm:w-fit px-4 py-2 text-[#1d0e6a] hover:text-[#6c00ff]"
          onClick={() => setPage(page + 1)}
        >
          Load more ...
        </button>
      )}
    </>
  );
}

export default Courses;
