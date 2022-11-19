// var cardName = document.querySelector(".card-name");
// var movieYear = document.querySelector(".movie-year");
// var rating = document.querySelector(".rating");
// var poster = document.querySelector(".poster");
// var synopsis = document.querySelector(".synopsis");
var cardWrapper = document.querySelector(".card-wrapper");
var col = document.querySelector(".col");


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8748a9f6e0msh46c36b26f7e0d08p19406djsne19cef7ec6ae',
        'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
    }
};

fetch('https://unogsng.p.rapidapi.com/search?limit=100', options)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (listOfMovies) {
        console.log(listOfMovies);
        for (let i = 0; i < listOfMovies.results.length; i++) {
            var poster = document.createElement("img");
            poster.setAttribute("src", listOfMovies.results[i].poster);
            col.appendChild(poster);
            console.log(poster);

            var cardName = document.createElement("h2");
            cardName.classList = "card border-0 card-body p-2 card-name text-center";
            cardName.textContent = listOfMovies.results[i].title;
            col.appendChild(cardName);
            console.log(cardName);

            var movieYear = document.createElement("p");
            movieYear.classList = "fw-ligh text-start mb-0";
            movieYear.textContent = "Year:" + " " + listOfMovies.results[i].year;
            col.appendChild(movieYear);
            console.log(movieYear);

            var rating = document.createElement("p2");
            rating.classList = "fw-ligh text-start mb-0";
            rating.textContent = "Rating:" + " " + listOfMovies.results[i].imdbrating;
            col.appendChild(rating);
            console.log(rating);

            var button = document.createElement("button");
            button.classList = "w-100 btn btn-lg btn-outline-dark btn-sm";
            button.textContent = "Find Out More";
            col.appendChild(button);
            console.log(button);

            var type = listOfMovies.results[i].vtype;
            console.log(type);
            var synopsys = listOfMovies.results[i].synopsis;
            console.log(synopsys);

            // TODO: if rating is null or undefined = N/A.
            // TODO: if img is null add default img.

        }
    })