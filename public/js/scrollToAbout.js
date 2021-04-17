gsap.to(".hello-container", {
    scrollTrigger: {
        trigger: ".hello-container",
        toggleActions: "play none resume reset",
        start: "center 30%", //Start marker on the hello-container is at the center. Start marker on the VP is 30% from the top. 
        scrub: true,
    },
    x: -1100,
    rotation: 360,
    duration: 1
})