const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        hamburger.textContent = "✕";

    }else{

        hamburger.textContent = "☰";

    }

});

// =====================================================
// Highlight Video
// =====================================================

const playVideo = document.getElementById("playVideo");

const videoPopup = document.getElementById("videoPopup");

const closeVideo = document.querySelector(".close-video");

const video = document.getElementById("highlightVideo");

playVideo.addEventListener("click",()=>{

    videoPopup.classList.add("active");

    video.play();

});

closeVideo.addEventListener("click",()=>{

    video.pause();

    video.currentTime=0;

    videoPopup.classList.remove("active");

});

videoPopup.addEventListener("click",(e)=>{

    if(e.target===videoPopup){

        video.pause();

        video.currentTime=0;

        videoPopup.classList.remove("active");

    }

});

// ==========================================
// Scroll to Highlight Video
// ==========================================

const watchTrailer = document.getElementById("watchTrailer");

watchTrailer.addEventListener("click", () => {

    document.getElementById("highlights").scrollIntoView({

        behavior: "smooth"

    });

});

// ==========================================
// Scroll to Registration
// ==========================================

const registerNow = document.getElementById("registerNow");

registerNow.addEventListener("click", () => {

    document.getElementById("register").scrollIntoView({

        behavior: "smooth"

    });

});


const navRegister = document.getElementById("navRegister");

navRegister.addEventListener("click", () => {

    document.getElementById("register").scrollIntoView({

        behavior: "smooth"

    });

});

// =====================================================
// COUNTDOWN TIMER
// =====================================================

// TODO:
// Replace this with your actual event date.
// Format: YYYY-MM-DDTHH:MM:SS

const eventDate = new Date("2026-10-01T09:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance <= 0){

        clearInterval(countdown);

        document.querySelector(".countdown-container").innerHTML = `

            <div style="
                color:white;
                font-size:50px;
                font-weight:bold;
                text-align:center;
            ">

                🎉 THE EVENT IS LIVE! 🎉

            </div>

        `;

        return;

    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

},1000);

// ===========================
// PRELOADER
// ===========================

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("preloader").style.opacity="0";

document.getElementById("preloader").style.visibility="hidden";

},2500);

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));

// ====================================
// REGISTRATION FORM
// ====================================

const form = document.getElementById("registrationForm");

const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function(e){

e.preventDefault();

submitBtn.disabled = true;

submitBtn.innerHTML = "Registering...";

const data = new FormData(form);

const response = await fetch(form.action,{

method:"POST",

body:data,

headers:{

'Accept':'application/json'

}

});

if(response.ok){

showSuccessPopup();

form.reset();

submitBtn.innerHTML="✔ Registered";

}
else{

alert("Something went wrong. Please try again.");

submitBtn.innerHTML="Register Now →";

}

submitBtn.disabled=false;

});

// ==============================
// SUCCESS POPUP
// ==============================

function showSuccessPopup(){

document
.getElementById("successPopup")
.classList.add("active");

}

function closePopup(){

document
.getElementById("successPopup")
.classList.remove("active");

window.location="#home";

}

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("loader-hide");

},1800);

});