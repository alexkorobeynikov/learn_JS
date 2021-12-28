'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

if (personalMovieDB.count < 10 ) {
    alert("Слишком мало фильмов");
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30 ) {
    alert("Вы киноман");
} else {
    alert("Ошибка");
}




for (let i = 1; i <= 2; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
    const ratingLastMovie = prompt("Насколько оцените его?", "");

    if (lastMovie != null && ratingLastMovie != null && lastMovie != '' && ratingLastMovie != '' && lastMovie.length < 50 ) {
        personalMovieDB.movies[lastMovie] = ratingLastMovie;

    } else {
        i--;
    }
    
   

}



// const lastMovie1 = prompt("Один из последник просмотренных фильмов?", ""),
//       ratingLastMovie1 = prompt("Насколько оцените его?", ""),
//       lastMovie2 = prompt("Один из последник просмотренных фильмов?", ""),
//       ratingLastMovie2 = prompt("Насколько оцените его?", "");  

// personalMovieDB.movies = {
//     lastMovie1: ratingLastMovie1,
//     lastMovie2: ratingLastMovie2

// };

// personalMovieDB.movies[lastMovie1] = ratingLastMovie1;
// personalMovieDB.movies[lastMovie2] = ratingLastMovie2;

console.log(personalMovieDB);





