var express = require('express');

var _ = require('lodash');
var router = express.Router();

// api key = 75c6e2f3
 let movies = [{
	  id: "tt0109830",
	  movie: "Forrest Gump",
	  yearOfRelease: 1994,
	  duration: 142 , // en minutes,
	  actors: ["Tom Hanks", "Rebecca Williams", "Sally Field", "Michael Conner Humphreys"],
	  poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", // lien vers une image d'affiche,
	  boxOffice: 330000000, // en USD$,
	  rottenTomatoesScore: 72
 },

 {
	  id: "tt0120689",
	  movie: "The Green Mile",
	  yearOfRelease: 1999,
	  duration: 189 , // en minutes,
	  actors: ["Tom Hanks", "David Morse", "Bonnie Hunt", "Michael Clarke Duncan"],
	  poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg", // lien vers une image d'affiche,
	  boxOffice: 123456789, // en USD$,
	  rottenTomatoesScore: 79
 },

  {
	  id: "tt1727824",
	  movie: "Bohemian Rhapsody",
	  yearOfRelease: 2018,
	  duration: 134, // en minutes,
	  actors: ["Rami Malek", "Lucy Boynton", "Gwilym Lee", "Ben Hardy"],
	  poster: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg", // lien vers une image d'affiche,
	  boxOffice: 1234567, // en USD$,
	  rottenTomatoesScore: 61
 },

 {
 	id: "tt0121766",
	movie: "Star Wars: Episode III - Revenge of the Sith",
	yearOfRelease: 2005,
	duration: 140 , // en minutes,
	actors: ["Ewan McGregor", "Natalie Portman", "Hayden Christensen", "Ian McDiarmid"],
	poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg", // lien vers une image d'affiche,
	boxOffice: 1000000000, // en USD$,
	rottenTomatoesScore: 80

 }
 ];

/* GET movies listing. */
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

/* PUT new movie */
//Test1 pour PUT
/*	//Get the data from request
	const { movie } = req.body;
	//Create new unique id
	const id = _.uniqueId();
	//Insert it in array
	movies.push({ movie, id });
	//return message
	res.json({
		message: 'Just added ${id}',
		movie: { movie, id }
	});
});*/

//test2 pour PUT
/*router.put('/', (req, res) => {
	//Get the data from request
	//const { movie } = req.body;
	//Create new unique id
	//const id = _.uniqueId();

	const movi = {
					id: _.uniqueId(),
					movie: req.movie,
					yearOfRelease: req.yearOfRelease,
					duration: req.duration,
					actors: req.actors,
					poster: req.poster,
					boxOffice: req.boxOffice,
					rottenTomatoesScore: req.rottenTomatoesScore,
				}

			movies.push(movi);
			res.json({
		message: 'Just added',
		movie: { movies }
	});
});*/

/* UPDATE movie */
//Ne marche pas bien 
router.post('/:id', (req, res) => {
	// Get the :id of the user we want to update from the params of the request
	const { id } = req.params;
	// Get the new data of the user we want to update from the body of the request
	const { movie } = req.body;
	//Find in DB
	const movieToUpdate = _.find(movies, ["id", id]);
	//Update data with new data (js is by adress)
	movieToUpdate.movie = movie;
	movieToUpdate.yearOfRelease = movie;
	movieToUpdate.duration = movie;
	movieToUpdate.actors = movie;
	movieToUpdate.poster = movie;
	movieToUpdate.boxOffice = movie;
	movieToUpdate.rottenTomatoesScore = movie;

	//return message
	res.json({
		message: 'Just updated ${id} with ${movie}'
	});
});

/*DELETE movie*/
router.delete('/:id', (req, res) => {
	//get the id of the movie we want to delete from the params of the request
	const { id } = req.params;

	//Remove from "DB"
	_.remove(movies, ["id", id]);

	// Return message
	res.json({
		message: 'just removed ${id}'
	});
});

module.exports = router;
