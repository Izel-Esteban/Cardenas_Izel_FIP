(function(){
    "use strict";   
    console.log("fired");

    let button = document.querySelector("#logo");
    let burgerCon = document.querySelector("#burger-con");
    let mainNav = document.querySelector("#main-nav");

    function hamburgerMenu() {
        burgerCon.classList.toggle("slide-toggle");
        burgerCon.classList.toggle("expanded");
        mainNav.classList.toggle("expanded");
        console.log("Hamburger menu clicked");
        console.log(burgerCon.classList);
        console.log(mainNav.classList);
    };

    button.addEventListener("click", hamburgerMenu, false);      
})();

document.addEventListener("DOMContentLoaded", function() {
    var slogan = document.querySelector(".Slogan");

    function mostrarSlogan() {
        slogan.style.display = "block";
        slogan.style.animation = "aparecer 1s forwards"; 
    }

    setTimeout(mostrarSlogan, 0); 
});

(() => {
    const slider = document.querySelector('#image-slider');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    let slideWidth = slider.clientWidth;
    let currentIndex = 0;

    function prevSlide() {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slider.children.length - 1;
        }

        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex++;

        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    }

    function updateSlideWidth() {
        slideWidth = slider.clientWidth;
        showSlide(currentIndex);
    }

    function showSlide(index) {
        console.log(index);
        const newTransformValue = -index * slideWidth + 'px';

        slider.style.transform = `translateX(${newTransformValue})`;
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    window.addEventListener('resize', updateSlideWidth);
})();

document.addEventListener('DOMContentLoaded', function() {
    const manoConLata = document.getElementById('mano-con-lata');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
  
    manoConLata.addEventListener('click', function() {
      lightbox.style.display = 'block';
      lightboxImg.src = this.src;
    });
  
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('#image-slider');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    let slideWidth = slider.clientWidth;
    let currentIndex = 0;
    let intervalId;

    function prevSlide() {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slider.children.length - 1;
        }

        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex++;

        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    }

    function updateSlideWidth() {
        slideWidth = slider.clientWidth;
        showSlide(currentIndex);
    }

    function showSlide(index) {
        const newTransformValue = -index * slideWidth + 'px';

        slider.style.transform = `translateX(${newTransformValue})`;
    }

    function startAutoSlider() {
        intervalId = setInterval(nextSlide, 3000);
    }

    function stopAutoSlider() {
        clearInterval(intervalId);
    }

    prevBtn.addEventListener('click', function() {
        stopAutoSlider();
        prevSlide();
    });

    nextBtn.addEventListener('click', function() {
        stopAutoSlider();
        nextSlide();
    });

    window.addEventListener('resize', updateSlideWidth);

    startAutoSlider();
});

document.addEventListener('DOMContentLoaded', function() {
    const purpleMessageImg = document.querySelector('.slider-image[src="images/purple-message-01.png"]');
    if (purpleMessageImg) {
        purpleMessageImg.addEventListener('click', function() {
            window.location.href = 'products.html';
        });
    }
});
