import React from 'react'
import ReactStars from "react-rating-stars-component";

function FilterMovie({ onChangefilter, filterInput, starKeyForce }) {

    // const handleOnChange = (key,value) => {
    //     onChangefilter(value,key);
    // }

    // const handleSearchMovie = (e) => {
    //     //filterInput.currentSearchText = e.target.value;
    //     //onChangefilter();
    //     onChangefilter(e.target.value,'currentSearchText');
    // }
    // const ratingChanged = (newRating) => {
    //     //filterInput.currentRating = newRating;
    //     //onChangefilter();
    //     onChangefilter(newRating,'currentRating');
    // };

    const handleOnReset = ()=>{
        filterInput.currentSearchText = '';
        filterInput.currentRating = 0;
        onChangefilter();
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
            }} type='text' value={filterInput.currentSearchText} onChange={(e) => onChangefilter(e.target.value,"currentSearchText")} placeholder='Search..' />
            <ReactStars value={filterInput.currentRating} onChange={(value) => onChangefilter(value,"currentRating")} key={starKeyForce} />
            <button onClick={handleOnReset}>reset</button>
        </div>
    )
}

export default FilterMovie