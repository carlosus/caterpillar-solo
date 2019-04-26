//iport needed function
import addDonut from './add-donut.js';

//get needed DOM elements
const donutButtons = document.querySelectorAll('.donut');
const dog = document.getElementById('dog');

//initialize things
for(let i = 0; donutButtons.length; i++) {
    const donutButton = donutButtons[i];

    donutButton.addEventListener('click', () => {
        addDonut(dog, donutButton.value);
    });
} 