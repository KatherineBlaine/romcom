// Create variables targetting the relevant DOM elements here 👇

var defaultTitle = document.querySelector(".cover-title");      //sets the cover-title html by class to a variablein the home-view main-cover section
var defaultTagLine1 = document.querySelector(".tagline-1");     //the skeleton of the cover display- the distinct elements that make up the "current cover"
var defaultTagLine2 = document.querySelector(".tagline-2");     //used in the displayNewCover() function, helps us display the generated covers
var defaultImage = document.querySelector(".cover-image");

var randomCoverButton = document.querySelector('.random-cover-button');   //button variables - points to the html of the buttons on the page
var formViewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeMyBookButton = document.querySelector('.create-new-book-button')

var homeView = document.querySelector('.home-view');              //variables for the html sections of various views
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var userCover = document.querySelector('.user-cover');            //variables for the input fields of the form
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('.user-desc1');
var userDescriptor2 = document.querySelector('.user-desc2');

// We've provided a few variables below                           //stores the saved instances of the Cover class in an array
var savedCovers = [ 
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;                                                 //this variable was extremely useful in creating, storing, and displaying the various instances of the cover class. We use it all over the place!

// Add your event listeners here 👇

randomCoverButton.addEventListener('click', function() {          //sets EL to the random cover button, creates new cover, and displays it
  createNewCover()
  displayNewCover(currentCover)}); 

window.addEventListener('load', function() {                      //sets EL to whole window, on page load/refresh, creates new cover and displays it
  createNewCover()
  displayNewCover(currentCover)});

homeButton.addEventListener('click', showHomeView);               //these three ELs allows the navigation buttons to be functional, creates a unique page view for each section of the application
formViewButton.addEventListener('click', showFormView);
viewSavedCoversButton.addEventListener('click', showSavedCovers);
makeMyBookButton.addEventListener('click', preventDefault);       //stops the default action of the form button (make my book) which is to refresh the page. Refresh was causing all of our functionality to reset which was making it not work

makeMyBookButton.addEventListener('click', function() {           //adding EL to makeMyBookButton - defines the event as 'click', and declares our event handler as an anonymous function that holds our other functions/event handlers so they run together. We wanted to be sure we didn't store the following values until the user clicked the makeMyBook button.
  storeInput(covers, userCover.value);                            //this takes the covers array from the data.js file as its first argument, and the value that the user put into the cover field in the form view as its second argument. It stores that value in the covers array. See function declaration below
  storeInput(titles, userTitle.value);
  storeInput(descriptors, userDescriptor1.value);
  storeInput(descriptors, userDescriptor2.value);
  createUserCover();                                              //these functions create a cover from the above values by creating a new instance of the class.
  showHomeView();                                                 //switches us to the home page
  displayNewCover(currentCover);                                  //displays our new cover
});

// Create your event handlers and other functions here 👇
function createNewCover() {                                       //this function's job is to generate a random new instance of the cover class
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];         //uses getRandomIndex to generate index value for data.js arrays
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
};

function createUserCover() {                                      //this function's job is to create a new instance of the cover class with the user input
  currentCover = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
};


function displayNewCover(currentCover) {                           //sets default main-cover html info to our randomly generated cover. It takes a parameter. We used currentCover here as a parameter and an argument later because it kept the lines of logic clear for this application.
  defaultTitle.innerText = currentCover.title;
  defaultTagLine1.innerText = currentCover.tagline1;
  defaultTagLine2.innerText = currentCover.tagline2;
  defaultImage.src = currentCover.cover;
};

function showHomeView () {               //this function's job is to hide or display various html elements depending on what we want to show on the homepage using the hide() and show() functions defined below. 
  show(homeView);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(formView);
  hide(homeButton);  
  hide(savedView);
};

function showSavedCovers() {            //this function's job is to hide or display various html elements depending on what we want to show on the saved covers page using the hide() and show() functions defined below. It also has 
  show(homeButton);
  show(savedView);
  hide(homeView);
  hide(randomCoverButton);
  hide(saveCoverButton);
  hide(formView);
  savedView.innerHTML = '';                 //resets the html so that it can be updated when a user interacts with the page

  for (var i = 0; i < savedCovers.length; i++) {
    savedView.innerHTML +=                         //line 68: div class sets the mini cover class to this section, adding id helps to identify the saved cover later
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

function preventDefault(event) {
  event.preventDefault();
};

function storeInput(array, input) {
  array.push(input);
  return array;
};

// storeInput(array from data page that we want to store it in, the value we want to be stored - querySelector().value)



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

// iteration 2:
// Event listener for make your own cover 
// - return the input value
// create a new class with the arguments coverName, titleName, tagline1, tagline2

// store the inputs into a new cover() instance
// go back to the home page (hide form view) 
// displays created cover on main page - display cover function
// - store in currentCover variable
// - reuse display cover function

// add event.preventDefault() in the function the event listener invokes
