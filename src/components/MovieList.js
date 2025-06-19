import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import '../App.css';

// MovieList reçoit la liste des films en props et les affiche
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h1>Liste des films</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* On parcourt chaque film de la liste */}
        {movies.map((movie) => (
          <div key={movie.id}>
            {/* 
              On utilise Link pour permettre la navigation vers la page de détails du film.
              L'URL contient l'id du film pour l'identifier.
            */}
            <Link to={`/movie/${movie.id}`}>
              {/* Affiche l'image du film */}
              <img src={movie.posterUrl} alt={movie.title} />
              {/* Affiche le titre du film */}
              <h2>{movie.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
