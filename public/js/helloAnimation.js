console.log("running helloAnimation script");

const helloPageTL = gsap.timeline();
helloPageTL.from('.half-slide', {
    duration: .8,
    xPercent: -100
})
.from(".hello", {
    duration: .6,
    opacity: 0,
    x: -100,
    rotation: 360,
    ease: 'back'
})

//Activate Scroll Trigger
gsap.registerPlugin(ScrollTrigger);



