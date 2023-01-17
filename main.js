//creating variables to target API and query select HTML elements

const form = document.querySelector("#newsSearch");

const base_URL = "https://newsapi.org/v2/everything?q=" 

// const searchTerm = Apple // should change with user input ** will need to place after event listener?

let currentDate = new Date().toJSON().slice(0, 10);

const date = `&from= ${currentDate}` //change to current date

const searchKey = "&sortBy=popularity" 

const apiKey1 = "&apiKey="

const apiKey2 = "0d1cccf0a22042e6aeb60638a22b25b8"

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
    let startAPI = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey2
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
const p8 = document.createElement("p")
const p9 = document.createElement("p")
const p10 = document.createElement("p")
const p11 = document.createElement("p")
const divA = document.createElement("div")
const divB = document.createElement("div")
const divC = document.createElement("div")
const pA = document.createElement("p");
const pB = document.createElement("p");
const pC = document.createElement("p");
const pD = document.createElement("p");
const pE = document.createElement("p");
const pF = document.createElement("p");
const aA = document.createElement("a")
const aB = document.createElement("a")
const aC = document.createElement("a")
const imgA = document.createElement("img")
const imgB = document.createElement("img")
const imgC = document.createElement("img")



//will focus on search functionality 
function getTopStories(newsData) {
    const topTitle = newsData.articles[0].title
    h2.innerHTML = topTitle
    p8.innerHTML = `<strong> By ${newsData.articles[0].source.name} </strong>`
    const topDescription = newsData.articles[0].description
    p1.textContent = topDescription
    img1.setAttribute("src", newsData.articles[0].urlToImage)
    img1.setAttribute("width", "auto")
    img1.setAttribute("height", 175)
    img1.setAttribute("alt", newsData.articles[0].url)
    a1.setAttribute("href", newsData.articles[0].url)
    a1.append(img1)
    divA.append(h2, p8, p1, a1);
    mainSection.append(divA);

    pA.innerHTML = `<h2>${newsData.articles[1].title}</h2>`;
    pB.innerHTML =`<strong> By ${newsData.articles[1].source.name} </strong>`;
    pC.textContent = newsData.articles[1].description
    imgA.setAttribute("src", newsData.articles[1].urlToImage)
    imgA.setAttribute("width", "auto")
    imgA.setAttribute("height", 175)
    imgA.setAttribute("alt", newsData.articles[1].url)
    aA.setAttribute("href", newsData.articles[1].url)
    aA.append(imgA)

    divB.append(pA, pB, pC, aA)
    mainSection.append(divB);

    pD.innerHTML = `<h2>${newsData.articles[2].title}</h2>`;
    pE.innerHTML =`<strong> By ${newsData.articles[2].source.name} </strong>`;
    pF.textContent = newsData.articles[2].description
    imgB.setAttribute("src", newsData.articles[2].urlToImage)
    imgB.setAttribute("width", "auto")
    imgB.setAttribute("height", 175)
    imgB.setAttribute("alt", newsData.articles[2].url)
    aB.setAttribute("href", newsData.articles[2].url)
    aB.append(imgB)

    divC.append(pD, pE, pF, aB)
    mainSection.append(divC);

}



//Event listener and functions for the Search functionality of the webpage
newsSearch.addEventListener("submit", getNewStories);

//Targets the API in accordance with the users search 
function getNewStories(event) {
    event.preventDefault();
    let searchAPI = base_URL + event.target.search.value + date + searchKey + apiKey1 + apiKey2;
    getNewAPI(searchAPI);
}
//Parse the data to then use with a new function to populate data on webpage
function getNewAPI(api) {
    fetch(api)
      .then((response) => response.json())
      .then((searchData) => {
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
    p2.innerHTML = `<h2>${searchData.articles[0].title}</h2>`;
    p9.innerHTML =`<strong> By ${searchData.articles[0].source.name} </strong>`;
    p3.textContent = searchData.articles[0].description
    img2.setAttribute("src", searchData.articles[0].urlToImage)
    img2.setAttribute("width", "auto")
    img2.setAttribute("height", 175)
    img2.setAttribute("alt", searchData.articles[0].url)
    a2.setAttribute("href", searchData.articles[0].url)
    a2.append(img2)

    div1.append(p2, p9, p3, a2)
    newsSearchdiv.append(div1)


    p4.innerHTML = `<h2>${searchData.articles[1].title}</h2>`
    p10.innerHTML =`<strong> By ${searchData.articles[1].source.name} </strong>`
    p5.textContent = searchData.articles[1].description
    img3.setAttribute("src", searchData.articles[1].urlToImage)
    img3.setAttribute("width", "auto")
    img3.setAttribute("height", 175)
    img3.setAttribute("alt", searchData.articles[1].url)
    a3.setAttribute("href", searchData.articles[1].url)
    a3.append(img3)
    div2.append(p4, p10, p5, a3)
    newsSearchdiv.append(div2)

    p6.innerHTML = `<h2>${searchData.articles[2].title}</h2>`
    p11.innerHTML =`<strong> By ${searchData.articles[2].source.name} </strong>`
    p7.textContent = searchData.articles[2].description
    img4.setAttribute("src", searchData.articles[2].urlToImage)
    img4.setAttribute("width", "auto")
    img4.setAttribute("height", 175)
    img4.setAttribute("alt", searchData.articles[2].url)
    a4.setAttribute("href", searchData.articles[2].url)
    a4.append(img4)
    div3.append(p6, p11, p7, a4)
    newsSearchdiv.append(div3)
}
  