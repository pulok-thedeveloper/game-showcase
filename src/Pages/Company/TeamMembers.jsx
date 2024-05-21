import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const TeamMembers = () => {
  const [members, setMembers] = useState();

  useEffect(() => {
    fetch("team_members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="bg-[#110C1D] px-12 sm:px-16 md:px-24 xl:px-36 py-20">
      <div className="title mb-20 text-center permanent-marker-regular text-6xl">
        <span className="text-white">Meet </span>{" "}
        <span className="text-[#EB8F1E]"> Our Team</span>
      </div>
      <div>
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
          {members?.map((member) => (
            <SwiperSlide key={member?.id} className="h-150px">
              <div className="h-[450px] relative">
                <img
                  className="h-full w-full object-cover object-top"
                  src={member?.image}
                />
                <div className="absolute w-full p-5 bottom-0 bg-white/50 backdrop-blur-[3px]">
                  <h3 className="text-lg">{member?.name}</h3>
                  <p className="text-sm">{member?.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMembers;
