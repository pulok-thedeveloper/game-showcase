import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import payment from "/assets/payment.png";

const Footer = () => {
  return (
    <div className=" bg-[#151828] text-white px-12 sm:px-16 md:px-24 xl:px-36 py-20">
      <div className="grid grid-cols-6 gap-20">
        <div className="lg:col-span-2 col-span-6">
          <div className="logo text-3xl text-[#EB8F1E] font-semibold uppercase mb-5">
            Game Showcase
          </div>
          <p className="font-light text-sm leading-loose mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tempus finibus nulla a tempus. Proin laoreet ut tellus a finibus.
            Cras tempor nulla vel dignissim posuere. Proin bibendum, dolor eu
            scelerisque pharetra, purus ipsum ultricies.
          </p>
          <img className="w-full" src={payment} />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-3 lg:justify-self-center">
          <h4 className="mb-3">Our Games</h4>
          <ul className="flex flex-col gap-2 text-[#D6D9D3]">
            <li className="text-sm font-light">Dice</li>
            <li className="text-sm font-light">Teen Patti</li>
            <li className="text-sm font-light">Golder Flower</li>
            <li className="text-sm font-light">Roulate</li>
            <li className="text-sm font-light">Fruit Machine</li>
            <li className="text-sm font-light">Gready</li>
            <li className="text-sm font-light">Gready 2</li>
          </ul>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-3 lg:justify-self-center">
          <h4 className="mb-3">Pages</h4>
          <ul className="flex flex-col gap-2 text-[#D6D9D3]">
            <li className="text-sm font-light">Home</li>
            <li className="text-sm font-light">All Games</li>
            <li className="text-sm font-light">About</li>
            <li className="text-sm font-light">Contact</li>
            <li className="text-sm font-light">Blog</li>
            <li className="text-sm font-light">FAQ</li>
          </ul>
        </div>
        <div className="md:col-span-2 col-span-6 grid grid-rows-2">
          <div>
            <h4 className="mb-3">Newsletter</h4>
            <form>
              <div className="flex mb-2">
                <input
                  className="px-4 py-3 rounded-md bg-white/10 backdrop-blur-xl outline-0 text-sm w-full border border-white/10 focus:border-[#EB8F1E] transition-all duration-300"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="px-4 cursor-pointer bg-[#EB8F1E] text-white rounded-tr-md rounded-br-md -translate-x-full">
                  <FaPaperPlane />
                </button>
              </div>
              <p className="text-xs font-light text-[#D6D9D3]/50">
                Your email is safe with us. We don&apos;t spam.
              </p>
            </form>
          </div>
          <div className="self-end">
            <h4 className="mb-3">Follow Us On</h4>
            <div>
              <ul className="flex gap-3">
                <li className="bg-white/10 backdrop-blur-xl rounded-md p-2 cursor-pointer hover:bg-[#EB8F1E] hover:text-white transition-all duration-300">
                  <FaFacebookF className="text-lg" />
                </li>
                <li className="bg-white/10 backdrop-blur-xl rounded-md p-2 cursor-pointer hover:bg-[#EB8F1E] hover:text-white transition-all duration-300">
                  <FaTwitter className="text-lg" />
                </li>
                <li className="bg-white/10 backdrop-blur-xl rounded-md p-2 cursor-pointer hover:bg-[#EB8F1E] hover:text-white transition-all duration-300">
                  <PiInstagramLogoFill className="text-lg" />
                </li>
                <li className="bg-white/10 backdrop-blur-xl rounded-md p-2 cursor-pointer hover:bg-[#EB8F1E] hover:text-white transition-all duration-300">
                  <FaWhatsapp className="text-lg" />
                </li>
                <li className="bg-white/10 backdrop-blur-xl rounded-md p-2 cursor-pointer hover:bg-[#EB8F1E] hover:text-white transition-all duration-300">
                  <FaTelegramPlane className="text-lg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
