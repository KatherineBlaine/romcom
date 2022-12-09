// Create variables targetting the relevant DOM elements here 👇

var defaultTitle = document.querySelector(".cover-title");     //sets the cover-title html by class to a variable
var defaultTagLine1 = document.querySelector(".tagline-1");
var defaultTagLine2 = document.querySelector(".tagline-2");
var defaultImage = document.querySelector(".cover-image");
var randomCoverButton = document.querySelector('.random-cover-button');
var formViewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');

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

  formViewButton.addEventListener('click', function(){
    document.querySelector('.home-view').hidden = true;           //this uses the .hidden property to hide the homeview 
    document.querySelector('.form-view').style.display = "block"; //this uses the .style.display properties to show the form view
    document.querySelector('.home-button').hidden = false;        //we should implement the above here
    //hide show new cover button with .hidden?
    //hide save cover button with .hidden?
  })

  //apply above to when user clicks "save new cover button"
    //saved covers section should be visible ("block")
    //homepage should be hidden (copy line 30)
    //hide show new random cover button
    //hide save cover button


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
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


