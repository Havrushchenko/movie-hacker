var API_KEY = "https://unogsng.p.rapidapi.com/search?orderby=rating&limit=10";
// var sortedRating = [];
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "31ee91184bmshd737b0399d05d9dp1804cejsne3418dec5aa4",
    "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
  },
};
// function sortByRating(films) {
//   function compare(a, b) {
//     if (a.imdbrating < b.imdbrating) {
//       return -1;
//     }
//     if (a.imdbrating > b.imdbrating) {
//       return 1;
//     }
//     return 0;
//   }
//   films.sort(compare);
//   for (let i = 0; i < data.results.length; i++) {
//     var idRating = data.results[i].imdbrating;
//     console.log(idRating);
//   }
// }
function sortDescend(a, b) {
  return b.imdbrating - a.imdbrating;
}
function sortAsc(a, b) {
  return a.imdbrating - b.imdbrating;
}

fetch(API_KEY, options)
  .then(function (response) {
    console.log(response);
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    // sortByRating(data.results);
    var results = data.results;
    results.sort(sortAsc);
    console.log(results);
  });
