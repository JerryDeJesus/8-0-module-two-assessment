let select = document.querySelector("#movie-select");

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
            select.append(newOption);
        }
        let form = document.querySelector("form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let chosenMovie = e.target["movie-select"].value;
        let display = document.querySelector("#display-info");
        display.innerHTML = `
            <h3>${chosenMovie}</h3>
            <p></p>
            <p></p>
        `
    })
    })


    