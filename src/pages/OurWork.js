import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
const OurWork = () => {
  return (
    <Work>
      <Movie name={"The Athlete"} img={athlete} />
      <Movie name={"The Racer"} img={theracer} />
      <Movie name={"Good Times"} img={goodtimes} />
    </Work>
  );
};

const Movie = ({ name, img }) => {
  return (
    <StyledMovie>
      <h2>{name}</h2>
      <div className="line"></div>
      <Link>
        <img src={img} alt={name} />
      </Link>
    </StyledMovie>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
