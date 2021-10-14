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
            newOption.id = movie.id;
            select.append(newOption);
        }

    select.addEventListener("change", (e)=>{
        e.preventDefault();
        let chosenMovie = e.target.value;
        let display = document.querySelector("#display-info");
        for(let i=0; i < data.length;i++){
            if(chosenMovie === data[i].title){
                display.innerHTML = `
            <h3>${data[i].title}</h3>
            <p>${data[i].release_date}</p>
            <p>${data[i].description}</p>`
            }
        }
    })


        let form = document.querySelector("form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let movieTitle = document.querySelector("h3");
        let newReview = document.createElement("li");
        let reviewEntry = document.querySelector("#reviewEntry");
        newReview.innerHTML = `<b>${movieTitle.textContent}: </b>${reviewEntry.value}`;
        reviewEntry.value = "";
        let reviewList = document.querySelector("#review-list");
        reviewList.append(newReview);
    })
    })


    