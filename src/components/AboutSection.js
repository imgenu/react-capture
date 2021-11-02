import React from "react";
import home1 from "../img/home1.png";
//Styled
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque
          repellat deleniti quae a iure beatae dolor asperiores autem molestias?
          Saepe quo praesentium recusandae accusantium voluptates molestias at
          quaerat. Velit?
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
