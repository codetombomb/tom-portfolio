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
.from(".scroll-indicator",{
    delay: 1,
    duration: .8,
    opacity: 0,
})



//Activate Scroll Trigger
gsap.registerPlugin(ScrollTrigger);



