var grid = document.querySelector(".grid");

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
    .then(function (data) {
        console.log(data);
        var loader = document.querySelector(".loader")
        loader.style.visibility = "hidden";
        for (var i = 0; i < data.results.length; i++) {
            var movieCard = document.createElement("div");
            movieCard.classList = "movie-card p-1 block max-w-sm bg-white border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 opacity-100 hover:opacity-90 cursor-default max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl";
            grid.appendChild(movieCard);

            var type = document.createElement("span");

            if (data.results[i].vtype === "movie") {
                type.classList.add("movie-type");
                type.textContent = "Movie";
                movieCard.appendChild(type);
            } else if (data.results[i].vtype === "series") {
                type.classList.add("series-type");
                type.textContent = "Series";
                movieCard.appendChild(type);
            };
            // TODO: Create div
            var poster = document.createElement("img");
            poster.classList = ("poster");
            poster.setAttribute("src", data.results[i].poster);
            if (!data.results[i].poster || data.results[i].poster === "0") {
                poster.setAttribute("src", "./assets/img/image-does-not-exist.jpg");
                movieCard.appendChild(poster);
            }
            movieCard.appendChild(poster);

            var movieTitle = document.createElement("h2");
            movieTitle.classList = "title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center";
            movieTitle.textContent = data.results[i].title;
            movieCard.appendChild(movieTitle);

            var movieYear = document.createElement("p");
            movieYear.classList = "font-normal text-sm p-1 text-gray-700 dark:text-gray-400";
            movieYear.textContent = "Year:" + " " + data.results[i].year;
            movieCard.appendChild(movieYear);

            var rating = document.createElement("p");
            rating.classList = "font-normal text-sm p-1 text-gray-700 dark:text-gray-400";
            rating.textContent = "IMDb:" + " " + data.results[i].imdbrating;
            if (!data.results[i].imdbrating) {
                rating.classList = "font-normal text-sm p-1 text-gray-700 dark:text-gray-400";
                rating.textContent = "IMDb: N/A";
            }
            movieCard.appendChild(rating);

        }
    });
