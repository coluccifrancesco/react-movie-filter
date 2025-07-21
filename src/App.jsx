import { useState, useEffect } from 'react'
import './App.css'

const movieList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Crime' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Crime' },
]

function App() {

  return (
    <>
    
    </>
  )
}

// Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.

// Note
// Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
// Se non viene selezionato alcun genere, devono essere mostrati tutti i film.

// BONUS:
// Aggiungere un campo di ricerca per filtrare i film anche per titolo.
// Creare un sistema per aggiungere nuovi film alla lista tramite un form.

export default App