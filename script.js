document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const heroTitle = document.getElementById('hero-title');
    const heroText = document.getElementById('hero-text');
    
    const slides = [
        {
            image: 'image/2.jpg',
            title: 'COMPLETE DESSERT/ DESSERT ',
            typingTitle: 'CATERING GUIDE',
            text: 'Everything you need know about how to make Premium Desserts and The Complete Business of Dessert Catering'
        },
        {
            image: 'image/11.jpg',
            title: 'COMPLETE DESSERT/ DESSERT ',
            typingTitle: 'CATERING GUIDE',
            text: 'Everything you need know about how to make Premium Desserts and The Complete Business of Dessert Catering'
        },
        {
            image: 'image/5.jpg',
            title: 'COMPLETE DESSERT/ DESSERT ',
            typingTitle: 'CATERING GUIDE',
            text: 'Everything you need know about how to make Premium Desserts and The Complete Business of Dessert Catering'
        }
    ];
    
    let currentIndex = 0;

    function changeSlide() {
        hero.style.backgroundImage = `linear-gradient(to bottom, #131212b8, #100f0fb2), url('${slides[currentIndex].image}')`;

        currentIndex = (currentIndex + 1) % slides.length;
    }

    function setText() {
        heroText.textContent = slides[0].text;

        const staticTitle = slides[0].title;
        const typingTitle = slides[0].typingTitle;
        
        heroTitle.innerHTML = staticTitle;
        
        let typingIndex = 0;

        function type() {
            if (typingIndex < typingTitle.length) {
                heroTitle.innerHTML += typingTitle.charAt(typingIndex);
                typingIndex++;
                setTimeout(type, 100);
            }
        }

        type();
    }

    // Set text and title once initially
    setText();

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);

    // Set initial slide
    changeSlide();
});

 // Time countdown


 var countDownDate = new Date("June 21, 2024 00:00:00").getTime();
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
    

