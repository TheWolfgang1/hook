import React, { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'Un voleur qui vole des secrets...',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'Des explorateurs voyagent à travers un trou de ver...',
      posterUrl: 'https://www.filigrane-rhonealpes.fr/wp-content/uploads/2025/03/interstellar-2.jpg',
      rating: 4.7
    }
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <h1>Ma Collection de Films</h1>
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
