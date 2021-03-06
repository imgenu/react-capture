import React, { useState } from "react";
import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal, fade } from "../animation";
const FAQComponent = ({ questionText }) => {
  return (
    <Toggle title={questionText}>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, modi.
        </p>
      </div>
    </Toggle>
  );
};
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any question<span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <FAQComponent questionText={"How Do I Start?"} />
        <FAQComponent questionText={"Daily Schedule"} />
        <FAQComponent questionText={"Different Payment Methods"} />
        <FAQComponent questionText={"What Product Do You Offer."} />
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
