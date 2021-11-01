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