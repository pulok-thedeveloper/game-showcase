import game1 from "/assets/Dice/1.png";
import game2 from "/assets/Teen_Patti/1.png";
import game3 from "/assets/Roulate/1.png";
import game4 from "/assets/Golder_Flower/1.png";
import game5 from "/assets/Gready/1.png";
import game6 from "/assets/Gready_2/2.png";

const SimilarGames = () => {
  return (
    <div>
      <h2 className="mb-8 text-xl text-[#EB8F1E] font-medium">Similar Games</h2>
      <div className="cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 sm:gap-10 gap-5">
        <div className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
            src={game1}
            alt=""
          />
          <div
            className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            }}
          >
            <h3 className="text-base">Dice</h3>
            <p className="text-xs text-slate-300 font-light mb-2">
              iOS, Android
            </p>
            <button className="bg-[#EB8F1E] text-white px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
              Play Now
            </button>
          </div>
        </div>
        <div className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
            src={game2}
            alt=""
          />
          <div
            className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            }}
          >
            <h3 className="text-base">Teen Patti</h3>
            <p className="text-xs text-slate-300 font-light mb-2">
              iOS, Android
            </p>
            <button className="bg-[#EB8F1E] text-white px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
              Play Now
            </button>
          </div>
        </div>
        <div className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
            src={game3}
            alt=""
          />
          <div
            className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            }}
          >
            <h3 className="text-base">Roulate</h3>
            <p className="text-xs text-slate-300 font-light mb-2">
              iOS, Android
            </p>
            <button className="bg-[#EB8F1E] text-white px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
              Play Now
            </button>
          </div>
        </div>
        <div className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
            src={game4}
            alt=""
          />
          <div
            className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            }}
          >
            <h3 className="text-base">Golder Flower</h3>
            <p className="text-xs text-slate-300 font-light mb-2">
              iOS, Android
            </p>
            <button className="bg-[#EB8F1E] text-white px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
              Play Now
            </button>
          </div>
        </div>
        <div className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
            src={game5}
            alt=""
          />
          <div
            className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            }}
          >
            <h3 className="text-base">Gready</h3>
            <p className="text-xs text-slate-300 font-light mb-2">
              iOS, Android
            </p>
            <button className="bg-[#EB8F1E] text-white px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
              Play Now
            </button>
          </div>
        </div>
        <div className="item relative w-full overflow-hidden h-[280px] sm:h-[370px] rounded-2xl shadow-md group cursor-pointer border-4 border-transparent hover:border-white/80 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-top rounded-2xl transition-all duration-300 group-hover:scale-110"
            src={game6}
            alt=""
          />
          <div
            className="absolute w-full h-3/5 flex flex-col justify-end gap-1 text-white left-0 -bottom-12 rounded-b-2xl p-5 group-hover:pt-12 group-hover:bottom-0 transition-all duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
            }}
          >
            <h3 className="text-base">Gready 2</h3>
            <p className="text-xs text-slate-300 font-light mb-2">
              iOS, Android
            </p>
            <button className="bg-[#EB8F1E] text-white px-3 py-1 rounded-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarGames;
