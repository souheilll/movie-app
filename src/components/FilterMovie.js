import React from 'react'
import ReactStars from "react-rating-stars-component";

function FilterMovie({ onSearch, onRate }) {

    const handleSearchMovie = (e) => {
        onSearch(e.target.value)
    }
    const ratingChanged = (newRating) => {
        onRate(newRating)
    };
    return (
        <div>
            <input style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0px',
                boxSizing: 'border-box',
                borderRadius: '4px',
                border: '2px solid #ccc',
                fontSize: 20
            }} type='text' onChange={handleSearchMovie} placeholder='Search..' />
            <ReactStars onChange={ratingChanged} />
        </div>
    )
}

export default FilterMovie