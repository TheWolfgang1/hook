import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

// Composant fonctionnel qui reçoit une liste de films en props
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {/* Affiche l'affiche du film, le titre et un lien vers la description */}
      <img src={movie.posterUrl} alt={movie.title} style={{ width: "200px" }} />
      <h3>{movie.title}</h3>
      <Link to={`/description/${movie.id}`}>Voir plus</Link>
    </div>
  );
}

export default MovieCard;
