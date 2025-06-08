const villaImages = [
    'media/villahemat.jpg',
    'media/villakeluarga.jpg',
    'media/villamodern.jpg',
    'media/villasunset.jpg'
];

let currentSlide = 0;
let slideInterval;

function changeSlide(n) {
    clearInterval(slideInterval);
    
    currentSlide += n;
    
    if (currentSlide >= villaImages.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = villaImages.length - 1;
    }
    
    document.getElementById('slide-img').src = villaImages[currentSlide];
    
    startSlideShow();
}

function nextSlide() {
    changeSlide(1);
}

function prevSlide() {
    changeSlide(-1);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); 
}

function animateTagline() {
    const tagline = document.querySelector('.intro h2');
    tagline.style.opacity = '0';
    tagline.style.transform = 'translateY(20px)';
    tagline.style.transition = 'none';
    
    void tagline.offsetWidth;
    
    tagline.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    tagline.style.opacity = '1';
    tagline.style.transform = 'translateY(0)';
}

function animateButton() {
    const button = document.querySelector('.btn');
    button.style.transform = 'scale(0.9)';
    button.style.transition = 'transform 0.3s ease';
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    startSlideShow();
    animateTagline();
    animateButton();
    villaImages.forEach(img => {
        const image = new Image();
        image.src = img;
    });
});