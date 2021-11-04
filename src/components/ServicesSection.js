import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
const Card = ({ icon, text }) => {
  return (
    <StyledCard>
      <div className="icon">
        <img src={icon} alt="icon" />
        <h3>{text}</h3>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </StyledCard>
  );
};
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          high <span>quality</span> services
        </h2>
        <Cards>
          <Card icon={clock} text={"Efficient"} />
          <Card icon={teamwork} text={"Teamwork"} />
          <Card icon={diaphragm} text={"Diaphragm"} />
          <Card icon={money} text={"Affordable"} />
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyledCard = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
