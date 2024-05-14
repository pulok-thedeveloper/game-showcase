import teamImg from "../../assets/expert_team.jpg";
import expertise from "../../assets/Experties/experties.png";
import design from "../../assets/Experties/innovative_design.png";
import succcess from "../../assets/Experties/succcess.png";
import technology from "../../assets/Experties/technology.png";
import community from "../../assets/Experties/community.png";
import innovation from "../../assets/Experties/continuous-innovation.png";

const Expertise = () => {
  return (
    <div className="relative min-h-[100vh] bg-[#151828] px-16 sm:px-24 xl:px-36 py-20 grid xl:grid-cols-2 items-center gap-20 text-white ">
      <div className="absolute top-1 left-0 w-0 h-0 border-r-[99vw] border-r-transparent border-b-[5vw] border-b-[#151828] -mt-[5vw]"></div>
      <div className="absolute z-20 bottom-1 right-0 translate-y-full w-0 h-0 border-l-[99vw] border-l-transparent border-t-[5vw] border-t-[#151828] mt-[5vw]"></div>
      <div>
        <div className="title mb-8">
          <h2 className="permanent-marker-regular text-6xl mb-3">
            <span> Our</span> <span className="text-[#EB8F1E]">Experties</span>
          </h2>
          <h3 className="text-xl italic font-light">
            In Mini Game Development
          </h3>
        </div>
        <p className="description leading-loose font-extralight">
          Explore our proficiency in crafting captivating mini games and
          compelling card games. Discover our team&apos;s wealth of experience,
          remarkable achievements, and forward-thinking approaches that redefine
          game development in these genres.
        </p>
        <div className="experties mt-8">
          <ul className="grid md:grid-cols-2 gap-10">
            <li className="flex gap-5 items-start">
              <div className="bg-white/10 backdrop-blur-xl shadow-md p-3 rounded-lg">
                <img className="min-w-8" src={expertise} alt="" />
              </div>
              <div>
                <h4 className="mb-2">Expertise in Diverse Genres</h4>
                <p className="text-xs font-light leading-relaxed">
                  Showcase our versatility in developing a wide range of mini
                  games and card games, spanning from casual to competitive
                  experiences.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="bg-white/10 backdrop-blur-xl shadow-md p-3 rounded-lg">
                <img className="min-w-8" src={design} alt="" />
              </div>
              <div>
                <h4 className="mb-2">Innovative Design</h4>
                <p className="text-xs font-light leading-relaxed">
                  Illustrate our innovative design methodologies that breathe
                  life into every game, ensuring engaging gameplay mechanics and
                  captivating visual aesthetics.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="bg-white/10 backdrop-blur-xl shadow-md p-3 rounded-lg">
                <img className="min-w-8" src={succcess} alt="" />
              </div>
              <div>
                <h4 className="mb-2">Proven Success</h4>
                <p className="text-xs font-light leading-relaxed">
                  Highlight our track record of successful game launches and
                  industry accolades, demonstrating our ability to deliver
                  exceptional gaming experiences.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="bg-white/10 backdrop-blur-xl shadow-md p-3 rounded-lg">
                <img className="min-w-8" src={technology} alt="" />
              </div>
              <div>
                <h4 className="mb-2">Cutting-Edge Technology</h4>
                <p className="text-xs font-light leading-relaxed">
                  Discuss our utilization of cutting-edge technologies and tools
                  to push the boundaries of game development, delivering
                  immersive and seamless gaming experiences.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="bg-white/10 backdrop-blur-xl shadow-md p-3 rounded-lg">
                <img className="min-w-8" src={community} alt="" />
              </div>
              <div>
                <h4 className="mb-2">Community Engagement</h4>
                <p className="text-xs font-light leading-relaxed">
                  Showcase our commitment to fostering vibrant gaming
                  communities around our mini and card games, creating spaces
                  for players to connect, compete, and collaborate.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="bg-white/10 backdrop-blur-xl shadow-md p-3 rounded-lg">
                <img className="min-w-8" src={innovation} alt="" />
              </div>
              <div>
                <h4 className="mb-2">Continuous Innovation</h4>
                <p className="text-xs font-light leading-relaxed">
                  Illustrate our dedication to continuous innovation and
                  improvement, as we strive to stay ahead of industry trends and
                  deliver groundbreaking gaming experiences.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={teamImg} alt="" className="shadow-xl rounded-xl" />
      </div>
    </div>
  );
};

export default Expertise;
