import React from 'react'
import FilmCard from './FilmCard'
import { Link } from 'react-router-dom'
import './MovieList.css'


function MoviesList({ films, searchInput, filterRate }) {
    return (
        <div className="row row-cols-4 g-4">
            {films.filter((el) =>
                el.title.toLowerCase().includes(searchInput.toLowerCase())
                && (filterRate > 0 ? el.rate === filterRate : true)
            ).map((el) => <Link key={el.id} className='link' to={`/Trailer/${el.id}`}><FilmCard movie={el} /></Link>)}
        </div>
    )
}

export default MoviesList