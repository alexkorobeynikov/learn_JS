'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const lastMovie1 = prompt("Один из последник просмотренных фильмов?", ""),
      ratingLastMovie1 = prompt("Насколько оцените его?", ""),
      lastMovie2 = prompt("Один из последник просмотренных фильмов?", ""),
      ratingLastMovie2 = prompt("Насколько оцените его?", "");  

// personalMovieDB.movies = {
//     lastMovie1: ratingLastMovie1,
//     lastMovie2: ratingLastMovie2

// };

personalMovieDB.movies[lastMovie1] = ratingLastMovie1;
personalMovieDB.movies[lastMovie2] = ratingLastMovie2;

console.log(personalMovieDB);