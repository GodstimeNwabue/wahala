document.getElementById('rotateButton').addEventListener('click', function () {
    var bases = [
        { element: document.querySelector('.base'), className: 'rotate', duration: 500 },
        { element: document.querySelector('.base1'), className: 'rotate1', duration: 1000 },
        { element: document.querySelector('.base2'), className: 'rotate2', duration: 2000 }
    ];

    function getRandomImage() {
        var randomNumber = Math.floor(Math.random() * 20) + 1; // Generates a number between 1 and 10
        return `url('assets/images/${randomNumber}.jpg')`;
    }

    var newImage = getRandomImage(); // Get a random image for all bases

    bases.forEach(function (base) {
        base.element.classList.add(base.className);

        setTimeout(function () {
            base.element.style.backgroundImage = newImage;
        }, base.duration * (200 / 360));

        base.element.addEventListener('animationend', function () {
            base.element.classList.remove(base.className);
        });
    });
});