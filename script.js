// --- Hamburger menü és Dark Mode ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Hamburger menü nyitás/csukás
hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menü becsukása, ha rákattintunk egy linkre (mobilon fontos)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Dark Mode váltó
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


// --- Készségek (Skills) Csúszka Animáció ---

// Megkeressük az összes progress bar-t
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.getElementById('skills');

// Ez a függvény tölti fel a csúszkákat a data-percent attribútum alapján
const activateProgressBars = () => {
    progressBars.forEach(bar => {
        // Kiolvassa a HTML-ből a százalékot (pl. "90")
        const percent = bar.getAttribute('data-percent');
        // Beállítja a CSS width tulajdonságot, ami beindítja a CSS transition animációt
        bar.style.width = percent + '%';
    });
};

// IntersectionObserver beállítása (figyeli, mikor érünk a szekcióhoz)
const observerOptions = {
    root: null, // A böngésző nézete
    threshold: 0.3 // A szekció 30%-ának látszódnia kell az indításhoz
};

const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ha a szekció a képernyőre került
            activateProgressBars();
            // Miután egyszer lefutott, abbafejezzük a figyelést (ne animáljon újra)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elkezdjük figyelni a skills szekciót
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}


// --- Kapcsolat Űrlap Kezelés ---
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az oldal újratöltését
    
    // Elrejtjük az űrlapot és mutatjuk a visszajelzést
    contactForm.style.display = 'none';
    formFeedback.classList.remove('hidden');
});