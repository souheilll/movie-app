import React from 'react'
import ReactStars from "react-rating-stars-component";
import './FilmCard.css'

function FilmCard({ movie }) {
    return (
        <div>
            <div className="card">
                <img src={movie.poster} className="card-img-top" alt='' />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                </div>
                <div className="card-footer">
                    <ReactStars edit={false} value={movie.rate} />
                </div>
            </div>
        </div>
    )
}

export default FilmCard