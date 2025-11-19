// Hero "Learn More" button (just scroll to services)
document.getElementById("learnMore").addEventListener("click", function () {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

// Alerts: Test Alert Button
document.getElementById("alertBtn").addEventListener("click", function () {
    document.getElementById("alertMessage").textContent = "Test Alert: System is functioning!";
    document.getElementById("alertMessage").style.color = "green";
});

// Safety Report Form Submission
document.getElementById("reportForm").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const issue = document.getElementById("issue").value;

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}. Your report from ${location} has been submitted successfully.`;
    document.getElementById("formMessage").style.color = "green";

    document.getElementById("reportForm").reset();
});
