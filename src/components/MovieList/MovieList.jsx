import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #DB1F1F 30%, #5C0D15 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 30,
        padding: '0 30px',
    },
});

function MovieList({ movie }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const classes = useStyles();

    console.log('movie:', movie);

    //Display movies in DB on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //Render Return maps over movie list from DB making an item for each movie of the list
    return (
        <main>
            <button variant="primary" className={classes.root} onClick={() => { history.push('/form') }}>Add New Movie</button>
            <h2> Welcome To Your Movie List</h2>
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