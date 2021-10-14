
fetch("https://ghibliapi.herokuapp.com/films")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        for(let movie of data){
            let movieTitle = movie.title;
            let newOption = document.createElement("option");
            newOption.textContent = movieTitle[0].toUpperCase() + movieTitle.slice(1);
            newOption.value = movieTitle;
            let select = document.querySelector("#movie-select");
            select.append(newOption);
        }
    })