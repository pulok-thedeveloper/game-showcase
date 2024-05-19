import { FaDiscord, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

const Contact = () => {
  return (
    <div
      className="min-h-[100vh] relative px-16 sm:px-24 xl:px-36 py-40"
      style={{
        background: "radial-gradient(#A05D86, 30%, #10092C)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-white/10 backdrop-blur-2xl"></div>

      <div className="grid md:grid-cols-2 items-center gap-20 text-white relative z-20">
        <div>
          <div className=" mb-12">
            <div className="title mb-8">
              <h2 className="permanent-marker-regular text-6xl mb-3 leading-tight">
                <span className="text-[#EB8F1E]"> Contact</span> <span>Us</span>
              </h2>
              <h3 className="text-xl italic font-light">
                Let&apos;s work together
              </h3>
            </div>
            <p className="description leading-loose font-extralight">
              Let us help you become even greater at what you do. Fill out the
              following form and we will get back to you in the next 24 hours.
            </p>
          </div>
          <form className="flex flex-col gap-10">
            <div className="flex gap-5 items-start">
              <div className="px-4 py-1 rounded-full border border-white">
                01
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-3">What&apos;s your name?</label>
                <input
                  className="bg-transparent outline-0 border-0 border-b border-white/50 py-3 w-full focus:border-[#EB8F1E] transition-border duration-300"
                  type="text"
                  placeholder="Type your full name"
                />
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="px-4 py-1 rounded-full border border-white">
                02
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-3">What&apos;s your email address?</label>
                <input
                  className="bg-transparent outline-0 border-0 border-b border-white/50 py-3 w-full focus:border-[#EB8F1E] transition-border duration-300"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="px-4 py-1 rounded-full border border-white">
                03
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-3">What&apos;s your subject?</label>
                <input
                  className="bg-transparent outline-0 border-0 border-b border-white/50 py-3 w-full focus:border-[#EB8F1E] transition-border duration-300"
                  type="test"
                  placeholder="Type your subject"
                />
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="px-4 py-1 rounded-full border border-white">
                04
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-3">What&apos;s your message?</label>
                <textarea
                  className="bg-transparent outline-0 border-0 border-b border-white/50 py-3 w-full focus:border-[#EB8F1E] transition-border duration-300"
                  rows={5}
                  placeholder="Type your message"
                ></textarea>
              </div>
            </div>
            <div>
              <button className="rounded-xl px-5 py-2 border border-white uppercase flex items-center gap-2 hover:bg-[#EB8F1E] hover:border-[#EB8F1E] transition-all duration-300">
                <span>Send message</span>
                <MdArrowOutward className="text-lg" />
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-row md:flex-col md:items-end justify-between gap-10 md:text-right">
          <div>
            <h3 className="uppercase mb-4 text-lg">Address</h3>
            <div className="leading-loose font-light">
              <p>2154 Glen Falls Road</p>
              <p>Plymouth Meeting,</p>
              <p>Pennsylvania(PA), 19462</p>
            </div>
          </div>
          <div>
            <h3 className="uppercase mb-4 text-lg">Contact</h3>
            <div className="leading-loose font-light">
              <p>example@email.com</p>
              <p>+11 2158 973027</p>
              <p>+11 4845 996738</p>
            </div>
          </div>
          <div>
            <h3 className="uppercase mb-4 text-lg">Social</h3>
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
                <FaDiscord className="text-lg" />
              </li>
              <li className="bg-white/10 backdrop-blur-xl rounded-md p-2 cursor-pointer hover:bg-[#EB8F1E] hover:text-white transition-all duration-300">
                <FaYoutube className="text-lg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
