import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} style={{ width: "200px" }} />
      <h3>{movie.title}</h3>
      <Link to={`/description/${movie.id}`}>Voir plus</Link>
    </div>
  );
}

export default MovieCard;
