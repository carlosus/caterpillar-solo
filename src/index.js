//iport needed function
import addDonut from './add-donut.js';

//get needed DOM elements
const donutButtons = document.querySelectorAll('.donut');
const dog = document.getElementById('dog');
const resetButton = document.getElementById('reset-button');

//initialize things
for(let i = 0; donutButtons.length; i++) {
    const donutButton = donutButtons[i];

    donutButton.addEventListener('click', () => {
        addDonut(dog, donutButton.value);
    });
} 

//wiring up listening event and button removal
resetButton.addEventListener('click', () => {
    dog.innerHTML = '';
});