import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { MovieState } from "../movieState";
const OurWork = () => {
  const [movies, setMovies] = useState(MovieState);
  return (
    <Work>
      {movies.map((movie) => (
        <Movie name={movie.title} img={movie.mainImg} url={movie.url} />
      ))}
    </Work>
  );
};

const Movie = ({ name, img, url }) => {
  return (
    <StyledMovie>
      <h2>{name}</h2>
      <div className="line"></div>
      <Link to={url}>
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
