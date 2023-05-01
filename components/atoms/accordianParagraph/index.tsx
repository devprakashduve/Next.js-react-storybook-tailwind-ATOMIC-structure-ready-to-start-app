import React from "react";
import { AccordianParaProps } from "./_accordianParagraph.interface";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";

const AccordianParagraph = (props: AccordianParaProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
        onClick={handleAccordionClick}
      >
        <span>{props.title}</span>
        <ChevronUpIcon
          className={`${
            isOpen ? "transform rotate-180" : ""
          } w-5 h-5 text-gray-500`}
        />
      </button>
      <Transition
        show={isOpen}
        enter="transition duration-10 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="p-4">{props.content}</div>
      </Transition>
    </>
  );
};

export default AccordianParagraph;
