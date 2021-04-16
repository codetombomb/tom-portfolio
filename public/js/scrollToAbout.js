
gsap.to(".half-slide",{
    scrollTrigger: {
        trigger: ".half-slide",
        start: "bottom 95%",
        end: "bottom center",
        scrub: 1,
        snap: 1 / 10,
        markers: true
},
    xPercent: -100,

})