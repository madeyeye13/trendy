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


 // Time countdown


 var countDownDate = new Date("June 7, 2024 00:00:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate - now;


        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    },1000)








    // Testimonial

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index) {
                indicator.classList.add('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    });
    

