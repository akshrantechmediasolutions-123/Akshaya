function openSupport() {

  document.getElementById(
    "supportPopup"
  ).style.display = "block";

}

function closeSupport() {

  document.getElementById(
    "supportPopup"
  ).style.display = "none";

}

function openQuotation() {

  document.getElementById(
    "quotationPopup"
  ).style.display = "block";

}

function closeQuotation() {

  document.getElementById(
    "quotationPopup"
  ).style.display = "none";

}

/* ================================= */
/* AKSHRAN PREMIUM LOADER */
/* ================================= */

window.addEventListener(
  "load",
  function(){

    setTimeout(function(){

      const loader =
      document.getElementById(
        "loader"
      );

      loader.style.opacity = "0";

      loader.style.visibility =
      "hidden";

      loader.style.transition =
      "all 1.2s ease";

    },3000);

});

/* ================================= */
/* APPOINTMENT BOOKING */
/* ================================= */

document.getElementById(
"appointmentForm"
).addEventListener(
"submit",
function(e){

e.preventDefault();

/* SEND EMAIL */

fetch(
"https://formsubmit.co/ajax/akshrantech.mediasolutions@gmail.com",
{

method:"POST",

headers:{
'Content-Type':'application/json'
},

body:JSON.stringify({

name:
document.getElementById(
"appName"
).value,

phone:
document.getElementById(
"appPhone"
).value,

email:
document.getElementById(
"appEmail"
).value,

date:
document.getElementById(
"appDate"
).value,

time:
document.getElementById(
"appTime"
).value,

message:
document.getElementById(
"appMessage"
).value

})

}

)

.then(response => response.json())

.then(data => {

/* SHOW SUCCESS */

document.getElementById(
"appointmentSuccess"
).style.display =
"flex";

/* RESET FORM */

document.getElementById(
"appointmentForm"
).reset();

});

});

/* CLOSE SUCCESS POPUP */

function closeAppointmentSuccess(){

document.getElementById(
"appointmentSuccess"
).style.display =
"none";

}

/* CLOSE POPUP WHEN CLICK OUTSIDE */

window.onclick = function(event) {

  const supportPopup =
    document.getElementById(
      "supportPopup"
    );

  const quotationPopup =
    document.getElementById(
      "quotationPopup"
    );

  if (event.target == supportPopup) {

    supportPopup.style.display = "none";

  }

  if (event.target == quotationPopup) {

    quotationPopup.style.display = "none";

  }

}

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function () {

  const header =
    document.querySelector("header");

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(5,5,15,0.95)";

    header.style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.4)";

  } else {

    header.style.background =
      "rgba(10,10,20,0.75)";

    header.style.boxShadow =
      "none";

  }

});

/* SMOOTH SCROLL */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(anchor => {

  anchor.addEventListener(
    "click",
    function(e) {

      e.preventDefault();

      document.querySelector(
        this.getAttribute("href")
      ).scrollIntoView({

        behavior: "smooth"

      });

    }

  );

});

/* ANIMATION ON SCROLL */

const cards =
  document.querySelectorAll(
    ".service-card, .pricing-card, .contact-card"
  );

window.addEventListener(
  "scroll",
  revealCards
);

function revealCards() {

  const triggerBottom =
    window.innerHeight * 0.85;

  cards.forEach(card => {

    const cardTop =
      card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {

      card.style.opacity = "1";

      card.style.transform =
        "translateY(0px)";

    }

  });

}

/* INITIAL CARD STYLE */

cards.forEach(card => {

  card.style.opacity = "0";

  card.style.transform =
    "translateY(40px)";

  card.style.transition =
    "all 0.8s ease";

});

/* SUPPORT FORM */

document.getElementById(
  "supportForm"
).addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    fetch(
      "https://formsubmit.co/ajax/akshrantech.mediasolutions@gmail.com",
      {
        method:"POST",

        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify({

          name:this.name.value,
          phone:this.phone.value,
          query:this.query.value

        })

      }

    )

    .then(response => response.json())

    .then(data => {

      document.getElementById(
        "supportPopup"
      ).style.display = "none";

      document.getElementById(
        "successPopup"
      ).style.display = "flex";

      this.reset();

    });

});

/* QUOTATION FORM */

document.getElementById(
  "quotationForm"
).addEventListener(
  "submit",
  function(e){

    e.preventDefault();

    fetch(
      "https://formsubmit.co/ajax/akshrantech.mediasolutions@gmail.com",
      {
        method:"POST",

        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify({

          name:this.name.value,
          company:this.company.value,
          number:this.number.value,
          service:this.service.value

        })

      }

    )

    .then(response => response.json())

    .then(data => {

      document.getElementById(
        "quotationPopup"
      ).style.display = "none";

      document.getElementById(
        "successPopup"
      ).style.display = "flex";

      this.reset();

    });

});

/* CLOSE SUCCESS POPUP */

function closeSuccess(){

  document.getElementById(
    "successPopup"
  ).style.display = "none";

}

/* ================================= */
/* COUNTER ANIMATION */
/* ================================= */

const counters =
document.querySelectorAll(
".counter"
);

const speed = 200;

const startCounter = () => {

counters.forEach(counter => {

const updateCount = () => {

const target =
+counter.getAttribute(
"data-target"
);

const count =
+counter.innerText;

const increment =
target / speed;

if(count < target){

counter.innerText =
Math.ceil(
count + increment
);

setTimeout(
updateCount,
10
);

}else{

counter.innerText =
target + "+";

}

};

updateCount();

});

};

/* START COUNTER */

startCounter();

/* ================================= */
/* OUR PROCESS SECTION ANIMATION */
/* ================================= */

const processCards =
document.querySelectorAll(".process-card");

/* SCROLL EVENT */

window.addEventListener(
"scroll",
revealProcessCards
);

/* FUNCTION */

function revealProcessCards(){

    const triggerBottom =
    window.innerHeight * 0.85;

    processCards.forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0px) scale(1)";

        }

    });

}

/* INITIAL STYLE */

processCards.forEach((card,index) => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(80px) scale(0.9)";

    card.style.transition =
    `all 0.8s ease ${index * 0.15}s`;

});

/* RUN ON LOAD */

revealProcessCards();

/* ================================= */
/* SCROLL PROGRESS BAR */
/* ================================= */

const progressBar =
document.querySelector(
".scroll-progress-bar"
);

window.addEventListener(
"scroll",
() => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    scrollPercent + "%";

});

/* ================================= */
/* HIDE NAVBAR ON SCROLL - MOBILE */
/* ================================= */

let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.innerWidth <= 900) {

        let currentScroll =
            window.pageYOffset ||
            document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > 100) {

            navbar.style.transform = "translateY(-100%)";

        } else {

            navbar.style.transform = "translateY(0)";

        }

        lastScrollTop = currentScroll;

    }

});

/* RUN ON LOAD */

revealCards();
