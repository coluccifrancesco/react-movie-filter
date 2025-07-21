import { useState, useEffect } from 'react';
import './App.css';

const movieList = [
  { idFilm: 1, title: 'Inception', genre: 'Fantascienza' },
  { idFilm: 2, title: 'Il Padrino', genre: 'Crime' },
  { idFilm: 3, title: 'Titanic', genre: 'Romantico' },
  { idFilm: 4, title: 'Batman', genre: 'Azione' },
  { idFilm: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { idFilm: 6, title: 'Pulp Fiction', genre: 'Crime' },
];



// Creo un set da convertire in array per avere una lista 
// univoca di generi
const genresSet = new Set ();

movieList.forEach(film => {         // Per ogni film della lista
  genresSet.add(film.genre)         // Aggiungo i generi al Set
});

const genresArr = [...genresSet];   // Converto il Set in array

console.log(genresArr);             // Verifico gli elementi dell'array



function App() {

  let [film, setFilm] = useState(movieList)
  let [filmList, setFilmList] = useState(movieList)

  return (
    <main>
      <div className='row align-items-center'>
        
        {/* Lista film e generi */}
        <div className='film-list-cont mx-auto col col-6'>
          <ul className='list-group list-style-none pt-5 mb-5'>

            <li className='list-group-item mx-5'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>Titolo</div><div>Genere</div>
              </div>
            </li>
            
            {film.map((film) => {
              return <li key={film.idFilm} className='list-group-item mx-5'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>{film.title}</div>
                    <div>{film.genre}</div>
                  </div>
                </li>
            })}
            
          </ul>
        </div>

        <div className='col col-6'>
          <select className="form-select mx-auto" aria-label="Default select example">
              
            <option value="default" >Choose the genre</option>

            {/* Nella select ritorno i generi univoci aggiunti nel 
            set tramite forEach */}
            {genresArr.map((genre)=>{
              return <option value={genre}>{genre}</option>
            })}
          
          </select>
        </div>

      </div>
    </main>
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