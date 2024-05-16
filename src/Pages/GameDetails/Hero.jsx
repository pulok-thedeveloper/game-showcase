import img1 from "../../assets/Teen_Patti/1.png";
import google_play_btn from "../../assets/google_play_btn.png";
import app_store_btn from "../../assets/app_store_btn.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Hero = () => {
  return (
    <div
      className="min-h-[100vh] pt-44 pb-36 px-12 md:px-20 lg:px-24 xl:px-40 grid sm:grid-cols-2 xl:grid-cols-3 md:gap-20 gap-10"
      style={{
        background: "radial-gradient(#27174F, 30%, #10092C)",
      }}
    >
      <div className="sm:col-span-1 col-span-2 sm:h-[80vh]">
        <img
          className="w-full h-full object-cover object-top"
          src={img1}
          alt=""
        />
      </div>
      <div className="xl:col-span-2 text-white">
        <h1 className="text-7xl font-medium mb-10">Teen Patti</h1>
        <p className="font-light leading-loose xl:w-4/5 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
          urna nec urna viverra consequat ac vel ante. Aenean vulputate, ipsum
          quis feugiat convallis, ex quam imperdiet leo, sit amet vehicula quam
          lorem eget quam. Nullam quis dui vitae leo mattis posuere at a urna.
        </p>
        <div className="mb-10">
          <ul className="flex flex-col xl:w-1/2">
            <li className="py-5 border-b border-white/50">
              <span>Category : </span> <span className="font-light">Entertainment</span>
            </li>
            <li className="py-5 border-b border-white/50">
              <span>Devices : </span> <span className="font-light">Android, ios</span>
            </li>
            <li className="py-5 border-b border-white/50">
              <span>Players Interact : </span> <span className="font-light">Interactive Game</span>
            </li>
            <li className="py-5 border-b border-white/50">
              <span>Languages : </span> <span className="font-light">CN, EN, AR</span>
            </li>
          </ul>
        </div>
        <div className="flex">
          <img className="w-56" src={google_play_btn} alt="" />
          <img className="w-56" src={app_store_btn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
