let allNewMovies = allMovies.filter(
    function(movie) {
        parseInt(movie.year);
        return movie.year > 2013;
    }    
)

let allAvengerMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('Avenger');
    }
)

let allXmenMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('X-Men');
    }
)

let allBatmanMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('Batman');
    }
)

let allPrincessMovies = allMovies.filter(
    function(movie) {
        return movie.title.includes('Princess');
    }
)

let addMoviesToDom = function(array) {
    array.forEach(function (movie) {
        let movieToAdd = document.createElement("li");
        movieToAdd.setAttribute('data-before', movie.title);
        movieToAdd.setAttribute('data-after', movie.year);
        console.log(movieToAdd)
        let movieLink = document.createElement("a")
        let moviePoster = document.createElement("img");
        let movieGrid = document.getElementById("movie_grid"); 
        movieGrid.appendChild(movieToAdd);
        movieToAdd.appendChild(movieLink);
        movieLink.appendChild(moviePoster);
        movieToAdd.classList.add('movie_grid_square');
        movieLink.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
        movieLink.setAttribute("target", "_blank");
        moviePoster.setAttribute("src", movie.poster);
        moviePoster.setAttribute("width", "100%");
        moviePoster.setAttribute("height", "100%");
        movieToAdd.classList.add('movie_grid_square::before');
        movieToAdd.classList.add('movie_grid_square::after');
        

        movieToAdd.classList[1].attr("content", "TestTitle")
        movieToAdd.classList[2].attr("content", "Year")
  

    })
}

let getAllButton = document.getElementById('all_btn');

getAllButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allMovies);
})

let getNewButton = document.getElementById('new_btn');

getNewButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allNewMovies);
})

let getAvengerButton = document.getElementById('avenger_btn');

getAvengerButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allAvengerMovies);
})

let getXmenButton = document.getElementById('xmen_btn');

getXmenButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allXmenMovies);
})

let getBatmanButton = document.getElementById('batman_btn');

getBatmanButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allBatmanMovies);
})

let getPrincessButton = document.getElementById('princess_btn');

getPrincessButton.addEventListener('click', function () {
    let movieGrid = document.getElementById("movie_grid");
    movieGrid.innerHTML = '';
    addMoviesToDom(allPrincessMovies);
})

addMoviesToDom(allMovies);