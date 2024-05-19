import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import member1 from "../../assets/team/CEO.jpg"
import member2 from "../../assets/team/cfo.jpg"
import member3 from "../../assets/team/founder.jpg"
import member4 from "../../assets/team/Manager (2).jpg"

const TeamMembers = () => {
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
            <SwiperSlide className="h-150px">
              <div className="h-[450px] relative">
                <img
                  className="h-full w-full object-cover object-top"
                  src={member1}
                />
                <div className="absolute w-full p-5 bottom-0 bg-white/50 backdrop-blur-[3px]">
                  <h3 className="text-lg">Alex Johnson</h3>
                  <p className="text-sm">Lead Game Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[450px] relative">
                <img
                  className="h-full w-full object-cover object-top"
                  src={member2}
                />
                <div className="absolute w-full p-5 bottom-0 bg-white/50 backdrop-blur-[3px]">
                  <h3 className="text-lg">Emily Rodriguez</h3>
                  <p className="text-sm">Art Director</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[450px] relative">
                <img
                  className="h-full w-full object-cover object-top"
                  src={member3}
                />
                <div className="absolute w-full p-5 bottom-0 bg-white/50 backdrop-blur-[3px]">
                  <h3 className="text-lg">Michael Carter</h3>
                  <p className="text-sm">CEO</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[450px] relative">
                <img
                  className="h-full w-full object-cover object-top"
                  src={member4}
                />
                <div className="absolute w-full p-5 bottom-0 bg-white/50 backdrop-blur-[3px]">
                  <h3 className="text-lg">Sarah Taylor</h3>
                  <p className="text-sm"> Software Engineer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default TeamMembers;