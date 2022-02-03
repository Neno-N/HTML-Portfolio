const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//Variables
const btn = document.getElementById('btn')
const theFace = document.getElementById('faces');
const theBod = document.getElementById('body');
const navBar = document.querySelector('nav');
const theColour = document.querySelector('.theColour')


//Event Listeners

btn.addEventListener('click', function(){
    let hexColour = '#'
for (let i=0; i<6; i++){
    hexColour += hex[randomNumber()]
};

    changeColour(theFace, hexColour);
    changeColour(theBod, hexColour);
    changeColour(navBar, hexColour);
    changeColour(btn, hexColour);
    theColour.textContent = hexColour;
    
});


//Functions

// Random Number
const randomNumber = () => {
    return Math.floor(Math.random()*hex.length)
};

//change colour
const changeColour = (element, colour) => {
    return element.style.backgroundColor = colour
}