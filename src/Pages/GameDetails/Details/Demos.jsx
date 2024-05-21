/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
const Demos = ({game}) => {

  return (
    <div className="max-h-[80vh]">
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
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {game?.videos?.map((video, i) => (
          <SwiperSlide key={i}>
            <video
              className="h-[70vh]"
              src={video}
              autoPlay={true}
              controls={false}
              loop
              muted
              onLoadedData={(e) => e.target.play()}
            ></video>
          </SwiperSlide>
        ))}

        {game?.images?.map((image, i) => (
          <SwiperSlide key={i}>
            <img className="h-[70vh]" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Demos;
