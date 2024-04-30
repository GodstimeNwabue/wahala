document.getElementById('rotateButton').addEventListener('click', function () {
    var bases = [
        { element: document.querySelector('.base'), duration: 500 },
        { element: document.querySelector('.base1'), duration: 1000 },
        { element: document.querySelector('.base2'), duration: 2000 }
    ];

    function getRandomImage() {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        return `url('assets/images/${randomNumber}.jpg')`;
    }

    var newImage = getRandomImage();

    bases.forEach(function (base) {
        // Update the image
        setTimeout(function () {
            base.element.style.backgroundImage = newImage;
        }, base.duration * (270 / 360));

        // GSAP animation for ripple effect
        gsap.to(base.element, {
            duration: base.duration / 100,
            ease: "power1.inOut",
            scale: 1.1,
            repeat: 1,
            yoyo: true,
            rotate: 360,
            transformOrigin: "center center"
        });
    });
});

