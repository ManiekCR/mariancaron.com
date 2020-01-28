//To change navbar buttons color on click
// Get the list of buttons
let buttons = document.querySelectorAll('.navbar a');

// Get the container element
let buttonContainer = document.getElementsByClassName('navbar');

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//To reset active class to HOME when we click on the scroll to the top button
const homeButton = document.getElementById('home-button');
const scrollButton = document.getElementById('link-top');

scrollButton.addEventListener("click", function() {
  let current = document.querySelector(".active");
  current.className = current.className.replace(" active", "");
  homeButton.classList.add("active");
})
