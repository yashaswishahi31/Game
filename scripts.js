document.addEventListener('DOMContentLoaded', function() {
    const menuSections = document.querySelectorAll('.menu-section');
    const dropdown = document.querySelector('.dropdown');
    const backgroundSlideshow = document.querySelector('.background-slideshow');

    // Background image slideshow
    const images = [
        './game1.jpg',
        './game2.jpg',
        './game3.jpg',
        './game4.jpg'
        
    ];
    let currentImageIndex = 0;

    function changeBackground() {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = new Image();
        nextImage.src = images[nextImageIndex];
        
        nextImage.onload = function() {
            backgroundSlideshow.style.opacity = '0';
            setTimeout(() => {
                backgroundSlideshow.style.backgroundImage = `url(${images[nextImageIndex]})`;
                backgroundSlideshow.style.opacity = '1';
                currentImageIndex = nextImageIndex;
            }, 1000);
        };
    }

    // Initial background setup
    backgroundSlideshow.style.backgroundImage = `url(${images[0]})`;

    // Change background every 3 seconds
    setInterval(changeBackground, 3000);

    // Menu interactions
    menuSections.forEach(section => {
        const heading = section.querySelector('h3');
        const list = section.querySelector('ul');

        heading.addEventListener('mouseenter', () => {
            list.style.display = 'block';
            setTimeout(() => {
                list.style.opacity = '1';
            }, 10);
        });

        section.addEventListener('mouseleave', () => {
            list.style.opacity = '0';
            setTimeout(() => {
                list.style.display = 'none';
            }, 300);
        });

        list.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', function() {
                console.log('Clicked:', this.textContent.trim());
            });
        });
    });

    dropdown.addEventListener('click', function() {
        this.classList.toggle('open');
        // Add dropdown functionality here
    });
});