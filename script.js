function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_usiutdt","template_xhzid0e",parms).then(alert("Email Sent!"))
}


document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-effect');
    const roles = ["Web Developer", "Graphic Designer", "IT Support"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentRole = roles[roleIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            } else {
                setTimeout(typeWriter, 100);
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeWriter, 500);
            } else {
                setTimeout(typeWriter, 50);
            }
        }
    }

    typeWriter();
});

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(nextSlide, 3000);

    // Pause auto-slide when user interacts
    document.querySelector('.prev').addEventListener('click', function() {
        prevSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000); // Restart auto-slide
    });

    document.querySelector('.next').addEventListener('click', function() {
        nextSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000); // Restart auto-slide
    });
    

    // Initialize first slide
    showSlide(currentSlide);
});