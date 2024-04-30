particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffff00"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            speed: 2
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 3,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
        }
    },
    retina_detect: true
});

document.getElementById('rotateButton').addEventListener('click', function () {
    var bases = [
        { element: document.querySelector('.base'), className: 'rotate', duration: 500 },
        { element: document.querySelector('.base1'), className: 'rotate1', duration: 1000 },
        { element: document.querySelector('.base2'), className: 'rotate2', duration: 2000 }
    ];

    function getRandomImage() {
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        return `url('assets/images/night/${randomNumber}.avif')`;
    }

    var newImage = getRandomImage();

    bases.forEach(function (base) {
        base.element.classList.add(base.className);

        setTimeout(function () {
            base.element.style.backgroundImage = newImage;
        }, base.duration * (200 / 360));

        base.element.addEventListener('animationend', function () {
            base.element.classList.remove(base.className);
        });
    });

    gsap.fromTo(".text-center div div p",
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.5, ease: "power2.inOut" }
    );
});