import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
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

function MovieDetails() {
    const history = useHistory();
    // const dispatch = useDispatch();
    const movie = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);

    const classes = useStyles();
    console.log('In movieDetails:', movie);

    const handleClick = () => {
        history.push('/');
    }

    //Render Return displays movie details including description and genre
    return (
        <main>
            <button variant="outlined" size="small" color="primary" className={classes.root} onClick={handleClick}>Back To Home</button>
            {/* <p> Click link to navigate back to <Link to="/">home</Link> page.</p>             */}
            <h1>Movie Details</h1>
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img
                    src={movie.poster} alt={movie.title} />
                <p>{movie.description}</p>
            </div>
            <h1>Genre</h1>
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