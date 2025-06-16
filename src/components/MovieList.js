import React from "react";
import MovieCard from "./MovieCard";
import '../App.css';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h1>Liste des films</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
