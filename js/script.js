var API_KEY = "https://unogsng.p.rapidapi.com/search?orderby=rating&limit=100";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "31ee91184bmshd737b0399d05d9dp1804cejsne3418dec5aa4",
    "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
  },
};

fetch(API_KEY, options)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (getImdbidRating) {
    console.log(getImdbidRating);
    for (let i = 0; i < getImdbidRating.results.length; i++) {
      var idRating = getImdbidRating.results[i].imdbrating;
      console.log(idRating);
      var anArrayRating = Object.keys(idRating).map((key) => {
        return [key, idRating[key]];
      });
      var minRaing = anArrayRating.sort(function (a, b) {
        return a - b;

        console.log(minRaing);
      });
    }
  });
