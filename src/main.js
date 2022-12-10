// Create variables targetting the relevant DOM elements here 👇

var defaultTitle = document.querySelector(".cover-title");     //sets the cover-title html by class to a variable
var defaultTagLine1 = document.querySelector(".tagline-1");
var defaultTagLine2 = document.querySelector(".tagline-2");
var defaultImage = document.querySelector(".cover-image");
var randomCoverButton = document.querySelector('.random-cover-button');
var formViewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var savedView = document.querySelector('.saved-view');
var savedCovers = document.querySelector('.saved-covers-section');
var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view') 
var saveCoverButton = document.querySelector('.view-saved-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;

// Add your event listeners here 👇

randomCoverButton.addEventListener('click', function() {          //sets EL to the random cover button, creates new cover, and displays it
  createNewCover()
  displayNewCover(currentCover)}); 

window.addEventListener('load', function() {                      //sets EL to window, on load, creates new cover and displays it
  createNewCover()
  displayNewCover(currentCover)});

formViewButton.addEventListener('click', showFormView)
saveCoverButton.addEventListener('click', showSavedCovers)
homeButton.addEventListener('click', returnHome)


// Create your event handlers and other functions here 👇
function createNewCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
};

function displayNewCover(currentCover) {                            //sets default main-cover html info to our randomly generated cover
  defaultTitle.innerText = currentCover.title;
  defaultTagLine1.innerText = currentCover.tagline1;
  defaultTagLine2.innerText = currentCover.tagline2;
  defaultImage.src = currentCover.cover;
}

function showFormView() {
  hide(homeView)
  hide(randomCoverButton)
  hide(saveCoverButton)
  hide(savedView)
  show(formView)
  show(homeButton)
}


function showSavedCovers() {
  hide(homeView)
  hide(randomCoverButton)
  hide(saveCoverButton)
  hide(formView)
  show(homeButton)
  show(savedView)
savedView.innerHTML = '';
for (var i = 0; i < savedCovers.length; i++) {
  savedView.innerHTML = 
  `<div class ='mini-cover' id = ${savedCovers[i].id}>
  <img class='cover-image' src= ${savedCovers[i].cover}>
  <h2 class='cover-title'> ${savedCovers[i].title}</h2>
  <h3 class='tagline'>A tale of <span class='tagline-1'>${savedCovers[i].tagline1}</span> and <span class='tagline-2'>${savedCovers[0].tagline2}</span></h3>
  <img class='price-tag' src='./assets/price.png'>
  <img class='overlay' src='./assets/overlay.png'>`
}
}

function returnHome() {
  hide(savedView)
  hide(homeButton)
  hide(formView)
  hide(savedView)
  show(homeView)
  show(randomCoverButton)
  show(saveCoverButton)
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(elements) {
  elements.classList.remove('hidden')
}

function hide(elements) {
  elements.classList.add('hidden')
}