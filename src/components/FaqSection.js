import React from "react";
import { About } from "../styles";
import styled from "styled-components";

const FAQComponent = ({ questionText }) => {
  return (
    <div className="question">
      <h4>{questionText}</h4>
      <div className="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, modi.
        </p>
      </div>
      <div className="faq-line"></div>
    </div>
  );
};
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any question<span>FAQ</span>
      </h2>
      <FAQComponent questionText={"How Do I Start?"} />
      <FAQComponent questionText={"Daily Schedule"} />
      <FAQComponent questionText={"Different Payment Methods"} />
      <FAQComponent questionText={"What Product Do You Offer."} />
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
