import React, { useState } from "react";
import { AccordianProps } from "./_accordian.interface";
import AccordianParagraph from "../../atoms/accordianParagraph";
import { AccordianParaProps } from "../../atoms/accordianParagraph/_accordianParagraph.interface";

const Accordian = (props: AccordianProps) => {
  return (
    <>
      {props.accordianData?.map((item: AccordianParaProps, index: number) => (
        <AccordianParagraph
          title={item.title}
          content={item.content}
          key={index}
        />
      ))}
    </>
  );
};

export default Accordian;
