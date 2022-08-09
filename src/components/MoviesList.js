import React from 'react'
import FilmCard from './FilmCard'


function MoviesList({ films, searchInput }) {
    console.log(searchInput)
    return (
        <div className="row row-cols-4 g-4">
            {films.filter((el) => el.title.toLowerCase().includes(searchInput.toLowerCase())).map((el) => <FilmCard key={el.id} movie={el} />)}
        </div>


    )
}

export default MoviesList