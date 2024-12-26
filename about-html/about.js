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


document.addEventListener('DOMContentLoaded', function() {
  function showDetails(index) {
      const details = document.querySelectorAll('.timeline-details');
      
      details.forEach(detail => {
          detail.classList.add('hidden');
          detail.classList.remove('show');
      });

      const selectedDetail = document.getElementById(`detail${index}`);
      selectedDetail.classList.remove('hidden');
      selectedDetail.classList.add('show');
  }

  const timelinePoints = document.querySelectorAll('.timeline-point');
  timelinePoints.forEach((point, index) => {
      point.addEventListener('click', function() {
          showDetails(index);
      });
  });
});
