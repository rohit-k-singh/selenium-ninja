import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div>
      {data?.map((ques, index) => (
        <div
          className="flex flex-col px-4 py-2"
          onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
        >
          <button className="py-3 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between">
            <p className="inline-block text-footnote light">{ques.question}</p>
            <FaAngleDown
              className={`transform duration-300 ease ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === index && (
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: "auto",
                transition: { duration: 0.3, type: "keyframes" },
              }}
              className="overflow-auto transition-max-height duration-700 ease-in-out"
            >
              <div>{ques?.answer}</div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
