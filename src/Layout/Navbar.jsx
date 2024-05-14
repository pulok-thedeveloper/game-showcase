import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-4 z-50 px-24 w-full">
      <div className="bg-white/10 backdrop-blur-xl px-8 rounded-xl h-20 flex justify-between items-center">
        <div className="logo flex items-center h-full">
          <p className="text-[#EB8F1E] text-2xl josefin-sans font-semibold uppercase">
            Game Showcase
          </p>
        </div>

        <nav>
          <ul className="flex gap-x-10 text-white uppercase">
            <li>
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/games">
                Games
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/blogs">
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="bg-[#EB8F1E] text-white px-5 py-2 rounded-md shadow-[3px_5px_3px_#BC6F10] active:shadow-none active:translate-y-[5px] transition-all duration-100">
          Let&apos;s Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
