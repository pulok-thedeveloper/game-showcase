/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white/10 cursor-pointer backdrop-blur-xl shadow-md p-5 rounded-lg"
    >
      <h4 className={`flex justify-between items-center ${isOpen && "mb-3"}`}>
        <span>{item.question}</span>
        {isOpen ? (
          <FaCircleMinus className="text-[#EB8F1E] text-xl" />
        ) : (
          <FaCirclePlus className="text-[#EB8F1E] text-xl" />
        )}
      </h4>
      <p
        className={`px-5 text-sm font-light leading-loose overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-auto" : "max-h-0"
        }`}
      >
        {item.answer}
      </p>
    </li>
  );
};

export default FAQItem;
