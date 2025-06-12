import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });

  return (
    <div>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Filtrer par titre"
          onChange={e => setTitleFilter(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Note minimale"
          min="0"
          max="5"
          onChange={e => setRatingFilter(Number(e.target.value))}
        />
      </div>
      <div className="movie-list">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;