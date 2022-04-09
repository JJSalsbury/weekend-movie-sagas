import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function MovieItem({movie}) {

    const dispatch = useDispatch();

    const history = useHistory()

    // console.log('movie:', movie);

    const handleNext = () => {
        // console.log('clicked for movie details (description)');
        dispatch({type: 'GET_DETAILS', payload: movie.id});
        // dispatch({type: 'GET_GENRES', payload: movie.id});
        history.push('/detail');
    }

    return(
        <>
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img 
                src={movie.poster} alt={movie.title}
                onClick={handleNext}/>
            </div>
        </>
        )
}

export default MovieItem;