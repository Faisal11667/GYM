/* ==========================
   LOADER
========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});


/* ==========================
   STICKY NAVBAR
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#000";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.6)";

        header.style.boxShadow = "none";

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/* ==========================================
   FADE-UP SCROLL ANIMATION
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

function revealElements() {

    fadeElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 100;

    function updateCounter() {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff3b30;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 10px 20px rgba(255,59,48,.4);
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

progress.style.cssText = `
position:fixed;
top:0;
left:0;
height:4px;
background:#ff3b30;
width:0%;
z-index:99999;
`;

window.addEventListener("scroll", () => {

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progressWidth = (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

/* ==========================================
   GALLERY IMAGE EFFECT
========================================== */

const gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("🔥 IronFit Gym Website Loaded Successfully");


/* ==========================================
   FAQ ACCORDION TOGGLE
========================================== */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.item(0).classList.add("active"); 

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
  

        item.classList.toggle("active");
    });
});



/* ==========================================
   BMI CALCULATOR LOGIC
========================================== */
const bmiBtn = document.getElementById("bmi-btn");
if (bmiBtn) {
    bmiBtn.addEventListener("click", () => {
        const heightInput = document.getElementById("bmi-height").value;
        const weightInput = document.getElementById("bmi-weight").value;
        const resultDiv = document.getElementById("bmi-result");

        if (heightInput === "" || weightInput === "" || heightInput <= 0 || weightInput <= 0) {
            resultDiv.innerHTML = "<span style='color: #ff3b30;'>Please enter valid height and weight!</span>";
            return;
        }

        const heightInMeters = heightInput / 100;
        const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(1);

        let category = "";
        let color = "#fff";

        if (bmi < 18.5) {
            category = "Underweight";
            color = "#3498db";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal Weight";
            color = "#2ecc71";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
            color = "#f1c40f";
        } else {
            category = "Obese";
            color = "#e74c3c";
        }

        resultDiv.innerHTML = `Your BMI is <span style="color: ${color};">${bmi}</span> (${category})`;
    });
}


/* ==========================================
   MODAL POPUP LOGIC
========================================== */
const modal = document.getElementById("trialModal");
const joinBtns = document.querySelectorAll(".btn, .btn2"); 
const closeBtn = document.querySelector(".close-modal");

joinBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (btn.getAttribute("href") === "#" || btn.classList.contains("btn") || btn.classList.contains("btn2")) {
            e.preventDefault();
            if (modal) modal.classList.add("active");
        }
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
