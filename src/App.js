import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import AddedMovie from './components/AddedMovie';
import FilterMovie from './components/FilterMovie';
import Trailer from './components/Trailer';



function App() {
  const [films, setFilms] = useState([{
    id: '1',
    title: 'The Conjuring',
    poster: 'https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg',
    description:
      'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
    rate: 2,
    trailer: 'https://www.youtube.com/embed/Zj-YtXZ75Lo',
  },
  {
    id: '2',
    title: 'The Grudge',
    poster:
      'https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
    trailer: 'https://www.youtube.com/embed/O2NKzO-fxwQ',

  },
  {
    id: '3',
    title: 'The Ring',
    poster: 'https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 1,
    trailer: 'https://www.youtube.com/embed/uukQ_6szDm8'
  },
  {
    id: '4',
    title: 'The Shawshank Redemption',
    poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
    trailer: 'https://www.youtube.com/embed/PLl99DlL6b4'
  },
  {
    id: '5',
    title: 'The Godfather',
    poster:
      'https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
    trailer: 'https://www.youtube.com/embed/UaVTIH8mujA'
  },
  {
    id: '6',
    title: 'The Godfather: Part II',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hYUlSTUgCxfY-8ACz_E3CQWDKShEYEvGFw&usqp=CAU',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
    trailer: 'https://www.youtube.com/embed/9O1Iy9od7-A'
  },
  {
    id: '7',
    title: 'The Dark Knight',
    poster: 'https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 2,
    trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY'
  },
  {
    id: '8',
    title: '12 Angry Men',
    poster: 'https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg',
    description: 'The Ring is a 2002 American supernatural horror film',
    rate: 4,
    trailer: 'https://www.youtube.com/embed/rom-gKFmAHg'
  }])

  const [searchInput, setSearchInput] = useState('')
  const [rate, setRate] = useState(0)

  const addMovieHandler = (movie) => {
    setFilms([movie, ...films])
  }

  const handleOnSearch = (search) => {
    setSearchInput(search)
  }

  const handleOnRate = (rate) => {
    setRate(rate)
  }

  return (
    <BrowserRouter>
      <FilterMovie onSearch={handleOnSearch} onRate={handleOnRate} />
      <div className="App container">
        <Routes>
          <Route path='/'  element={<><AddedMovie onAddMovie={addMovieHandler} />
            <MoviesList films={films} setFilms={setFilms} searchInput={searchInput} filterRate={rate} /></>}  />
          <Route path='/Trailer/:id' element={<Trailer films={films} />} />

        </Routes>

      </div>
    </BrowserRouter>

  );
}
export default App;