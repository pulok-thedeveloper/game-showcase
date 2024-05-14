import { useEffect } from "react";
import logo1 from "../../assets/game_logo/logo1.webp";
import logo2 from "../../assets/game_logo/logo2.webp";
import logo3 from "../../assets/game_logo/logo3.webp";
import logo4 from "../../assets/game_logo/logo4.webp";
import logo5 from "../../assets/game_logo/logo5.webp";
import logo6 from "../../assets/game_logo/logo6.webp";
import logo7 from "../../assets/game_logo/logo7.webp";
import logo8 from "../../assets/game_logo/logo8.jpeg";
import logo9 from "../../assets/game_logo/logo9.jpeg";

const GameLogo = () => {
  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicateItem = item.cloneNode(true);
        duplicateItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicateItem);
      });
    });
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);
  return (
    <div className="scroller overflow-hidden">
      <ul className="scroller_inner relative flex sm:gap-10 gap-5">
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo1} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo2} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo3} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo4} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo5} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo6} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo7} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo8} alt="" />
        </li>
        <li className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
          <img className="sm:max-w-32 max-w-24" src={logo9} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default GameLogo;
