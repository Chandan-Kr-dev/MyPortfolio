var tl=gsap.timeline()

tl.from(".about-section",{
    opacity:0,
    x:300,
    duration:1,
    scrollTrigger:{
        trigger:".about-section",
        scroller:"body",
        start:"top 50%",
        markers:true,
        scrub:1
    }
})