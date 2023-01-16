// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function(movie){
        return movie.director;
    });
    return directorsArray;
}

getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    } else {
        const stevenFiltered = moviesArray.filter(function(movie) {
            return movie.director === "Steven Spielberg" && movie.genre.includes ("Drama");
        });
        return stevenFiltered.length;
    }
}

howManyMovies(movies);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
//   } else {
//     const scores = moviesArray.filter(movie => movie.score).map(movie => movie.score);
//     if (scores.length > 0) {
//     const sum = scores.reduce(function(acc, val){
//         return acc + val;
//     }, 0);
//         const average = (sum / scores.length).toFixed(2);
//         return average;
//     } else {
//         return 0;
//     }
//   }

const average = moviesArray.reduce(function(acc, movie){
    if (movie.score){
        return acc + movie.score;
    } else {
        return acc;
    }
}, 0)/moviesArray.length

return +average.toFixed(2)

// the + sign in front of the average => turns into numb => or parseInt

}


// Iteration 4: Drama movies - Get the average of Drama Movies
    // should be declared

    // should return a number

    // should return the score of a single element array

    // should return the average of the rating of the drama movies in the array

    // should return the average of the array, a floating point number

    // should only calculate the average for drama movies

    // should return 0 if there is no Drama movie

// function dramaMoviesScore(moviesArray) {
//     const dramaMovie = moviesArray.filter(function(movie){
//         if (movie.genre.includes ("Drama"){
//             const average = moviesArray.reduce(function(acc, movie){
//                 return acc + movie.score;
//             }
//         }, 0)/moviesArray.length;
        
//         else{
//             return 0;
//         };
        
//     });
//     return +average.toFixed(2);
//     }

    // Corrected code: 
    function dramaMoviesScore(moviesArray) {
        const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
        if(dramaMovies.length === 0) {
            return 0;
        } else {
            const sum = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
            const average = sum/dramaMovies.length;
            return +average.toFixed(2);
        }
        }





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// should be declared
// should return an array
// should return a new array, not mutate the original one
// should return the element in a single element array
// should return the new array in ascending order
// should order movies with the same year by their title, alphabetically
// Take movie.year =>.sort() to create new array=>if same year . sort() alphabetically

function orderByYear(moviesArray) {
    const newArray = Array.from(moviesArray);
    newArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return newArray;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// should be declared
// should return an array
// should return a new array, not mutate the original one
// should only return the title of the movies, each value should be a string
// should return all of items when the array passed has fewer than 20 items
// If there are more than 20 elements, return only 20 of them.
// should order them alphabetically.
// should return the top 20 after ordering them alphabetically.

// create a new array => check for the title and sort per title => print the first 20
function orderAlphabetically(moviesArray) {
    const newArray = Array.from(moviesArray);
    newArray.sort((a,b) => a.title.localeCompare(b.title));
    return newArray.slice(0,20);
}








// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
