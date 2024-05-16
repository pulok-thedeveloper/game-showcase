import vid1 from "../../../assets/Teen_Patti/3.mov";
import img1 from "../../../assets/Teen_Patti/1.png";
import img2 from "../../../assets/Teen_Patti/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Demos = () => {

  return (
    <div className="max-h-[80vh]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1365: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            className="h-[70vh]"
            src={vid1}
            autoPlay={true}
            controls
            loop
            onLoadedData={(e) => e.target.play()}
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[70vh]" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[70vh]" src={img2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Demos;
