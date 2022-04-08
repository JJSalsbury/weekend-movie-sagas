import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList({movie}) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    console.log('movie:', movie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie, i) => {
                    return (
                        <MovieItem
                        id={i}
                        movie={movie} />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;