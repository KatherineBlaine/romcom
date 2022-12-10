// Create variables targetting the relevant DOM elements here 👇

var defaultTitle = document.querySelector(".cover-title");     //sets the cover-title html by class to a variable
var defaultTagLine1 = document.querySelector(".tagline-1");
var defaultTagLine2 = document.querySelector(".tagline-2");
var defaultImage = document.querySelector(".cover-image");

var randomCoverButton = document.querySelector('.random-cover-button');
var formViewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

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

homeButton.addEventListener('click', showHomeView);
formViewButton.addEventListener('click', showFormView);
viewSavedCoversButton.addEventListener('click', showSavedCovers);

// Create your event handlers and other functions here 👇
function createNewCover() {
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];         //uses getRandomIndex to generate index value for data.js arrays
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
    var randomCover = covers[getRandomIndex(covers)];
    var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
};

function displayNewCover(currentCover) {                            //sets default main-cover html info to our randomly generated cover
  defaultTitle.innerText = currentCover.title;
  defaultTagLine1.innerText = currentCover.tagline1;
  defaultTagLine2.innerText = currentCover.tagline2;
  defaultImage.src = currentCover.cover;
};

function showHomeView () {                  
  show(homeView);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(formView);
  hide(homeButton);  
  hide(savedView);
};

function showSavedCovers() {
  show(homeButton);
  show(savedView);
  hide(homeView);
  hide(randomCoverButton);
  hide(saveCoverButton);
  hide(formView);
  savedView.innerHTML = '';                         //

  for (var i = 0; i < savedCovers.length; i++) {
    savedView.innerHTML =                         //line 68: div class sets the mini cover class to this section, adding id helps to identify the saved cover later
     `<div class='mini-cover' id=${savedCovers[i].id}>           
      <img class='cover-image' src= ${savedCovers[i].cover}>
      <h2 class='cover-title'> ${savedCovers[i].title}</h2>
      <h3 class='tagline'>A tale of <span class='tagline-1'>${savedCovers[i].tagline1}</span> and <span class='tagline-2'>${savedCovers[i].tagline2}</span></h3>
      <img class='price-tag' src='./assets/price.png'>
      <img class='overlay' src='./assets/overlay.png'>`
  }
};

function showFormView() { 
  show(formView);
  show(homeButton); 
  hide(homeView);       
  hide(randomCoverButton);
  hide(saveCoverButton);
  hide(savedView);
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(elements) {
  elements.classList.remove("hidden");
};

function hide(elements) {
  elements.classList.add("hidden");
};

