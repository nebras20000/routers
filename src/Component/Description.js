import React from "react";
import { Link, useLocation } from "react-router-dom";
const Description = ({}) => {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} />
      <p> {movie.description} </p>
 <Link to="/"  > HOME </Link>


    </div>
 
 );
};

export default Description;
