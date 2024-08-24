var tl=gsap.timeline()

tl.from('#icons',{
    opacity:0,
    duration:0.2,
    // delay:0.1,
    y:50,
    stagger:0.2
})
tl.from(".avatar",{
    opacity:0,
    duration:0.7,
    y:-50,
})
tl.from('.myself',{
    opacity:0,
    duration:0.5,
    y:50,
    
})
tl.from('.myself .from',{
    opacity:0,
    duration:0.5,
    x:50,
    
})
tl.from('.about-btn',{
    opacity:0,
    duration:0.5,
    scale:5
})