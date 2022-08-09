import React from 'react'

function FilmCard({ movie }) {
    console.log(movie)
    const newStr = (str) => {
        if (str.length > 28) {
            return str.slice(0, 28) + '...'
        }
        else {
            return str
        }
    }
    return (
        <div>
            <div className="card">
                <img style={{ width: "auto", height: 200 }} src={movie.poster} className="card-img-top" alt='' />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{newStr(movie.description)}</p>
                </div>
            </div>
        </div>
    )
}

export default FilmCard