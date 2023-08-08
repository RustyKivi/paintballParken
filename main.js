document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var loadingScreen = document.querySelector(".loading-screen");
  
      loadingScreen.style.opacity = 0;
      setTimeout(function() {
        loadingScreen.style.display = "none";
      }, 2000);
    }, 2000);
});

function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('header').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - navbarHeight;

    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, 1000);
        window.scrollTo(0, run);
        if (timeElapsed < 1000) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('header a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        scrollToSection(targetId);
    });
});
  