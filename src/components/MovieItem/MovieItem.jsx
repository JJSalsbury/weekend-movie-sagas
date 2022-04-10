import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
    //   maxHeight: 350,
      margin: "3rem",
    },
    media: {
        height: 140,
    }
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

    return (

        <div className="cards" key={movie.id}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" height="350" width="350" image={movie.poster} alt={movie.title} />
                    {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="inherit" >{movie.title}</Typography>
                    </CardContent> */}
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleDetails} size="medium" color="primary">See Movie Details</Button>
                </CardActions>
            </Card>
        </div>
    )
    {/* <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img 
                src={movie.poster} alt={movie.title}
                onClick={handleNext}/>
            </div> */}
}

export default MovieItem;