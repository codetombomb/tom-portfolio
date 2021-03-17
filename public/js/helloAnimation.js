console.log("running helloAnimation script");

const helloPageTL = gsap.timeline();
helloPageTL.from('.slide', {
    duration: 2,
    xPercent: -50
})


//Activate Scroll Trigger
gsap.registerPlugin(ScrollTrigger);


