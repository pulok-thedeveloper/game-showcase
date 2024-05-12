import GameLogo from "./GameLogo";
import game1 from "../../assets/Dice/1.png";
import game2 from "../../assets/Teen_Patti/1.png";
import game3 from "../../assets/Roulate/1.png";
import game4 from "../../assets/Golder_Flower/1.png";
import game5 from "../../assets/Gready/1.png";
import game6 from "../../assets/Gready_2/2.png";

const FeaturedGames = () => {
  return (
    <div
      className="featured-games px-36 py-20 min-h-[100vh] relative overflow-hidden bg-[#1C1F21] text-white"
      style={{
        background:
          "linear-gradient(250.59deg, #322c38 0%, #514e61 28.53%, #1c2137 75.52%)",
      }}
    >
      <GameLogo></GameLogo>

      <div className="title mt-20 mb-8 text-center permanent-marker-regular text-5xl text-[#EB8F1E]">
        Featured Games
      </div>
      <p className="text-center w-2/5 mx-auto leading-loose">
        We offer a full range of video game art and development services for
        creating entertainment projects based on our expertise gained in 50+
        accomplished projects for partners, as well as in publishing our own
        titles.
      </p>

      <div className="cards mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
        <div className="flip-card relative">
          <div className="flip-card-front">
            <img className="h-full w-full" alt="" src={game1} />
            <div className="inner absolute bottom-0 p-5 w-full">
              <h3 className="text-xl font-medium">DICE</h3>
            </div>
          </div>
          <div className="flip-card-back">
            <img className="h-full w-full opacity-0" alt="" src={game1} />
            <div className="inner absolute bottom-0 p-5 w-full">
              <h3>DICE</h3>
              <p className="text-xs leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                suscipit erat.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <img className="h-full w-full" alt="" src={game2} />
        </div>
        <div className="flip-card">
          <img className="h-full w-full" alt="" src={game3} />
        </div>
        <div className="flip-card">
          <img className="h-full w-full" alt="" src={game4} />
        </div>
        <div className="flip-card">
          <img className="h-full w-full" alt="" src={game5} />
        </div>
        <div className="flip-card">
          <img className="h-full w-full" alt="" src={game6} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedGames;
