import React, { useState } from "react";
import '../App.css';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";

function App() {
  // State qui contient la liste des films
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      posterUrl: "https://...",
      description: "Un voleur qui s'infiltre dans les rêves...",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    // ...autres films...
  ]);

  // Fonction pour ajouter un film à la liste
  const addMovie = (newMovie) => {
    // Ajoute le nouveau film avec un id unique
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    // Router pour gérer la navigation entre les pages
    <Router>
      {/* Formulaire d'ajout de film, reçoit la fonction addMovie en prop */}
      <AddMovie addMovie={addMovie} />
      <Routes>
        {/* Route pour la liste des films */}
        <Route path="/" element={<MovieList movies={movies} />} />
        {/* Route pour les détails d'un film */}
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

function Description({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Film introuvable</div>;
  }

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

export default App;
