import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";
//Styled
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque
          repellat deleniti quae a iure beatae dolor asperiores autem molestias?
          Saepe quo praesentium recusandae accusantium voluptates molestias at
          quaerat. Velit?
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
