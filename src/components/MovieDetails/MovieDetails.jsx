
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {

    // const dispatch = useDispatch();
    const movie = useSelector(store => store.details);
    console.log('In movieDetails:', movie);

    const handleDetails= () => {
        history.push('/');
    }

    return (
        <main>
            <h1>MovieDetails</h1>
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img 
                src={movie.poster} alt={movie.title}/>
                <p>{movie.description}</p>
                </div>
                <button onClick={handleDetails}>Back To Home</button>
        </main>
    );
}

export default MovieDetails;