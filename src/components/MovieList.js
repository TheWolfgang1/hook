import React from "react";
import MovieCard from "./MovieCard";
import '../App.css';

// Composant fonctionnel qui affiche une liste de films
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {/* Titre de la liste */}
      <h1>Liste des films</h1>
      {/* Conteneur flex pour afficher les cartes de films */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Parcours le tableau de films et affiche un MovieCard pour chaque film */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
