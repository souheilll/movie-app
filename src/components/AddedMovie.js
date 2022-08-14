import React, { useState } from 'react'
import NewMovie from './NewMovie'
import './AddedMovie.css'


function AddedMovie({ onAddMovie }) {
    const [etat, setEtat] = useState(false)
    const handleEtat = () => {
        setEtat(true)
    }

    const saveMovieDataHandler = (enteredMovieData) => {
        const movieData = { ...enteredMovieData, id: Math.random().toString() }
        onAddMovie(movieData)
    }
    return (
        <div className='new-movie'>
            {!etat && <button onClick={handleEtat}> Add New Movie</button>}
            {etat && <NewMovie onSaveMovieData={saveMovieDataHandler} setEtat={setEtat} />}

        </div>
    )
}
export default AddedMovie