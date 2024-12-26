
let toggleMenu=document.querySelector(".burger-menu")
toggleMenu.addEventListener("click",()=>{
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
  } else {
      mobileMenu.style.display = "block";
  }
})


let submitReview=document.querySelector(".submit-btn")
submitReview.addEventListener("click",()=>{
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
)


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


document.getElementById("showPlan").addEventListener("click", function() {
    const siteType = document.getElementById("siteType").value;
    let plan = '';
  
    if (siteType === "simple") {
      plan = `
        <div class="plan-step">1. Təsdiqləmə mərhələsi (İdeyanın təyin edilməsi)</div>
        <div class="plan-step">2. Dizayn mərhələsi</div>
        <div class="plan-step">3. İnkişaf mərhələsi</div>
        <div class="plan-step">4. Testlər və Təhlükəsizlik</div>
        <div class="plan-step">5. Əlavə Xüsusiyyətlər</div>`;
    } else if (siteType === "complex") {
      plan = `
        <div class="plan-step">1. İstifadəçi Tələbləri Analizi</div>
        <div class="plan-step">2. Prototip Dizaynı</div>
        <div class="plan-step">3. Texnologiya Seçimi</div>
        <div class="plan-step">4. Təhlükəsizlik Testləri</div>
        <div class="plan-step">5. DevOps Enteqrasiyası</div>`;
    } else if (siteType === "ecommerce") {
      plan = `
        <div class="plan-step">1. Məhsul Kataloqu Planı</div>
        <div class="plan-step">2. Online Ödəmə Sistemi inteqrasiyası</div>
        <div class="plan-step">3. Müştəri Paneli Dizaynı</div>
        <div class="plan-step">4. SEO və Marketinq</div>
        <div class="plan-step">5. Təhlükəsizlik Testləri</div>`;
    } else if (siteType === "education") {
      plan = `
        <div class="plan-step">1. Təlim Strukturunun Planlanması</div>
        <div class="plan-step">2. Online Dərsliklər və Kurslar</div>
        <div class="plan-step">3. Sertifikat Sistemi və İstifadəçi Qeydləri</div>
        <div class="plan-step">4. Təhlükəsizlik Testləri</div>
        <div class="plan-step">5. SEO Optimallaşdırması</div>`;
    } else if (siteType === "blog") {
      plan = `
        <div class="plan-step">1. Məzmun Yaradılması</div>
        <div class="plan-step">2. UI və UX Dizaynı</div>
        <div class="plan-step">3. SEO Optimallaşdırması</div>
        <div class="plan-step">4. Şəbəkə Şəbəkəsi və Paylaşma</div>
        <div class="plan-step">5. Təhlükəsizlik və Performans Testləri</div>`;
    } else if (siteType === "health") {  
      plan = `
        <div class="plan-step">1. Sağlamlıq Məzmunu Təqdimatı və Planlaşdırılması</div>
        <div class="plan-step">2. Həkimlər və Xidmətlər Haqqında Məlumatlar</div>
        <div class="plan-step">3. Təhlükəsiz Məlumat Toplanması və İnteqrasiya</div>
        <div class="plan-step">4. Xəstə Reytinqi və Rəy Sistemi</div>
        <div class="plan-step">5. SEO və Sağlamlıq Məzmunu Marketinqi</div>`;
    } else if (siteType === "tourism") {  
      plan = `
        <div class="plan-step">1. Məkan və Təkliflər Haqqında Məlumatlar</div>
        <div class="plan-step">2. Online Rezervasiya Sistemi İnterqrasiyası</div>
        <div class="plan-step">3. Foto və Video Qalereya İnkişafı</div>
        <div class="plan-step">4. SEO və Turizm Marketinqi</div>
        <div class="plan-step">5. Müştəri Əlaqə və Dəstək Sistemi</div>`;
    } else if (siteType === "portfolio") {
      plan = `
        <div class="plan-step">1. Şəxsi Layihələr və İşlər</div>
        <div class="plan-step">2. Vizual Dizayn və Məzmuna Fokuslanma</div>
        <div class="plan-step">3. Əlaqə və İş Təklifləri</div>
        <div class="plan-step">4. SEO və Tərtibat</div>
        <div class="plan-step">5. İstifadəçi Təcrübəsi (UX) Testləri</div>`;
    } else if (siteType === "restaurant") {  
      plan = `
        <div class="plan-step">1. Məkan və Menyu Təqdimatı</div>
        <div class="plan-step">2. Online Rezervasiya və Sifariş Sistemi</div>
        <div class="plan-step">3. Müştəri İcmalı Sistemi</div>
        <div class="plan-step">4. SEO və Marketinq</div>
        <div class="plan-step">5. Təhlükəsizlik və Performans Testləri</div>`;
    }
  
    document.getElementById("planResult").innerHTML = plan;
    document.getElementById("planResult").style.display = "block";
  });
