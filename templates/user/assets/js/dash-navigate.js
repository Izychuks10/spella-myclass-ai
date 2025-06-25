    // ================================================ item navigate section

    document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll("[id^='type-']");
    const texts = document.querySelectorAll("[id^='text-']");

    // Hide all text divs initially
    texts.forEach(text => text.style.display = "none");

    // Set the first logo as active by default
    logos[0].style.color = "";
    texts[0].style.display = "block";

    logos.forEach((logo, index) => {
        logo.addEventListener("click", function () {
            // Hide all text divs
            texts.forEach(text => text.style.display = "none");

            // Remove active class from all logos
            logos.forEach(l => l.style.color = "");

            // Show the clicked text div
            document.getElementById(`text-${index + 1}`).style.display = "block";

            // Set active background color
            logos.style.color = "";
        });
    });
});




// ================================================================= mobile bar section 
const sidebar = document.getElementById('sidebars');
const bars = document.getElementById('bars');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    bars.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnBars = bars.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnBars && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        bars.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
});
