import React from 'react'

function FilterMovie({ onSearch }) {

    const handleSearchMovie = (e) => {
        onSearch(e.target.value)
    }
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
        </div>
    )
}

export default FilterMovie