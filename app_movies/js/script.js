'use strict';

let numberOfFilms ;

function start () {
    numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)  ) {
        numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true

};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i - 1] = prompt("Ваш любимый жанр под номером " + i, "");
    }
}

writeYourGenres();
    


function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
        const ratingLastMovie = prompt("Насколько оцените его?", "");
    
        if (lastMovie != null && ratingLastMovie != null && lastMovie != '' && ratingLastMovie != '' && lastMovie.length < 50 ) {
            personalMovieDB.movies[lastMovie] = ratingLastMovie;
    
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        alert("Мало фильмов");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30 ) {
        alert("Вы киноман");
    } else {
        alert("Ошибка");
    }

}

detectPersonalLevel();



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





