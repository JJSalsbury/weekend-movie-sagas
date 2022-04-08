


function MovieDetails() {

    const dispatch = useDispatch();
    const description = useSelector(store => store.details);
    console.log(description);

    let genres = [];

    if (description.genres) {
        genres = description.genres;

    }

    const handleDetails= () => {
        console.log('clicked for movie details (description)', console.log());
        dispatch({type: 'GET_DETAILS', payload: movie.id});
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieDetails</h1>
            <div key={description.id}>
                <h3>{description.title}</h3>
                <img 
                src={movie.poster} alt={movie.title}
                onClick={handleDetails}/>
                <div>
                    {genres.map( genre => {
                        return <p>{genre}</p>
                    })}
                </div>
            </div>
                )
        </main>

    );
}

export default MovieDetails;