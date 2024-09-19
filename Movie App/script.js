const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=00431f6aa43b05b96c021b30d4fd9583&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=00431f6aa43b05b96c021b30d4fd9583&query=";

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(APILINK)

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results)
        data.results.forEach(element => {
            const divCard = document.createElement("div")
            divCard.setAttribute("class", "card")

            const divRow = document.createElement("div")
            divRow.setAttribute("class", "row")

            const divCol = document.createElement("div")
            divCol.setAttribute("class", "column")

            const image = document.createElement("img")
            image.setAttribute("class", "thumbnail")
            image.setAttribute("id", "image")

            const titleH3 = document.createElement("h3")
            titleH3.setAttribute("id", "title")
            // const center = document.createElement("center") // <center> is deprecated

            titleH3.innerHTML = `${element.title}`
            image.src = IMG_PATH + element.poster_path

            divCard.appendChild(image)
            divCard.appendChild(titleH3)
            divCol.appendChild(divCard)
            divRow.appendChild(divCol)

            main.appendChild(divRow)
        })
    })
}

form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    main.innerHTML = ""

    const searchItem = search.value

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem)
        search.value = ""
    }
})