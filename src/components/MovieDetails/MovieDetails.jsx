import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import React from 'react';

function MovieDetails() {

    // const dispatch = useDispatch();
    const movie = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    console.log('In movieDetails:', movie);

    const handleDetails = () => {
        history.push('/');
    }

    return (
        <main>
            <h1>MovieDetails</h1>
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img
                    src={movie.poster} alt={movie.title} />
                <p>{movie.description}</p>
            </div>
            <button onClick={handleDetails}>Back To Home</button>
            <p>{genres.name}</p>
            {genres.map((genre, i) => {
                return (
                    <p key={i}>{genre.name}</p>
                );
            })}
        </main>
    );
}

export default MovieDetails;