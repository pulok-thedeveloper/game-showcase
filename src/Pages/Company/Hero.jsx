import { useEffect } from "react";
import vid1 from "/assets/company_hero.mp4";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {

    const cicrleAnimate = () => {
        const text = document.querySelector('.circle-animate .text p');
        text.innerHTML = text.innerText
          .split("")
          .map((char, i) => `<span style="transform:rotate(${i* 8}deg)">${char}</span>`)
          .join("");
    }

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cicrleAnimate();
    }
  }, []);

  return (
    <div
      className="xl:min-h-[80vh] relative px-16 sm:px-24 min-[1365px]:px-36"
      style={{
        background: "radial-gradient(#A05D86, 30%, #22031F)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-white/10 backdrop-blur-2xl"></div>

      <div className="text-white relative h-full z-20 py-40 flex flex-col xl:grid xl:grid-cols-3 xl:gap-40 gap-y-20">
        <h1 className="text-4xl sm:text-6xl leading-relaxed sm:leading-loose col-span-2">
          We&apos;re an independent game development studio where new ideas
          count & every voice is heard
        </h1>

        <div className="w-full xl:absolute md:w-2/3 xl:w-1/3 right-0 bottom-0 self-center">
          <div className="relative">
            <video
              src={vid1}
              autoPlay={true}
              controls={false}
              loop
              muted
              onLoadedData={(e) => e.target.play()}
            ></video>
            <div className="circle-animate absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#EB8F1E]">
              <div className="relative flex items-center justify-center w-full h-full">
                <FaPlay className="text-2xl" />
                <div className="absolute text w-full h-full">
                  <p className="uppercase">
                    Game Showcase - Play Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
