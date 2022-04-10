const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:movieId', (req, res) => {
  // Add query to get all genres
    console.log('movie.router details GET movieId:', req.params.movieId);
  
    const query = `SELECT "genres".name FROM "genres"
    JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
    JOIN "movies" ON "movies_genres".movie_id = "movies".id
    WHERE "movies".id = $1;`;
  
    pool.query(query, [req.params.movieId])
      .then( result => {
        res.send(result.rows);
      })
      .catch( error => {
        console.log('server GET movie details', error)
        res.sendStatus(500);
      })

});

module.exports = router;