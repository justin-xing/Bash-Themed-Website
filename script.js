// Declarations
let search = document.querySelector('.search');
let inputText = search.value;

// When the user scrolls the page, execute stickyHeader
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.querySelector("#myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Functions to be called upon input text + enter press
let output = document.querySelector('.output');

function ls () {
  output.textContent = 'Try typing cd with one of these (ex. "cd about"): about resume projects interests myCat';
  search.value = '';
}

function cd (s) {
  if (s === 'about') {
    window.location.href = "about.html";
  } else if (s === 'resume') {
    window.location.href = "resume.html";
  } else if (s === 'projects') {
    window.location.href = "projects.html";
  } else if (s === 'myCat') {
    window.location.href = "myCat.html";
  }
  search.value = '';
}

// Executing functions upon text input + enter press

function readTextInput () {
  if (inputText.substring(0, 2) === 'cd') {
    cd(inputText.substring(3));
  } else if (inputText.substring(0, 2) === 'ls') {
    ls();
  } else {
    output.textContent = 'Enter a valid input! Try ls!'
  }
}

search.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    inputText = search.value;
    readTextInput();
  }
})