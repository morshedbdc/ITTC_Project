/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Data } from "../Asset/Data";
import Card from "../component/Card";

function Courses() {
  const [showMore, setShowMore] = useState([]);
  const [cardShowPage, setCardShowPage] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setShowMore(Data.slice(0, page * cardShowPage));
  }, [page, cardShowPage]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center sm:ml-14 lg:ml-16 xl:ml-14 ">
        {showMore.map(({ id, url, title, description }) => (
          <Card key={id} url={url} title={title} description={description} />
        ))}
      </div>
      {showMore.length < Data.length && (
        <button
          type="button"
          className="py-3 px-5 text-sm font-semibold text-center block mx-auto my-6 rounded-lg sm:w-fit bg-gray-200 hover:bg-[#5A4FCF] hover:text-white focus:ring-4 focus:outline-none  "
          
          onClick={() => setPage(page + 1)}
        >
          Load more ...
        </button>
      )}
    </>
  );
}

export default Courses;
