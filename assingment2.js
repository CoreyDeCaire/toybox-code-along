// I first attempted to make the slide out navBar close using the X. I tried the code below (as well as many different versions but couldn't get it to close.) I know there is a way to target the button and then have it hide/show using a toggle status but couldn't make it work. I left in the code but blocked it off just to show what I was up to/attempting.


// const closeButton = document.querySelector('button')
// console.log(closeButton)

// closeButton.addEventListener('click', function(event){
//     event.preventDefault();
//     closeNav = toggle
// })


// create a Variable to select my Button
const darkMode = document.querySelector('button')
// Add an event listener for the 'click' of the button and run the toggle function to change between regular mode and dark mode.
darkMode.addEventListener('click', function() {
    document.body.classList.toggle('darkModeStyle')
})
// Left in the console log to show the element I was trying to manipulate.
console.log(darkMode)
// To complete this I used _baseStyles.scss and put in a .darkModeStyle and added some style to the button.
// I also added a button in my HTML
