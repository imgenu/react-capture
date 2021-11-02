import React from "react";

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
    </div>
  );
};
const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any question<span>FAQ</span>
      </h2>
      <FAQComponent questionText={"How Do I Start?"} />
      <FAQComponent questionText={"Daily Schedule"} />
      <FAQComponent questionText={"Different Payment Methods"} />
      <FAQComponent questionText={"What Product Do You Offer."} />
    </div>
  );
};
export default FaqSection;
