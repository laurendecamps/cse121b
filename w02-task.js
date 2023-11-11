/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */




/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */

let fullname = 'Lauren DeCamps'

const nameElement = document.getElementById('Lauren DeCamps');
const yearElement = document.querySelector('#year');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src',profilePicture);



const food = ['Pasta', 'Pizza', 'Chicken Wings', 'Steak'];

const count = food.push('Steak');
console.log(count);
// Expected output: 4
console.log(food);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

food.push('Fresh Bread', 'Waffles', 'Chicken Pot Pie');
console.log(food);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


