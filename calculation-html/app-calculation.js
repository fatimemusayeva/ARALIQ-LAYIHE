let toggleMenu=document.querySelector(".burger-menu")
toggleMenu.addEventListener("click",()=>{
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
  } else {
      mobileMenu.style.display = "block";
  }
})


document.addEventListener("DOMContentLoaded", function () {
    const pageCountSlider = document.getElementById("page-count");
    const pageCountDisplay = document.getElementById("page-count-display");
    const designComplexitySlider = document.getElementById("design-complexity");
    const complexityDisplay = document.getElementById("complexity-display");
    const addons = document.querySelectorAll(".addon");
    const logoSlider = document.getElementById("logo-design");
    const logoComplexityDisplay = document.getElementById("logo-complexity-display");
    const totalCostDisplay = document.getElementById("total-cost");

    const pageCostDisplay = document.getElementById("page-cost");
    const addonsCostDisplay = document.getElementById("addons-cost");
    const ecommerceCostDisplay = document.getElementById("ecommerce-cost");
    const logoCostDisplay = document.getElementById("logo-cost");

    const BASE_COST = 450;

    function updatePageCost() {
        const pageCount = parseInt(pageCountSlider.value);
        const complexityFactor = parseInt(designComplexitySlider.value);
        const pageCost = pageCount * (complexityFactor === 1 ? 400 : complexityFactor === 2 ? 600 : 800);
        pageCountDisplay.textContent = pageCount;
        complexityDisplay.textContent = complexityFactor === 1 ? "Sadə" : complexityFactor === 2 ? "Orta" : "Xüsusi";
        pageCostDisplay.textContent = pageCost;
        return pageCost;
    }

    function updateAddonsCost() {
        let addonsCost = 0;
        addons.forEach((addon) => {
            if (addon.checked) {
                addonsCost += parseInt(addon.value);
            }
        });
        addonsCostDisplay.textContent = addonsCost;
        return addonsCost;
    }

    function updateEcommerceCost() {
        let ecommerceCost = 0;
        const ecommerceAddons = document.querySelectorAll(".ecommerce-addon");
        ecommerceAddons.forEach((addon) => {
            if (addon.checked) {
                ecommerceCost += parseInt(addon.value);
            }
        });
        ecommerceCostDisplay.textContent = ecommerceCost;
        return ecommerceCost;
    }

    function updateLogoCost() {
        const logoComplexity = parseInt(logoSlider.value);
        const logoCost = logoComplexity === 0 ? 0 : logoComplexity === 1 ? 300 : 600;
        logoComplexityDisplay.textContent = logoComplexity === 0 ? "Ehtiyac yoxdur" : logoComplexity === 1 ? "Sadə" : "Xüsusi";
        logoCostDisplay.textContent = logoCost;
        return logoCost;
    }

    function calculateTotalCost() {
        const pageCost = updatePageCost();
        const addonsCost = updateAddonsCost();
        const ecommerceCost = updateEcommerceCost();
        const logoCost = updateLogoCost();
        const totalCost = Math.max(BASE_COST, pageCost + addonsCost + ecommerceCost + logoCost);
        totalCostDisplay.textContent = `${totalCost} ₼`;
    }

    pageCountSlider.addEventListener("input", calculateTotalCost);
    designComplexitySlider.addEventListener("input", calculateTotalCost);
    addons.forEach((addon) => addon.addEventListener("change", calculateTotalCost));
    logoSlider.addEventListener("input", calculateTotalCost);
    const ecommerceAddons = document.querySelectorAll(".ecommerce-addon");
    ecommerceAddons.forEach((addon) => addon.addEventListener("change", calculateTotalCost));

    calculateTotalCost();
});

let showForm=document.querySelector(".order-button")
showForm.addEventListener("click",()=>{
    document.getElementById('registration-form').style.display = 'flex';  
})
let closeForm=document.querySelector(".close-button")
closeForm.addEventListener("click",()=>{
    document.getElementById('registration-form').style.display = 'none';  
})