/* eslint-disable react/prop-types */
import { useState } from "react";
import Demos from "./Demos";
import Details from "./Details";
import Features from "./Features";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import SimilarGames from "./SimilarGames";

const DetailSec = ({game}) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "Demos",
      element: <Demos game={game}/>,
    },
    {
      id: 2,
      title: "Details",
      element: <Details game={game}/>,
    },
    {
      id: 3,
      title: "Features",
      element: <Features game={game}/>,
    },
  ];
  return (
    <div className="min-h-[100vh] relative bg-[#110C1D] px-12 sm:px-16 md:px-24 xl:px-36 pt-24 pb-20 text-white">
      <div className="absolute top-1 left-0 w-0 h-0 border-l-[99vw] border-l-transparent border-b-[5vw] border-b-[#110C1D] -mt-[5vw]"></div>
      {/* <div className="absolute z-20 bottom-1 right-0 translate-y-full w-0 h-0 border-r-[99vw] border-r-transparent border-t-[5vw] border-t-[#110C1D] mt-[5vw]"></div> */}
      <div className="grid grid-cols-2 sm:grid-cols-4 mb-20 sm:divide-x gap-y-10 text-2xl">
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            <span>{game?.reviews?.rating}</span>
            <FaStar />
          </p>
          <p>{game?.reviews?.count} reviews</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FiDownload className="text-4xl" />
          <p>{game?.download_size} MB</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl bg-white text-[#110C1D] p-2 rounded leading-none">
            {game?.age_rated}+
          </p>
          <p>Rated for {game?.age_rated}+</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>{game?.downloads}+</p>
          <p>Downloads</p>
        </div>
      </div>
      <ul className="flex gap-x-5 mb-12">
        {tabs?.map((tab) => (
          <li
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 cursor-pointer ${
              activeTab === tab.id && "border-b border-[#EB8F1E]"
            }`}
            key={tab.id}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="px-5 mb-20">{tabs[activeTab - 1].element}</div>
      {/* <div className="flex justify-center mb-20">
        <img className="max-w-full w-3/4" src={banner} />
      </div> */}
      <SimilarGames></SimilarGames>
    </div>
  );
};

export default DetailSec;
