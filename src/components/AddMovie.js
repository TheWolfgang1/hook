import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  // Fonction pour ajouter un nouveau film à la liste
  const addMovie = (newMovie) => {
    // On ajoute le nouveau film avec un id unique
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <Router>
      {/* Formulaire pour ajouter un film, on passe la fonction addMovie en prop */}
      <AddMovie addMovie={addMovie} />
      <Routes>
        {/* Page d'accueil qui affiche la liste des films */}
        <Route path="/" element={<MovieList movies={movies} />} />
        {/* Page de détails d'un film, accessible via son id */}
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;