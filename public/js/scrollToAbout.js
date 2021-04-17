gsap.to(".hello-container", {
    scrollTrigger: {
        trigger: ".hello-container",
        toggleActions: "play none resume reset",
        start: "center 30%", //Start marker on the hello-container is at the center. Start marker on the VP is 30% from the top. 
        scrub: 1.5,
    },
    x: -1100,
    rotation: 360,
    duration: 1
})

gsap.to(".scroll-indicator",{
    scrollTrigger: {
        trigger: ".scroll-indicator",
        toggleActions: "play none resume reset",
        start: "top 60%",
        end: "bottom 40%",
        scrub: .5,
    },
    yPercent: 300
})

gsap.from(".about-page", {
    xPercent: 100,
    scrollTrigger: {
        trigger: ".about-container",
        start: "top top",
        scrub: true,
        pin: true
    }
})