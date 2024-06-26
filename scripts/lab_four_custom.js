/*
    Accordion Javascript

    Add event listener on button
    Everytime button is click, the following are change:
    - Toggle active class in the button
    - Toggle the active-panel class in the div next to the button
    - Toggle the arrow button of the idiomatic text tag inside the button

*/


let accordions = document.querySelectorAll("button.accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");
    acco.nextElementSibling.classList.toggle("active-panel");
    acco.getElementsByClassName("fa-solid")[0].classList.toggle("fa-chevron-up");
    acco.getElementsByClassName("fa-solid")[0].classList.toggle("fa-chevron-down")
  };
});

// Get all elements with class "card"
var cards = document.querySelectorAll('.card img');

// Loop through each element and add a click event listener
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        alert(`You clicked the ${card.alt}`);
    });
});

/*
    Copyright Javascript

    Set the text of the span to current year
    
*/

document.getElementById("footer-year").textContent = new Date().getFullYear();
