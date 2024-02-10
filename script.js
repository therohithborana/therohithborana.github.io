const circleElement = document.querySelector('.circle');
const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
let currentScale = 0;

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    // Squeeze
    const deltaMouseX = mouse.x - previousMouse.x;
    const deltaMouseY = mouse.y - previousMouse.y;
    previousMouse.x = mouse.x;
    previousMouse.y = mouse.y;

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2), 150);
    const scaleValue = (mouseVelocity / 150) * 1.5; // Adjust the factor as needed

    currentScale += (scaleValue - currentScale) * speed;
    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
    
    //Rotate
    const angle=Math.atan2(deltaMouseY,deltaMouseX)*180/Math.PI;
    const rotateTransform=`rotate(${angle}deg)`;

    circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px) ${scaleTransform} ${rotateTransform}`;

    window.requestAnimationFrame(tick);
}

tick();

document.addEventListener('DOMContentLoaded', () => {
    const joinUsBtn = document.getElementById('joinusbtn');

    joinUsBtn.addEventListener('click', () => {
        // Replace 'https://example.com' with your desired URL
        window.open('https://forms.gle/usUW4r6y7WbPixVN9', '_blank');
    });

     // Second Join Us button
     const joinUsBtn2 = document.getElementById('joinusbtn2');
     joinUsBtn2.addEventListener('click', () => {
         window.open('https://forms.gle/usUW4r6y7WbPixVN9', '_blank');
     });

     const logoBtn = document.getElementById('logobtn');
     logoBtn.addEventListener('click', () => {
         window.open('https://forms.gle/usUW4r6y7WbPixVN9', '_blank');

     });

     

     
 });


 window.addEventListener('load', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section").forEach((section, i) => {
        section.bg = section.querySelector(".bg");

        

        // the first image (i === 0) should be handled differently because it should start at the very top.
        // use function-based values in order to keep things responsive
        gsap.fromTo(section.bg, {
            backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
        }, {
            backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: () => i ? "top bottom" : "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true // to make it responsive
            }
        });
        var lastScrollTop = 0;

window.onscroll = function () {
    var navbar = document.querySelector("header");
    var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.background = 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)';
    } else {
        // Scrolling up
        navbar.style.background = 'transparent';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

    });
});



