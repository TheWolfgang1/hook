import React, { useState } from 'react';
import '../App.css';

// Composant fonctionnel pour ajouter un nouveau film
const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rating: 0
  });

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({...newMovie, id: Date.now()});
    setNewMovie({
      title: '',
      description: '',
      posterUrl: '',
      rating: 0
    });
  };

  // Rendu du formulaire d'ajout de film
  return (
    <div className="add-movie-form">
      <h2>Ajouter un nouveau film</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input
          type="text"
          placeholder="Titre du film"
          value={newMovie.title}
          onChange={e => setNewMovie({...newMovie, title: e.target.value})}
          required
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={e => setNewMovie({...newMovie, description: e.target.value})}
        />
        <input
          type="text"
          placeholder="URL de l'affiche"
          value={newMovie.posterUrl}
          onChange={e => setNewMovie({...newMovie, posterUrl: e.target.value})}
        />
        <input 
          type="text"
          placeholder="URL de la bande-annonce"
          value={newMovie.trailer}
          onChange={e => setNewMovie({...newMovie, trailer: e.target.value})}
        />
        <input
          type="number"
          placeholder="Note (0-5)"
          min="0"
          max="5"
          value={newMovie.rating}
          onChange={e => setNewMovie({...newMovie, rating: Number(e.target.value)})}
        />
        <button type="submit">Ajouter le film</button>
      </form>
    </div>
  );
};

export default AddMovie;