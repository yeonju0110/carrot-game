'use strict';
const start =  document.querySelector('.set__start');
const currentTime = document.querySelector('.set__time');
const final = document.querySelector('.play__final');
const result = document.querySelector('.play__result');

start.addEventListener('click',() => {
    start.innerHTML = `<i class="fas fa-stop"></i>`;
    timer();
});
let end = 0;
function timer(){
    let time = 10;
    let cnt = 10;
    var x = setInterval(function(){
        time--;
        currentTime.innerHTML = `0:${time}`;
        if (cnt === 0) {
            clearInterval(x);
            start.style.opacity = 0;
            result.innerText = 'YOU WON 🎉';
            final.style.visibility = 'visible';
        } else if (time === 0) {
            clearInterval(x);
            start.style.opacity = 0;
            final.style.visibility = 'visible';
            end = 1;
        }
    }, 1000);
}
