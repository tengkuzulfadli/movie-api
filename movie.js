function waitForData(response){
    return response.json();
}

function handleData(data){
    let poster = data.Poster;
    let title = data.Title;
    let plot = data.Plot;

    let resultsDiv = document.querySelector("#results");
    let markup = `
        <h2>${title}</h2>
        <img src="${poster}" />
        <p>${plot}</p>
    `;
    resultsDiv.innerHTML = markup;
}

function requestMovieData(title){

    // Make AJAX Request
    // - API endpoint

    const url = "http://www.omdbapi.com/";

    // What are the query parameters we need to provide
    // - apiKey (Required)
    // - t (Optional - title of the movie)
    // - plot=full (Optional - full plot of the movie)

    const apiKey = "55b076c";
    const queryString = `?plot=full&t=${title}&apikey=${apiKey}`;
    const apiEndpoint = url + queryString;

    fetch(apiEndpoint).then(waitForData).then(handleData);
}

requestMovieData("Jaws");

let form = document.querySelector("form");

function onSubmit(event){
    event.preventDefault();
    let input = document.querySelector("input");
    let titleInput = input.value;
    requestMovieData(titleInput);
}

form.addEventListener("submit", onSubmit);