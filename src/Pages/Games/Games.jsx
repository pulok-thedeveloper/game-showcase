import bg from "/assets/game_bg_2.jpg";
import { LiaFilterSolid } from "react-icons/lia";
import { GoSearch } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  const [filterBox, setFilterBox] = useState(false);
  const [games, setGames] = useState();

  useEffect(() => {
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full min-h-screen pt-44 pb-20 px-12 md:px-20 lg:px-24 xl:px-40 bg-black/60 backdrop-blur-[3px]">
        <div className="mb-8 flex justify-between relative py-5">
          <h2 className=" text-4xl text-white uppercase font-semibold italic">
            <span>Game </span>{" "}
            <span className="text-[#EB8F1E]">Collection</span>
          </h2>
          <div className="flex items-center gap-5">
            <div>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-xl text-white p-3 rounded-md">
                <GoSearch className="text-lg" />
              </button>
            </div>
            <div>
              <button
                onClick={() => setFilterBox(!filterBox)}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-xl text-white px-5 py-2 rounded-md"
              >
                <LiaFilterSolid />
                Filter
              </button>
              <div
                className={`absolute w-[300px] z-10 right-0 top-full bg-white/40 backdrop-blur-3xl p-5 rounded-md ${
                  filterBox ? "scale-100" : "scale-0"
                }  origin-top-right transition-transform duration-300`}
              >
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Category</label>
                    <select className="bg-white/50 outline-0 w-full px-3 py-2 rounded-md">
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                      <option>Category 4</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Released date</label>
                    <input
                      className="bg-white/50 outline-0 w-full px-3 py-2 rounded-md"
                      type="date"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:gap-10 gap-5">
          {games?.map((item) => (
            <div
              key={item?.id}
              className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300"
            >
              <img
                className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
                src={item?.images.length && item.images[0]}
                alt=""
              />
              <div
                className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
                }}
              >
                <h3 className="text-base">{item?.title}</h3>
                <p className="text-xs text-slate-300 font-light mb-2">
                  {item?.devices?.map((device, i) => (
                    <span key={i}>
                      {device}
                      {i + 1 < item?.devices?.length ? " , " : ""}
                    </span>
                  ))}
                </p>
                <Link
                  to={`${item?.title.toLowerCase().replace(" ", "_")}`}
                  className="bg-[#EB8F1E] text-white text-center px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Play Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
