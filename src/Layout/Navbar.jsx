import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".navbar");
      const innerNav = document.querySelector(".innerNav");
      const isScrolled = window.scrollY > 100;

      nav.classList.toggle("top-0", isScrolled);
      nav.classList.toggle("p-0", isScrolled);
      nav.classList.toggle("top-4", !isScrolled);
      nav.classList.toggle("px-10", !isScrolled);
      nav.classList.toggle("sm:px-16", !isScrolled);
      nav.classList.toggle("xl:px-24", !isScrolled);

      innerNav.classList.toggle("rounded-none", isScrolled);
      innerNav.classList.toggle("rounded-xl", !isScrolled);
    });
  }, []);
  return (
    <div className="navbar transition-all fixed top-4 z-50 px-10 sm:px-16 xl:px-24 w-full">
      <div className="innerNav bg-white/10 backdrop-blur-xl px-8 rounded-xl h-20 flex justify-between items-center">
        <div className="logo flex items-center h-full">
          <p className="text-[#EB8F1E] text-2xl josefin-sans font-semibold uppercase">
            Game Showcase
          </p>
        </div>

        <nav>
          <ul className="hidden md:flex gap-x-10 text-white uppercase">
            <li>
              <NavLink className="py-2 hover:text-[#EB8F1E]" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2 hover:text-[#EB8F1E]" to="/games">
                Games
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2 hover:text-[#EB8F1E]" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2 hover:text-[#EB8F1E]" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="py-2 hover:text-[#EB8F1E]" to="/blogs">
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="block md:hidden">
          <span
            onClick={() => setMobileNav(!mobileNav)}
            className="text-white text-3xl p-2 cursor-pointer"
          >
            <HiOutlineBars3BottomRight />
          </span>
        </div>

        <button className="hidden md:block bg-[#EB8F1E] text-white px-5 py-2 rounded-md shadow-[3px_5px_3px_#BC6F10] active:shadow-none active:translate-y-[5px] transition-all duration-100">
          Let&apos;s Talk
        </button>
      </div>
      <nav
        className={`fixed top-0  h-screen w-full transition-all z-50 duration-500 bg-white/5 backdrop-blur-md ${
          mobileNav ? "left-0" : "left-full"
        }`}
      >
        <div className="px-14 py-8 flex justify-end">
          <span
            onClick={() => setMobileNav(!mobileNav)}
            className="text-white text-3xl cursor-pointer p-2"
          >
            <IoMdClose />
          </span>
        </div>
        <ul
          onClick={() => setMobileNav(!mobileNav)}
          className="flex items-center flex-col gap-y-14 text-white uppercase text-2xl"
        >
          <li>
            <NavLink className="py-2 hover:text-[#EB8F1E]" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 hover:text-[#EB8F1E]" to="/games">
              Games
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 hover:text-[#EB8F1E]" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 hover:text-[#EB8F1E]" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 hover:text-[#EB8F1E]" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <button className="bg-[#EB8F1E] text-white px-8 py-2 rounded-md shadow-[3px_5px_3px_#BC6F10] active:shadow-none active:translate-y-[5px] transition-all duration-100">
              Let&apos;s Talk
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
