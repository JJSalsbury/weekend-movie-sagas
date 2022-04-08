


function MovieDetails() {

    const dispatch = useDispatch();
    const description = useSelector(store => store.description);

    const handleDetails= () => {
        console.log('clicked for movie details (description)', console.log());
        dispatch({type: 'GET_DETAILS', payload: movie.id});
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieDetails</h1>
                    return (
                        <MovieItem
                        id={i}
                        movie={movie} />
                    );
                )
        </main>

    );
}

export default MovieDetails;