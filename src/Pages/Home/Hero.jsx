import Herobg from "/assets/hero_bg2.jpg";
const Hero = () => {
  return (
    <header className="h-[100vh] relative">
      <img
        className="absolute top-0 w-full object-cover object-top h-full"
        alt=""
        src={Herobg}
      />
      <div className="absolute top-0 w-full h-full bg-black/60 backdrop-blur-[3px]"></div>
      <div className="relative w-full h-full pt-28 px-12 md:px-20 lg:px-24 xl:px-40 md:flex grid grid-rows-2 items-center justify-between">
        <div className="left w-full md:w-4/6 text-white flex flex-col justify-start gap-8">
          <h1 className="flex flex-col md:items-start items-center">
            <span className="text-[#EB8F1E] font-medium text-xl">
              Game Art And
            </span>
            <span className="text-6xl min-[340px]:text-7xl sm:text-8xl permanent-marker-regular">
              Development
            </span>
            <span className="text-6xl min-[340px]:text-7xl sm:text-8xl text-[#EB8F1E] permanent-marker-regular">
              Studio
            </span>
          </h1>
          <p className="text-center md:text-left md:w-3/5 leading-loose">
            Gameox - a global game development partner that helps developers and
            publishers to build games by providing custom engineering and game
            art services.
          </p>
          <div className="flex justify-center md:block">
            <button className="bg-[#EB8F1E] text-white px-5 py-2 rounded-md shadow-[3px_5px_3px_#BC6F10] active:shadow-none active:translate-y-[5px] transition-all duration-100">
              Learn More
            </button>
          </div>
        </div>
        <div className="right flex flex-grow justify-end">
          <dotlottie-player
            className="md:h-[500px]"
            src="https://lottie.host/a17e7ccf-6881-4b15-91d0-129470065725/ybvh3fX5fG.lottie"
            background="transparent"
            speed="0.3"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </header>
  );
};

export default Hero;
