
function toggleMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
  }
  



document.querySelector(".contact-form form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("overlay").style.display = "block";
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    const hideMessage = () => {
        successMessage.style.display = "none";
        document.getElementById("overlay").style.display = "none";

        document.querySelector(".contact-form form").reset();
    };

    const timeout = setTimeout(hideMessage, 5000);

    document.getElementById("overlay").addEventListener("click", function() {
        hideMessage();
        clearTimeout(timeout); 
    });
});

