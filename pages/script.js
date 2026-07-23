/* ==========================================
Hero Text Animation
========================================== */

const heroTitle = document.querySelector(".football-content h1");

const titles = [

"⚽ Play For Glory",

"🏆 Compete With Excellence",

"⭐ Earn Your Place On The Official LOC Football Team"

];

let currentTitle = 0;

setInterval(()=>{

heroTitle.style.opacity="0";

setTimeout(()=>{

currentTitle++;

if(currentTitle>=titles.length){

currentTitle=0;

}

heroTitle.innerHTML=titles[currentTitle];

heroTitle.style.opacity="1";

},500);

},3500);

/* ==========================================
FAQ ACCORDION
========================================== */

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    const icon = question.querySelector("span");

    question.addEventListener("click", () => {

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

            icon.innerHTML = "+";

        }else{

            faqs.forEach(other => {

                other.querySelector(".faq-answer").style.maxHeight = null;

                other.querySelector(".faq-question span").innerHTML = "+";

            });

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.innerHTML = "−";

        }

    });

});

/* ==========================================
REGISTRATION COUNTDOWN
========================================== */

const deadline = new Date("October 25, 2026 23:59:59").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = deadline-now;

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000);

},1000);