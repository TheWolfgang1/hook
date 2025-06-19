import React from "react";
import '../App.css';
import { useParams, useNavigate } from "react-router-dom";

// Composant fonctionnel pour afficher la description d'un film
function Description({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  // Si le film n'est pas trouvé, afficher un message d'erreur
  if (!movie) {
    return <div>Film introuvable</div>;
  }

  // Affiche la description du film, son titre, sa bande-annonce et un bouton pour revenir à l'accueil
  return (
    <div className="description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <br />
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}

export default Description;
