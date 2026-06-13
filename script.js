const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("birthday-song");

musicBtn.addEventListener("click", function () {

    music.play();

});
window.onload = function () {

    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 3,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 3,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

    const giftBtn = document.getElementById("gift-btn");
    const giftMessage = document.getElementById("gift-message");

    giftBtn.addEventListener("click", function () {

        if (giftMessage.classList.contains("hidden")) {
            giftMessage.classList.remove("hidden");
        } else {
            giftMessage.classList.add("hidden");
        }

    });

};

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    reveals.forEach(function (card) {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.classList.add("active");
        }

    });

});
let clicks = 0;

const secretBtn = document.getElementById("secret-btn");
const secretMessage = document.getElementById("secret-message");

if(secretBtn){

    secretBtn.addEventListener("click", function(){

        clicks++;

        if(clicks === 1){
            secretMessage.textContent = "I knew you wouldn't listen 😭";
        }

        else if(clicks === 2){
            secretMessage.textContent = "Still clicking?";
        }

        else if(clicks === 3){
            secretMessage.textContent = "This explains a lot.";
        }

        else if(clicks === 4){
            secretMessage.textContent = "My Señorita, please stop 😭";
        }

        else if(clicks === 5){
            secretMessage.textContent = "Fine. Happy Birthday, Hawa 🎉";
        }

    });

}
