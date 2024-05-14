/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className="faqItem bg-white/10 cursor-pointer backdrop-blur-xl shadow-md p-5 rounded-lg transition-all duration-500"
    >
      <h4
        className={`flex justify-between items-center ${
          isOpen ? "mb-3" : "mb-0"
        }`}
      >
        <span>{item.question}</span>
        {isOpen ? (
          <FaCircleMinus className="text-[#EB8F1E] text-xl" />
        ) : (
          <FaCirclePlus className="text-[#EB8F1E] text-xl" />
        )}
      </h4>
      <p
        className={`details px-5 text-sm font-light transition-all duration-300 overflow-hidden ${
          isOpen ? "leading-loose opacity-1" : "leading-[0] opacity-0"
        }`}
      >
        {item.answer}
      </p>
    </li>
  );
};

export default FAQItem;
