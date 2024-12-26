



document.addEventListener('DOMContentLoaded', () => {
    function choosePackage(packageName) {
        const selectedPackageElement = document.getElementById('selected-package');
        selectedPackageElement.textContent = `Seçdiyiniz Paket: ${packageName}`;

        const pricingOptions = document.querySelectorAll('.pricing-option');
        pricingOptions.forEach(option => {
            option.style.border = 'none';
            option.style.boxShadow = 'none';
        });

        const selectedOption = document.getElementById(packageName.toLowerCase());
        selectedOption.style.border = '2px solid #0066ff';
        selectedOption.style.boxShadow = '0 0 10px rgba(0, 102, 255, 0.5)';
    }

    document.querySelector('.btn-select1').addEventListener('click', () => choosePackage('Basic'));
    document.querySelector('.btn-select2').addEventListener('click', () => choosePackage('Standard'));
    document.querySelector('.btn-select3').addEventListener('click', () => choosePackage('Premium'));
});

let toggleMenu = document.querySelector(".burger-menu");
toggleMenu.addEventListener("click", () => {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const allAnswers = document.querySelectorAll('.faq-answer');

        allAnswers.forEach(ans => {
            if (ans !== answer) {
                ans.style.display = 'none';
            }
        });

        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});

const price = {
    ".com": 50,
    ".net": 45,
    ".org": 40,
    ".az": 40,
    ".biz": 35,
    ".info": 30,
    ".us": 25,
    ".mobi": 20,
    ".com.az": 50,
    ".ru": 45,
    ".site.az": 35
};

const packagePrices = {
    ".com": { 1: 50, 3: 140, 5: 200, 10: 350 },
    ".net": { 1: 45, 3: 130, 5: 190, 10: 330 },
    ".org": { 1: 40, 3: 110, 5: 180, 10: 300 },
    ".az": { 1: 40, 3: 110, 5: 160, 10: 290 },
    ".biz": { 1: 35, 3: 100, 5: 150, 10: 280 },
    ".info": { 1: 30, 3: 90, 5: 140, 10: 270 },
    ".us": { 1: 25, 3: 80, 5: 120, 10: 250 },
    ".mobi": { 1: 20, 3: 60, 5: 100, 10: 200 },
    ".com.az": { 1: 50, 3: 150, 5: 220, 10: 380 },
    ".ru": { 1: 45, 3: 130, 5: 200, 10: 350 },
    ".site.az": { 1: 35, 3: 100, 5: 150, 10: 280 }
};

function validateDomain() {
    const domainInput = document.getElementById('domainInput');
    const domainName = domainInput.value.trim();
    const resultElement = document.getElementById('result');

    const validDomainRegex = /^[a-zA-Z0-9-]{3,}$/;

    if (!domainName) {
        resultElement.innerHTML = ` 
            <div class="notification error">
                <h2>Zəhmət olmasa, domen adı daxil edin!</h2>
                <p>Domen adını yazmadan axtarış edə bilməzsiniz.</p>
            </div>`;
        return false;
    }

    if (!validDomainRegex.test(domainName)) {
        resultElement.innerHTML = `
            <div class="notification error">
                <h2>Domen adı yalnış daxil edilib!</h2>
                <p>Domen adında yalnız ingilis əlifbası hərfləri, rəqəmlər və "-" istifadə olunmalıdır.</p>
                <p>Həmçinin domen adı ən az 3 simvoldan ibarət olmalıdır.</p>
            </div>`;
        return false;
    }

    if (domainName.startsWith('-') || domainName.endsWith('-')) {
        resultElement.innerHTML = `
            <div class="notification error">
                <h2>Domen adı səhv formatdadır!</h2>
                <p>Domen adı "-" ilə başlayıb və ya bitə bilməz.</p>
            </div>`;
        return false;
    }

    resultElement.innerHTML = '';
    return true;
}

document.getElementById('domainInput').addEventListener('input', validateDomain);

document.querySelector('.search-btn').addEventListener('click', async () => {
    if (!validateDomain()) return;

    const domainName = document.getElementById('domainInput').value.trim();
    const extension = document.getElementById('extensionSelect').value;
    const fullDomain = domainName + extension;
    const resultElement = document.getElementById('result');
    
    const apiUrl = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_2FSxUYSKbnCBw7OkSpI4juwPgqvF5&domainName=${fullDomain}&credits=DA`;
    // const apiUrl = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_skWV5ofalUZ1H3YU1hBAC1NhEHUmx&domainName=${fullDomain}&credits=DA`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        resultElement.innerHTML = '';
        document.getElementById('packageSelection').style.display = 'none';
        document.getElementById('selected-info').style.display = 'none';

        if (data.DomainInfo.domainAvailability === 'AVAILABLE') {
            resultElement.innerHTML = `
                <div class="notification success">
                    <h2>${fullDomain} mövcuddur!</h2>
                    <p>Qiymət: ₼ ${price[extension]}</p>
                    <button class="btn btn-success" onclick="showPackages('${fullDomain}', '${extension}')">Paket Seç</button>
                </div>`;
        } else {
            resultElement.innerHTML = `
                <div class="notification error">
                    <h2>Üzr istəyirik, ${fullDomain} məşğuldur!</h2>
                    <p>Başqa bir domen adı daxil edin.</p>
                </div>`;
        }
    } catch (error) {
        resultElement.innerHTML = `
            <div class="notification error">
                <h2>Xəta baş verdi!</h2>
                <p>Zəhmət olmasa, yenidən cəhd edin.</p>
            </div>`;
    }
});

function showPackages(domain, extension) {
    const packageSelection = document.getElementById('packageSelection');
    packageSelection.style.display = 'block';

    const prices = packagePrices[extension];
    let htmlContent = `<h3>${domain} üçün Paket Seçin:</h3><div class="packages-container">`;

    for (let years in prices) {
        const price = prices[years];
        const expiryDate = getExpiryDate(years);
        htmlContent += `
            <div class="package">
                <h4>${years} İllik</h4>
                <p>₼${price}</p>
                <p>Bitmə Tarixi: ${expiryDate}</p>
                <button class="btn btn-package" onclick="selectPackage('${domain}', ${price}, '${years}', '${expiryDate}')">Seç</button>
            </div>`;
    }

    htmlContent += `</div>`;
    packageSelection.innerHTML = htmlContent;
}

function selectPackage(domain, price, years, expiryDate) {
    const selectedInfo = document.getElementById('selected-info');
    selectedInfo.style.display = 'block';
    document.getElementById('selected-domain').innerText = `Domen: ${domain}`;
    document.getElementById('total-price').innerText = `Qiymət: ₼${price}`;
    document.getElementById('expiry-date').innerText = `Bitmə Tarixi: ${expiryDate}`;
}

function getExpiryDate(years) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + parseInt(years));
    return currentDate.toLocaleDateString();
}
