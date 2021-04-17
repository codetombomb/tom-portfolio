const helloPageTL = gsap.timeline();
helloPageTL.from('.half-slide', {
    duration: 1,
    xPercent: -70
})
.from(".hello", {
    duration: .6,
    opacity: 0,
    x: -50,
    rotation: 90,
    ease: 'back'
})
.from(".scroll-indicator",{
    delay: .5,
    duration: .8,
    opacity: 0,
})
.to(".scroll-indicator", {
    duration: 5,
    repeat: 10,
    y: 30,
    ease: 'elastic'
})







