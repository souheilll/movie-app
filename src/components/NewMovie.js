import React, { useState } from 'react'
import './NewMovie.css'


function NewMovie({ onSaveMovieData }) {
    const [poster, setPoster] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState('');

    const handleUrlChange = (e) => {
        setPoster(e.target.value);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleRateChange = (e) => {
        setRate(parseInt(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const movieData = {
            poster, title, description, rate
        };
        onSaveMovieData(movieData);
        setPoster('');
        setTitle('');
        setDescription('');
        setRate('');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='new-movie__controls'>

                    <div className='new-movie__control'>
                        <label> enter image Url</label>
                        <input type='url' onChange={handleUrlChange} value={poster}></input>
                    </div>

                    <div className='new-movie__control'>
                        <label> Title</label>
                        <input type='text' onChange={handleTitleChange} value={title}></input>
                    </div>

                    <div className='new-movie__control'>
                        <label> Description</label>
                        <input type='text' onChange={handleDescriptionChange} value={description}></input>
                    </div>
                    <div className='new-movie__control'>
                        <label> Rate</label>
                        <input type='number' min='1' max='5' onChange={handleRateChange} value={rate}></input>
                    </div>

                    <div className='new-movie__actions'>
                        <button type='submit'> Add Movie</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewMovie