document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const heroTitle = document.getElementById('hero-title');
    const heroText = document.getElementById('hero-text');
    
    const slides = [
        {
            image: 'image/2.jpg',
            title: 'Online Dessert Class',
            text: 'Become a better baker with our expert tips and tricks'
        },
        {
            image: 'image/4.jpg',
            title: 'Master the Art of Baking',
            text: 'Join our classes and bake like a professional pro'
        },
        {
            image: 'image/5.jpg',
            title: 'From a Novice to Pro',
            text: 'Discover recipes that will impress everyone'
        }
    ];
    
    let currentIndex = 0;

    function changeSlide() {
        hero.style.backgroundImage = `linear-gradient(to bottom, #131212b8, #100f0fb2), url('${slides[currentIndex].image}')`;

        // Fade out current text
        heroTitle.style.opacity = 0;
        heroText.style.opacity = 0;

        setTimeout(() => {
            // Change text after fade out
            heroTitle.textContent = slides[currentIndex].title;
            heroText.textContent = slides[currentIndex].text;

            // Fade in new text
            heroTitle.style.opacity = 1;
            heroText.style.opacity = 1;
        }, 500);

        currentIndex = (currentIndex + 1) % slides.length;
    }

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);

    // Set initial slide
    changeSlide();
});


 // Section slide right


 