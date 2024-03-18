"use strict";

// const addMovieBtn = document.getElementById("add-movie-btn");
// const searchBtn = document.getElementById("search-btn");

// const movies = [];

// const renderMovies = (filter = '') => {
//   const movieList = document.getElementById("movie-list");

//   if (movies.length === 0) {
//     movieList.classList.remove("visible");
//   } else {
//     movieList.classList.add("visible");
//   }
//   movieList.innerHTML = "";

//   const filteredMovies = !filter 
//     ? movies : 
//     movies.filter((m) => m.info.title.includes(filter));

//   filteredMovies.forEach((movie) => {
//     const movieEl = document.createElement("li");
//     if (!('info' in movie)) {
//         return;
//     }
//     const { info, ...otherProps } = movie; 
//     let { getFormattedTitle } = movie;
//     let text = getFormattedTitle.call(movie) + " - ";
//     for (const key in info) {
//       if (key !== "title") {
//         text = text + `${key}: ${info[key]}`;
//       }
//     }
//     movieEl.textContent = text;
//     movieList.append(movieEl);
//   });
// };

// const addMovieHandler = () => {
//   const title = document.getElementById("title").value;
//   const extraName = document.getElementById("extra-name").value;
//   const extraValue = document.getElementById("extra-value").value;

//   if (
//     title.trim() === "" ||
//     extraName.trim() === "" ||
//     extraValue.trim() === ""
//   ) {
//     return;
//   }

//   const newMovie = {
//     info: {
//       title,
//       [extraName]: extraValue,
//     },
//     id: Math.random().toString(),
//     getFormattedTitle() {
//         return this.info.title.toUpperCase();
//     }
//   };

//   movies.push(newMovie);
//   renderMovies();
// };

// const searchMovieHandler = () => {
//   const filterTerm = document.getElementById("filter-title").value;
//   renderMovies(filterTerm);
// };

// addMovieBtn.addEventListener('click', addMovieHandler);
// searchBtn.addEventListener('click', searchMovieHandler);

// let name = {
//   firstName: 'Arpit',
//   lastName: 'Asthana',
// }

// const getFullName = function(homeTown) {
//   console.log(this.firstName + " " + this.lastName + " from " + homeTown);
// }

// getFullName.call(name, 'Dehradun');

// let name2  = {
//   firstName: 'Robin',
//   lastName: 'Pandey'
// }

// getFullName.call(name2, 'Mumbai');

// getFullName.apply(name2, ['Mumbai']);

// let myName = getFullName.bind(name, 'Dehradun');
// console.log(myName);
// myName();

// this in global space

console.log(this); // Returns Global Window Object

// this inside a function

function x() {
  console.log(this); // Returns Global Window OBject in non strict mode. But in case of strict mode, it will return undefined.
}

// this inside non strict mode - (this substitution)

// If the value of this keyword is undefined or null this keyword will be replaced with globalObject only in non strict mode.

// this keyword value depends on how this is called (window)

x(); // Returns undefined in strict mode.
window.x(); // Return window object in strict mode.

// this inside a object's method

const obj = {
  a: 10,
  x: function() {
    console.log(this);
  }
}

obj.x(); // Returns obj Object.

// What's the difference between function & method?
// If you define the function inside the object, it is called method.

// call apply bind methods (sharing methods)

const obj2 = {
  a: 20
}

obj.x.call(obj2); // Returns {a: 20}

// this inside arrow function

const obj3 ={
  a: 10,
  x: () => {
    console.log(this); // Will behave like a enclosing lexical context.
  }
}

obj3.x(); // Return WIndow Obj

// this inside the nested arrow function

const obj4 = {
  a: 20,
  x: function() {
    // Enclosing lexical context
    const y = () => {
      console.log(this);
    }
    y();
  }
}

obj4.x(); // Will return {a: 20, x: ƒ}

// this inside DOM elements => reference to HTML Element













