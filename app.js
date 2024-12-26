

const sections = document.querySelectorAll('.section2 div');

sections.forEach((section, index) => {
    section.addEventListener('mouseover', function() {
        section.style.backgroundColor = 'white'; 
        const text = section.querySelector('p'); 
        const number = section.querySelector('h2'); 
        const icon = section.querySelector('img'); 

        text.style.color = '#074c90';
        number.style.color = '#074c90';
        icon.src = getNewIconSrc(index); 
    });

    section.addEventListener('mouseout', function() {
        section.style.backgroundColor = '#052d57'; 
        const text = section.querySelector('p'); 
        const number = section.querySelector('h2'); 
        const icon = section.querySelector('img'); 

        text.style.color = 'white';
        number.style.color = 'white';
        icon.src = getDefaultIconSrc(index); 
    });
});

function getNewIconSrc(index) {
    const icons = [ './araliqImg/costumer(2).png', 
              './araliqImg/web-browser.png',   
             './araliqImg/achievement(1).png',
            './araliqImg/web-design(1).png'  ];
    return icons[index];
}

function getDefaultIconSrc(index) {
    const icons = ['./araliqImg/costumer(1).png',  
         './araliqImg/web-browser(1).png', 
        './araliqImg/achievement.png',   
        './araliqImg/web-design.png' ];
    return icons[index];
}




function animateCounter(element, start, end, duration) {
  let current = start;
  const increment = (end - start) / (duration / 50);
  const counter = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(counter);
    }
    element.textContent = Math.floor(current) + "+";
  }, 50);
}

function observeCounters() {
  const statsSection = document.querySelector(".about-office");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const customerCounter = document.querySelector(".logo-client h2");
          const websiteCounter = document.querySelector(".logo-web h2");
          const partnerCounter = document.querySelector(".logo-partner h2");
          const designCounter = document.querySelector(".logo-design h2");

          animateCounter(customerCounter, 0, 2700, 2000);
          animateCounter(websiteCounter, 0, 250, 2000); 
          animateCounter(partnerCounter, 0, 80, 2000); 
          animateCounter(designCounter, 0, 3000, 2000);

          observer.disconnect(); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  observer.observe(statsSection);
}

document.addEventListener("DOMContentLoaded", () => {
  observeCounters();
});



const itemsContainer = document.querySelector(".carousel-items");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0; 

function updateCarousel() {
  itemsContainer.style.transition = "transform 0.5s ease";
  itemsContainer.style.transform = `translateX(-${currentIndex * 45}%)`; 
}

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = itemsContainer.children.length ;
  } else {
    currentIndex--;
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === itemsContainer.children.length ) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
});


const carousel = document.querySelector('.carousel-items-2');
const prevButton = document.querySelector('.prev-btn-2');
const nextButton = document.querySelector('.next-btn-2');
const cards = document.querySelectorAll('.section4-card');
let maxIndex;
let currentIndex2 = 0;

function updateCarousel2() {
  const screenWidth = window.innerWidth;
  let multiplier;

  if (screenWidth >= 780 && screenWidth < 940) {
    multiplier = 101; 
    maxIndex = cards.length - 4; 
  } else if (screenWidth >= 940 && screenWidth < 1280) {
    multiplier = 101; 
    maxIndex = cards.length - 4; 
  }
   else if (screenWidth >= 600 && screenWidth < 780) {
    multiplier = 101; 
    maxIndex = cards.length -1; 
  }
   else if (screenWidth >= 300 && screenWidth < 600) {
    multiplier = 101; 
    maxIndex = cards.length -1; 
  }
   else {
    multiplier = 101; 
    maxIndex = cards.length-5; 
  }

  carousel.style.transition = "transform 0.5s ease"; 
  carousel.style.transform = `translateX(-${(currentIndex2 * multiplier)}%)`;
}

prevButton.addEventListener("click", () => {
  updateCarousel2();
  if (currentIndex2 === 0) {
    currentIndex2 = maxIndex;
  } else {
    currentIndex2--;
  }
  updateCarousel2();
});

nextButton.addEventListener("click", () => {
  updateCarousel2();
  if (currentIndex2 === maxIndex) {
    currentIndex2 = 0;
  } else {
    currentIndex2++;
  }
  updateCarousel2();
});

window.addEventListener("resize", updateCarousel2); 



const opinions = document.querySelector('.opinions');
const opinionItems = opinions.innerHTML; 
opinions.innerHTML += opinionItems; 


let toggleMenu=document.querySelector(".burger-menu")
toggleMenu.addEventListener("click",()=>{
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
  } else {
      mobileMenu.style.display = "block";
  }
})



function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const revealTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
          element.classList.add("visible");
      }
  });
}

window.addEventListener("scroll", revealOnScroll);
