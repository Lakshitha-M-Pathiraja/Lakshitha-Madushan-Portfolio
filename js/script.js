// languages persentages
document.addEventListener("DOMContentLoaded", function () {
    const counterp = document.getElementById("counterp");
    let count = 0;
    const target = 80; // Target percentage
    const duration = 2000; // Duration of the animation in milliseconds

    function updateCounter() {
        if (count < target) {
            count++;
            counterp.textContent = count + "%";
            setTimeout(updateCounter, duration / target);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    });

    observer.observe(counterp);
});


document.addEventListener("DOMContentLoaded", function() {
    const counterh = document.getElementById("counterh");
    let count = 0;
    const target = 75; // Target percentage
    const duration = 2000; // Duration of the animation in milliseconds

    function updateCounter() {
        if (count < target) {
            count++;
            counterh.textContent = count + "%";
            setTimeout(updateCounter, duration / target);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    });

    observer.observe(counterh);
});


document.addEventListener("DOMContentLoaded", function() {
    const countercss = document.getElementById("countercss");
    let count = 0;
    const target = 65; // Target percentage
    const duration = 2000; // Duration of the animation in milliseconds

    function updateCounter() {
        if (count < target) {
            count++;
            countercss.textContent = count + "%";
            setTimeout(updateCounter, duration / target);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    });

    observer.observe(countercss);
});

document.addEventListener("DOMContentLoaded", function() {
    const counterjs = document.getElementById("counterjs");
    let count = 0;
    const target = 60; // Target percentage
    const duration = 2000; // Duration of the animation in milliseconds

    function updateCounter() {
        if (count < target) {
            count++;
            counterjs.textContent = count + "%";
            setTimeout(updateCounter, duration / target);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    });

    observer.observe(counterjs);
});

// css/html logos
document.getElementById('counterjs').innerText = '60%';
document.getElementById('counterhtml').innerText = '70%';
document.getElementById('countercss').innerText = '80%';