import bg from "../../assets/achievement_bg.jpg";

const Achievement = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="px-12 sm:px-16 md:px-24 xl:px-36 py-20 text-white bg-black/80 backdrop-blur-[5px] grid grid-cols-4 gap-5 justify-items-center">
        <div className="">
          <h2 className="text-8xl text-[#EB8F1E] font-medium">100+</h2>
          <p>Satisfied Clients</p>
        </div>
        <div className="">
          <h2 className="text-8xl text-[#EB8F1E] font-medium">50+</h2>
          <p>Team Members</p>
        </div>
        <div className="">
          <h2 className="text-8xl text-[#EB8F1E] font-medium">200+</h2>
          <p>Complete Projects</p>
        </div>
        <div className="">
          <h2 className="text-8xl text-[#EB8F1E] font-medium">5+</h2>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
