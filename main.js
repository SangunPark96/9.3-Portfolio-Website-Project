//creating variables to target API and query select HTML elements
const form = document.querySelector("#newsSearch");

const base_URL = "https://newsapi.org/v2/everything?q=" 

// const searchTerm = Apple // should change with user input ** will need to place after event listener?

let currentDate = new Date().toJSON().slice(0, 10);

const date = `&from= ${currentDate}` //change to current date

const searchKey = "&sortBy=popularity" 

const apiKey = "&apiKey=0d1cccf0a22042e6aeb60638a22b25b8"

const mainSection = document.querySelector("#topStory");

const newsSearchdiv = document.querySelector("#newsSearchDiv")

const newsSearch = document.querySelector("#newsSearch")

const div1 = document.createElement("div");

const div2 = document.createElement("div");

const div3 = document.createElement("div");

// const searchSection = document.querySelector()

//event listener for On Load
window.addEventListener("load", getTopArticles);

// Handles the on loading event
function getTopArticles(event) {
    event.preventDefault();
    let startAPI = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0d1cccf0a22042e6aeb60638a22b25b8"
    getstartAPIdata(startAPI);
  }

//calls on API to generate Data, will have to make
function getstartAPIdata(api) {
    fetch(api)
      .then((response) => response.json())
      .then((newsData) => {
            getTopStories(newsData);
            // console.log(newsData)
      })
      .catch(console.log);
  }
  
// format to accessing API data targets
//   newsData.articles[0].source.name  
//   newsData.articles[0].title
//   newsData.articles[0].description
//   newsData.articles[0].url
//   newsData.articles[0].urlToImage
//   newsData.articles[0].author
//creating tag variables to populate data
const h2 = document.createElement("h2");
const p1 = document.createElement("p");
const a1 = document.createElement("a")
const img1 = document.createElement("img")

//will focus on search functionality 
function getTopStories(newsData) {
    const topTitle = newsData.articles[0].title
    h2.innerHTML = topTitle
    const topDescription = newsData.articles[0].description
    p1.textContent = topDescription
    img1.setAttribute("src", newsData.articles[0].urlToImage)
    img1.setAttribute("width", "auto")
    img1.setAttribute("height", 175)
    img1.setAttribute("alt", newsData.articles[0].url)
    a1.setAttribute("href", newsData.articles[0].url)
    a1.append(img1)
    mainSection.append(h2, p1, a1)
}



//Event listener and functions for the Search functionality of the webpage
newsSearch.addEventListener("submit", getNewStories);

//Targets the API in accordance with the users search 
function getNewStories(event) {
    event.preventDefault();
    let searchAPI = base_URL + event.target.search.value + date + searchKey + apiKey
    getNewAPI(searchAPI);
}
//Parse the data to then use with a new function to populate data on webpage
function getNewAPI(api) {
    fetch(api)
      .then((response) => response.json())
      .then((searchData) => {
        console.log(searchData)
            getNewArticles(searchData);
      })
      .catch(console.log);
  }

const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");
const p6 = document.createElement("p");
const p7 = document.createElement("p");
const a2 = document.createElement("a")
const a3 = document.createElement("a")
const a4 = document.createElement("a")
const img2 = document.createElement("img")
const img3 = document.createElement("img")
const img4 = document.createElement("img")

function getNewArticles(searchData){
    p2.innerHTML = `<h2>${searchData.articles[0].title}</h2>`
    p3.textContent = searchData.articles[0].description
    img2.setAttribute("src", searchData.articles[0].urlToImage)
    img2.setAttribute("width", "auto")
    img2.setAttribute("height", 175)
    a2.setAttribute("href", searchData.articles[0].url)
    a2.innerHTML = "Link to Article"
    a2.append(img2)

    div1.append(p2, p3, a2)
    newsSearchdiv.append(div1)


    p4.innerHTML = `<h2>${searchData.articles[1].title}</h2>`
    p5.textContent = searchData.articles[1].description
    img3.setAttribute("src", searchData.articles[1].urlToImage)
    img3.setAttribute("width", "auto")
    img3.setAttribute("height", 175)
    a3.setAttribute("href", searchData.articles[1].url)
    a3.innerHTML = "Link to Article"
    a3.append(img3)
    div2.append(p4, p5, a3)
    newsSearchdiv.append(div2)

    p6.innerHTML = `<h2>${searchData.articles[2].title}</h2>`
    p7.textContent = searchData.articles[2].description
    img4.setAttribute("src", searchData.articles[2].urlToImage)
    img4.setAttribute("width", "auto")
    img4.setAttribute("height", 175)
    a4.setAttribute("href", searchData.articles[2].url)
    a4.innerHTML = "Link to Article"
    a4.append(img4)
    div3.append(p6, p7, a4)
    newsSearchdiv.append(div3)
}
  