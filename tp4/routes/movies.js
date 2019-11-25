var express = require('express');

var _ = require('lodash');
var router = express.Router();

 let movies = [{
	  id: "0",
	  movie: "Forrest Gump",
	  yearOfRelease: 1994,
	  duration: 96, // en minutes,
	  actors: ["Tom Hanks", "Robin Wright"],
	  poster: "http://t3.gstatic.com/images?q=tbn:ANd9GcT0NxVrYdi8Ro5zRnIbewaT_uCOl5_2uhxxyQoU6s9gOfEDovGi", // lien vers une image d'affiche,
	  boxOffice: 100000, // en USD$,
	  rottenTomatoesScore: 95
 },
 {
 	id: "1",
	movie: "Test",
	yearOfRelease: 1994,
	duration: 96, // en minutes,
	actors: ["Tom Hanks", "Robin Wright"],
	poster: "http://t3.gstatic.com/images?q=tbn:ANd9GcT0NxVrYdi8Ro5zRnIbewaT_uCOl5_2uhxxyQoU6s9gOfEDovGi", // lien vers une image d'affiche,
	boxOffice: 100000, // en USD$,
	rottenTomatoesScore: 95

 }
 ];

/* GET users listing. */
router.get('/', (req, res) => {
	//GEt List of movies and return JSON
  res.status(200).json({ movies });
});

/*GET one movie*/
router.get('/:id', (req, res) => {
	// Get id in params
	const { id } = req.params;
	// Find movie in DB
	const movie = _.find(movies, ["id", id]);
	// Return user
	res.status(200).json({
		message: 'Movie found',
		movie
	});
});

module.exports = router;
