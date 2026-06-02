const titles = [
    "CS Student",
    "Front-End Developer",
    "Software Tester" 
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById('typing-text');

function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typeSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);



const elements = document.querySelectorAll(
    ".project-card, .card, .timeline-item, .about, .feature, .contact-container, main"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

elements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
});