
let gifts = 0;
let christmasSpirit = 0;


const giftsDisplay = document.getElementById('gifts');
const energyFill = document.getElementById('energyFill');


function addGift() {
    gifts++;
    giftsDisplay.textContent = gifts;
}


function increaseEnergy(amount) {
    christmasSpirit += amount;
    if (christmasSpirit > 100) christmasSpirit = 100; 
    energyFill.style.width = `${christmasSpirit}%`;
}


setInterval(() => {
    addGift(); 
    increaseEnergy(5); 
}, 3000);

const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');

let hourAngle = 0; 
let minuteAngle = 0; 

function spinClock() {
   
    hourAngle = (hourAngle + 1) % 360; 
    minuteAngle = (minuteAngle + 6) % 360; 

    if (minuteAngle === 0) {
        minuteHand.style.transition = 'none';
    } else {
        minuteHand.style.transition = 'transform 0.1s linear';
    }

   
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
}

setInterval(spinClock, 100);
