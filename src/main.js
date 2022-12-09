// Create variables targetting the relevant DOM elements here 👇

var myTitle = document.querySelector(".cover-title");
var myTagLine1 = document.querySelector(".tagline-1");
var myTagLine2 = document.querySelector(".tagline-2");
var myImage = document.querySelector(".cover-image");
var randomCoverButton = document.querySelector('.random-cover-button');
var formViewButton = document.querySelector('.make-new-button')
console.log(formViewButton)
var homeButton = document.querySelector('.home-button') 
//console.log(homeButton)

var formView = document.querySelector('.view form-view hidden')
//formView.style.display = 'block'

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;

// Add your event listeners here 👇
//on click - create a new random instance of the cover class


randomCoverButton.addEventListener('click', function() {
  createNewCover()
  displayNewCover(currentCover)}); 
window.addEventListener('load', function() {
  createNewCover()
  displayNewCover(currentCover)});

  formViewButton.addEventListener('click', function(){
    document.querySelector('.home-view').hidden = true;
    document.querySelector('.home-button').hidden = false;
    document.querySelector('.form-view').hidden = false;
    
  }, false)
console.log(document.querySelector('.home-view'))

// Create your event handlers and other functions here 👇
function createNewCover() {
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
    var randomCover = covers[getRandomIndex(covers)];
    var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
};

function displayNewCover(currentCover) {
  myTitle.innerText = currentCover.title;
  myTagLine1.innerText = currentCover.tagline1;
  myTagLine2.innerText = currentCover.tagline2;
  myImage.src = currentCover.cover;
}

function changeToFormView(){
  //show the home button
  homeButton
    //change the .innerHTML() to view form - view hidden
  //show the form view
    //change the .innerHTML to view form - view hidden
  //hide the home view
  //hide save cover button
  //hide show new random cover button
}

changeToFormView()


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


