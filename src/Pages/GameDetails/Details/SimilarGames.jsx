import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SimilarGames = () => {
  const [games, setGames] = useState();
  const { slug } = useParams();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const games = data.filter(
          (item) => item?.title.toLowerCase().replace(" ", "_") !== slug
        );
        setGames(games);
      });
  }, [slug]);

  return (
    <div>
      <h2 className="mb-8 text-xl text-[#EB8F1E] font-medium">Similar Games</h2>
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
  );
};

export default SimilarGames;
