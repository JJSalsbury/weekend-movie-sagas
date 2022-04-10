import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: "3rem",
    },
});


function MovieItem({ movie }) {

    const dispatch = useDispatch();

    const history = useHistory()

    const classes = useStyles();

    const handleDetails = () => {
        // console.log('clicked for movie details (description)');
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        history.push('/details');
    }

    // style={{width: 175, height: 375}}
    // style={{width: 175, height: 100}}  

    //Render return all movies in DB
    return (

        <div className="cards" key={movie.id}>
            <Card className={classes.root} style={{ border: 'double' }}>
                <CardActionArea>
                    <CardMedia height="425" variant="outline" component="img" image={movie.poster} alt={movie.title} />
                    <CardContent height="450">
                        <Typography gutterBottom variant="h6" component="div"
                            style={{
                                border: 'double',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 100
                            }}>{movie.title}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleDetails} size="medium" color="primary">See Movie Details</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MovieItem;