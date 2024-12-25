const opinions = document.querySelector('.opinions');
const opinionItems = opinions.innerHTML; 
opinions.innerHTML += opinionItems; 

function toggleMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
  }

//   function showDetails(year) {
//     const detailsText = document.getElementById("details-text");
//     const details = document.getElementById("details");
  
//     switch (year) {
//         case '2005':
//             detailsText.innerHTML = "2005 – Şirkətin təsis olunması. Şirkətimiz 2005-ci ildə qurulmuşdur və fəaliyyətə başlamışdır.";
//             break;
//         case '2010':
//             detailsText.innerHTML = "2010 – Birinci genişlənmə. 2010-cu ildə, şirkətimiz yeni ofis açmış və ilk beynəlxalq müştərisini qəbul etmişdir.";
//             break;
//         case '2015':
//             detailsText.innerHTML = "2015 – Texnoloji inqilab. Şirkət yeni texnoloji yenilikləri və sistemləri tətbiq etməyə başlamışdır.";
//             break;
//         case '2020':
//             detailsText.innerHTML = "2020 – Pandemiyaya qarşı addımlar. Şirkətimiz pandemiya dövründə öz xidmətlərini onlayn formata keçirmiş və müştərilərə innovativ həllər təklif etmişdir.";
//             break;
//         default:
//             detailsText.innerHTML = "N/A";
//     }
  
//     details.classList.remove("hidden");
//     setTimeout(() => {
//         details.style.opacity = 1;
//     }, 50); 
//   }
  
//   function showDetails(index) {
//     const details = document.querySelectorAll('.timeline-details');
//     details.forEach(detail => detail.classList.add('hidden'));
//     document.getElementById(`detail${index}`).classList.remove('hidden');
// }

// function showDetails(index) {
//     const details = document.querySelectorAll('.timeline-details');
//     details.forEach(detail => detail.classList.add('hidden'));
//     document.getElementById(`detail${index}`).classList.remove('hidden');
// }
function showDetails(index) {
    // Bütün detalları gizləyirik
    const details = document.querySelectorAll('.timeline-details');
    details.forEach(detail => detail.classList.add('hidden'));
  
    // Seçilen detallı göstərin
    const selectedDetail = document.getElementById(`detail${index}`);
    selectedDetail.classList.remove('hidden');
    selectedDetail.classList.add('show');
  }
  