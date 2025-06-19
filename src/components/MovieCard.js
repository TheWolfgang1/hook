import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

// Ce composant affiche la liste des films
function MovieList({ movies }) {
  return (
    <div>
      {/* Parcourt la liste des films et affiche chaque fiche */}
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* Le titre et l'affiche sont cliquables et mènent à la page de détails */}
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.posterUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
