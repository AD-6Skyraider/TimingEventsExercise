// TIMING EVENTS EXERCISE 

// 1
setTimeout(() => {
    const one = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `ONE`;
    one.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const two = document.querySelector(`#timeout-nesting`);
    const p1 = document.createElement(`p`);
    p1.innerText = `One`;
    two.append(p1);
    
    setTimeout(() => {
    const p2 = document.createElement(`p`);
    p2.innerText = `Two`;
    two.append(p2);
    }, 1000);
}, 2000);

// 3a
// let time = 1;
// const threeb = setInterval(() => {
//    console.log(time); 
//    time++;
// }, 1000);

// 3b
const stop = document.querySelector(`button`)
stop.addEventListener(`click`, () => {
    clearInterval(threeb);
});

// BONUS 4
const countdown = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerHTML = `2:00`;
countdown.append(p4);

const startTime = 2;
let time = startTime * 60; // 2 * 60 seconds
function updateCountdown(){
    const minutes = Math.floor(time / 60); // Makes it 2.
    let seconds = time % 60; // 60 goes into 120 2 times. Nothing left over. Makes the seconds part of the counter 0
    seconds = (seconds < 10) ? `0` + seconds : seconds; // Displays the `00`
    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

setInterval(() => {
    updateCountdown();
    if (time <= 0){
        countdown.innerHTML = `TIME IS UP!`;
    }
}, 1000);

// I have no clue...

// let num = 120;
// const countdown = setInterval(() => {
//    if (num > 0){
//        console.log(num);
//    } else {
//        clearInterval(countdown);
//    }
//    num--;
// }, 1000);

// setTimeout(() => {
//     const one = document.querySelector(`#first`);
//     const p1 = document.createElement(`p`);
//     p1.innerText = `ONE`;
//     one.append(p1);
// }, 1000);

// function myFunction() {
//     setTimeout(function(){
//         const timer = document.createElement(`p`) 
//         alert("Hello"); 
//     }, 3000);
//   }