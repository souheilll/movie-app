import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Trailer.css'

function Trailer({ films }) {
    console.log(films)
    const navigate = useNavigate()
    const params = useParams()
console.log(params.id)
    console.log(params)
    const handleReturn = () => {
        navigate('/')
    }
    const details = films.find(el => el.id === params.id)

    return (
        <div style={{ color: 'white' }}>
            <h1> {details.title}: Official Trailer </h1>
            <iframe
                width="560" height="315" src={details.trailer} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div>
                <button onClick={handleReturn}> Back Home</button>
            </div>

        </div>
    )
}
export default Trailer