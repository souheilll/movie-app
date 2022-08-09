import React from 'react'
import NewMovie from './NewMovie'
import './AddedMovie.css'


function AddedMovie({ onAddMovie }) {
    const saveMovieDataHandler = (enteredMovieData) => {
        const movieData = { ...enteredMovieData, id: Math.random().toString() }
        onAddMovie(movieData)
        //console.log(movieData)
    }
    return (
        <div className='new-movie'>
            <NewMovie onSaveMovieData={saveMovieDataHandler} />
        </div>
    )
}
export default AddedMovie