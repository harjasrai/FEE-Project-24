// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// slider code
let slider = document.querySelector('.slider');
let scrollAmount = 0;

function slideLeft() {
    scrollAmount -= 200; // Adjust scroll amount as needed
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}

function slideRight() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    scrollAmount +=200; // Adjust scroll amount as needed
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
}


// Form Submission Alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}, for reaching out to us. We will respond shortly.`);
    this.reset();
});


