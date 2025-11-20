// Scroll animation for features and heroes
const animateElements = document.querySelectorAll('.animate');

function showOnScroll() {
    animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Hero Learn More scroll
document.getElementById("learnMore").addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});

// Alerts Test Button
document.getElementById("alertBtn").addEventListener("click", function () {
    const selected = document.getElementById("emergencyType").value;
    document.getElementById("alertMessage").textContent = `Test Alert: ${selected.charAt(0).toUpperCase() + selected.slice(1)} alert sent!`;
    document.getElementById("alertMessage").style.color = "green";
});

// Safety Report Form
document.getElementById("reportForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const emergency = document.getElementById("emergency").value;

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}. Your ${emergency} report from ${location} has been successfully submitted.`;
    document.getElementById("formMessage").style.color = "green";

    document.getElementById("reportForm").reset();
});

// Signup Form (demo only)
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    document.getElementById("signupMessage").textContent =
        `Account created successfully for ${name}!`;
    document.getElementById("signupMessage").style.color = "green";
    document.getElementById("signupForm").reset();
});

// Login Form (demo only)
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    document.getElementById("loginMessage").textContent =
        `Logged in successfully as ${email}!`;
    document.getElementById("loginMessage").style.color = "green";
    document.getElementById("loginForm").reset();
});
