



function toggleMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
  }


function submitReview() {
    const reviewerName = document.getElementById('reviewer-name').value.trim();
    const reviewInput = document.getElementById('review-input').value.trim();
    const successMessage = document.getElementById('success-message'); 

    if (reviewerName && reviewInput) {
        successMessage.style.display = 'block';
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        document.getElementById('reviewer-name').value = '';
        document.getElementById('review-input').value = '';
    } else {
        alert("Xahiş edirik, adınızı və rəyinizi daxil edin.");
    }
}


// const data = [
//     { label: 'HTML', percent: 70 },
//     { label: 'CSS', percent: 87 },
//     { label: 'JavaScript', percent: 75 },
//     { label: 'React', percent: 65 }
// ];

// function animateStats() {
//     const statItems = document.querySelectorAll('.stat-item');
    
//     statItems.forEach((item, index) => {
//         const fillBar = item.querySelector('.stat-fill');
//         const percentText = item.querySelector('.stat-percent');
//         let currentPercent = 0;
        
//         const interval = setInterval(() => {
//             if (currentPercent < data[index].percent) {
//                 currentPercent++;
//                 fillBar.style.width = `${currentPercent}%`;
//                 percentText.textContent = `${currentPercent}%`;
//             } else {
//                 clearInterval(interval); 
//             }
//         }, 10 + index * 5); 
//     });
// }

// window.onload = () => {
//     document.querySelectorAll('.stat-item').forEach((item, index) => {
//         setTimeout(() => item.style.opacity = 1, index * 300); 
//     });
//     animateStats();
// };

const data = [
    { label: 'HTML', percent: 70 },
    { label: 'CSS', percent: 87 },
    { label: 'JavaScript', percent: 75 },
    { label: 'React', percent: 65 }
];

function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach((item, index) => {
        const fillBar = item.querySelector('.stat-fill');
        const percentText = item.querySelector('.stat-percent');
        let currentPercent = 0;
        
        const interval = setInterval(() => {
            if (currentPercent < data[index].percent) {
                currentPercent++;
                fillBar.style.width = `${currentPercent}%`;
                percentText.textContent = `${currentPercent}%`;
            } else {
                clearInterval(interval); 
            }
        }, 10 + index * 5); 
    });
}

function observeStats() {
    const statsSection = document.querySelector("#language-stats");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.stat-item').forEach((item, index) => {
                    setTimeout(() => item.style.opacity = 1, index * 300); 
                });
                animateStats();
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 }); 
    
    observer.observe(statsSection);
}

window.onload = () => {
    observeStats();
};



  
