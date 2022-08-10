import React from 'react'
import FilmCard from './FilmCard'

function MoviesList({ films, searchInput }) {
    return (
        <div className="row row-cols-4 g-4">
            {films.filter((el) =>
                el.title.toLowerCase().includes(searchInput.currentSearchText.toLowerCase()) && (searchInput.currentRating ? searchInput.currentRating === el.rate : true)
            ).map((el) => <FilmCard key={el.id} movie={el} />)}
        </div>
    )
}

export default MoviesList