console.log("running helloAnimation script");

//Activate Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hello", {
    scrolltrigger: ".hello",
    x: 400,
    rotation: 360,
    duration: 3
})

