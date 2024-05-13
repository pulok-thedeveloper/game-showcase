import { useEffect, useState } from "react";
import FAQItem from "../../Components/FAQItem";
const Faq = () => {
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    fetch("faq.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  });

  return (
    <div className="bg-[#110C1D] px-36 pt-40 pb-20 text-white ">
      <div className="title mb-10 text-center">
        <h3 className="text-lg italic font-light mb-2">Do You Have</h3>
        <h2 className="permanent-marker-regular text-6xl">
          <span> Any</span> <span className="text-[#EB8F1E]">Questions</span>
        </h2>
      </div>
      <div className="w-3/5 mx-auto py-5">
        <ul className="flex flex-col gap-5">
          {faq?.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
