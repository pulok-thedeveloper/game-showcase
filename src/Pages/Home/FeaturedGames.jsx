import GameLogo from "./GameLogo";
import game1 from "../../assets/Dice/1.png";
import game2 from "../../assets/Teen_Patti/1.png";
import game3 from "../../assets/Roulate/1.png";
import game4 from "../../assets/Golder_Flower/1.png";
import game5 from "../../assets/Gready/1.png";
import game6 from "../../assets/Gready_2/2.png";
import game1Logo from "../../assets/game_logo/logo1.webp";

const FeaturedGames = () => {
  return (
    <div
      className="px-36 py-20 pb-40 min-h-[100vh]"
      style={{
        background:
          "linear-gradient(250.59deg, #322c38 0%, #514e61 28.53%, #1c2137 75.52%)",
      }}
    >
      <GameLogo></GameLogo>

      <section className="featured-games relative text-white">
        <div className="title mt-20 mb-8 text-center permanent-marker-regular text-5xl">
          <span className="text-[#EB8F1E]"> Featured</span> <span>Games</span>
        </div>
        <p className="text-center w-2/5 mx-auto leading-loose font-light">
          We offer a full range of video game art and development services for
          creating entertainment projects based on our expertise gained in 50+
          accomplished projects for partners, as well as in publishing our own
          titles.
        </p>

        <div className="cards mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
          <div className="flip-card relative cursor-pointer">
            <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <img className="h-full w-full rounded-xl" alt="" src={game1} />
              <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                <h3 className="text-xl font-medium">Dice</h3>
              </div>
            </div>
            <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
              <img className="h-full w-full opacity-20" alt="" src={game1} />
              <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                  <img src={game1Logo} alt="" className="w-1/3 rounded-xl" />
                  <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                    Dice
                  </h3>
                  <p className="text-xs text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce suscipit erat.{" "}
                  </p>
                  <button className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card relative cursor-pointer">
            <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <img className="h-full w-full rounded-xl" alt="" src={game2} />
              <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                <h3 className="text-xl font-medium">Teen Patti</h3>
              </div>
            </div>
            <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
              <img className="h-full w-full opacity-20" alt="" src={game2} />
              <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                  <img src={game1Logo} alt="" className="w-1/3 rounded-xl" />
                  <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                    Teen Patti
                  </h3>
                  <p className="text-xs text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce suscipit erat.{" "}
                  </p>
                  <button className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card relative cursor-pointer">
            <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <img className="h-full w-full rounded-xl" alt="" src={game3} />
              <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                <h3 className="text-xl font-medium">Roulate</h3>
              </div>
            </div>
            <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
              <img className="h-full w-full opacity-20" alt="" src={game3} />
              <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                  <img src={game1Logo} alt="" className="w-1/3 rounded-xl" />
                  <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                    Roulate
                  </h3>
                  <p className="text-xs text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce suscipit erat.{" "}
                  </p>
                  <button className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card relative cursor-pointer">
            <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <img className="h-full w-full rounded-xl" alt="" src={game4} />
              <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                <h3 className="text-xl font-medium">Golder Flower</h3>
              </div>
            </div>
            <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
              <img className="h-full w-full opacity-20" alt="" src={game4} />
              <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                  <img src={game1Logo} alt="" className="w-1/3 rounded-xl" />
                  <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                    Golder Flower
                  </h3>
                  <p className="text-xs text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce suscipit erat.{" "}
                  </p>
                  <button className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card relative cursor-pointer">
            <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <img className="h-full w-full rounded-xl" alt="" src={game5} />
              <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                <h3 className="text-xl font-medium">Gready</h3>
              </div>
            </div>
            <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
              <img className="h-full w-full opacity-20" alt="" src={game5} />
              <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                  <img src={game1Logo} alt="" className="w-1/3 rounded-xl" />
                  <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                    Gready
                  </h3>
                  <p className="text-xs text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce suscipit erat.{" "}
                  </p>
                  <button className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card relative cursor-pointer">
            <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
              <img className="h-full w-full rounded-xl" alt="" src={game6} />
              <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                <h3 className="text-xl font-medium">Gready 2</h3>
              </div>
            </div>
            <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
              <img className="h-full w-full opacity-20" alt="" src={game6} />
              <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                  <img src={game1Logo} alt="" className="w-1/3 rounded-xl" />
                  <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                    Gready 2
                  </h3>
                  <p className="text-xs text-center leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce suscipit erat.{" "}
                  </p>
                  <button className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedGames;
