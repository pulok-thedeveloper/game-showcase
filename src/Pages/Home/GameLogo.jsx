/* eslint-disable react/prop-types */
import { useEffect } from "react";

const GameLogo = ({games}) => {
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
  }, [games]);

  return (
    <div className="scroller overflow-hidden">
      <ul className="scroller_inner relative flex sm:gap-10 gap-5">
        {games?.map((game) => (
          <li key={game.id} className="sm:p-4 p-2 rounded-3xl bg-white/10 backdrop-blur-xl shadow-md">
            <img className="sm:max-w-32 max-w-24" src={game.logo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameLogo;
