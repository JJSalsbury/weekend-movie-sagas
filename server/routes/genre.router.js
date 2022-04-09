const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  router.get('/details/:movieId', (req, res) => {
    console.log('movie.router details GET movieId:', req.params.movieId);
  
    const query = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, ARRAY_AGG("genres".name) AS "genres" FROM "movies"
                   JOIN "movies_genres" ON "movies_genres".movie_id = "movies".id
                   JOIN "genres" ON "genres".id = "movies_genres".genre_id
                   WHERE "movies".id = $1
                   GROUP BY "movies".id;`;
  
    pool.query(query, [req.params.movieId])
      .then( result => {
        res.send(result.rows);
      })
      .catch( error => {
        console.log('server GET movie details', error)
        res.sendStatus(500);
      })
  });
  res.sendStatus(500)
});

module.exports = router;