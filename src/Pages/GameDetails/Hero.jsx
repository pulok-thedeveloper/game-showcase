import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import img1 from "../../assets/Teen_Patti/1.png";
import img2 from "../../assets/Teen_Patti/2.png";
import vid1 from "../../assets/Teen_Patti/3.mov";
import google_play_btn from "../../assets/google_play_btn.png";
import app_store_btn from "../../assets/app_store_btn.png";

import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      className="min-h-[100vh] pt-44 px-12 md:px-20 lg:px-24 xl:px-40 xl:pl-[300px] grid grid-cols-3 gap-20"
      style={{
        background: "radial-gradient(#27174F, 30%, #10092C)",
      }}
    >
      <div className="col-span-1">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : false}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={img1} alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay loop>
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay loop>
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-2 text-white">
        <h1 className="text-7xl font-medium mb-10">Teen Patti</h1>
        <p className="font-light leading-loose w-4/5 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
          urna nec urna viverra consequat ac vel ante. Aenean vulputate, ipsum
          quis feugiat convallis, ex quam imperdiet leo, sit amet vehicula quam
          lorem eget quam. Nullam quis dui vitae leo mattis posuere at a urna.
        </p>
        <div className="mb-10">
          <ul className="flex flex-col w-1/2">
            <li className="py-5 border-b border-white/50">
              <span>Category :</span> <span>Entertainment</span>
            </li>
            <li className="py-5 border-b border-white/50">
              <span>Devices :</span> <span>Android, ios</span>
            </li>
            <li className="py-5 border-b border-white/50">
              <span>Players Interact :</span> <span>Interactive Game</span>
            </li>
            <li className="py-5 border-b border-white/50">
              <span>Languages :</span> <span>CN, EN, AR</span>
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
