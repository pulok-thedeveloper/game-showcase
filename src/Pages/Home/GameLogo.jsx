import logo1 from "../../assets/game_logo/logo1.webp";
import logo2 from "../../assets/game_logo/logo2.webp";
import logo3 from "../../assets/game_logo/logo3.webp";
import logo4 from "../../assets/game_logo/logo4.webp";
import logo5 from "../../assets/game_logo/logo5.webp";
import logo6 from "../../assets/game_logo/logo6.webp";
import logo7 from "../../assets/game_logo/logo7.webp";
import logo8 from "../../assets/game_logo/logo8.jpeg";
import logo9 from "../../assets/game_logo/logo9.jpeg";

const GameLogo = () => {
  return (
    <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 3xl:grid-cols-9 gap-10">
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo1} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo2} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo3} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo4} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo5} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo6} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo7} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo8} alt="" />
      </div>
      <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
        <img src={logo9} alt="" />
      </div>
    </div>
  );
};

export default GameLogo;
