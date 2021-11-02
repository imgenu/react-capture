import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const Card = ({ icon, text }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt="icon" />
        <h3>{text}</h3>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};
const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          high <span>quality</span> services
        </h2>
      </div>
      <div className="cards">
        <Card icon={clock} text={"Efficient"} />
        <Card icon={teamwork} text={"Teamwork"} />
        <Card icon={diaphragm} text={"Diaphragm"} />
        <Card icon={money} text={"Affordable"} />
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};
export default ServicesSection;
