import GameLogo from "./GameLogo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const FeaturedGames = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div
      className="px-16 sm:px-24 xl:px-36 py-20 pb-40 min-h-[100vh]"
      style={{
        background:
          "linear-gradient(250.59deg, #322c38 0%, #514e61 28.53%, #1c2137 75.52%)",
      }}
    >
      <GameLogo></GameLogo>

      <section className="featured-games relative text-white">
        <div className="title mt-20 mb-8 text-center permanent-marker-regular text-6xl">
          <span className="text-[#EB8F1E]"> Featured</span> <span>Games</span>
        </div>
        <p className="text-center md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-auto leading-loose font-light">
          We offer a full range of video game art and development services for
          creating entertainment projects based on our expertise gained in 50+
          accomplished projects for partners, as well as in publishing our own
          titles.
        </p>
        {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 */}
        {/* 2xl:grid-cols-6 sm:gap-10 gap-5 */}
        <div className="cards mt-16 mb-10 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {games?.map((item) => (
              <SwiperSlide className="py-10" key={item?.id}>
                <div className="flip-card relative cursor-pointer">
                  <div className="flip-card-front p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md">
                    <img
                      className="h-full w-full rounded-xl"
                      alt=""
                      src={item?.images.length && item.images[0]}
                    />
                    <div className="inner absolute bottom-4 rounded-xl p-5 w-[calc(100%-2rem)]">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                    </div>
                  </div>
                  <div className="flip-card-back p-4 rounded-xl bg-white/10 backdrop-blur-xl shadow-md border border-white/10">
                    <img
                      className="h-full w-full opacity-20"
                      alt=""
                      src={item?.images.length && item.images[0]}
                    />
                    <div className="inner absolute p-3 w-full h-full left-0 top-1/2">
                      <div className="bg-[#1C2137]/30 border border-white/10 backdrop-blur-xl p-2 h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                        <img
                          src={item?.logo}
                          alt=""
                          className="w-1/3 rounded-xl"
                        />
                        <h3 className="permanent-marker-regular text-[#EB8F1E] text-2xl">
                          {item?.title}
                        </h3>
                        <p className="text-xs text-center leading-normal">
                          {item?.short_description?.slice(0, 80) + "..."}
                        </p>
                        <Link
                          to={`games/${item?.title
                            .toLowerCase()
                            .replace(" ", "_")}`}
                          className="bg-[#EB8F1E] text-white px-3 py-2 rounded-md text-sm"
                        >
                          Play Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center">
          <Link
            to="/games"
            className="hidden md:block bg-[#EB8F1E] text-white px-5 py-2 rounded-md shadow-[3px_5px_3px_#BC6F10] active:shadow-none active:translate-y-[5px] transition-all duration-100"
          >
            View all games
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedGames;
