const tl = gsap.timeline()

tl.from(".logo",{
    opacity:0,
    y: -200,
    duration:1,
    delay:0.5
})

tl.from(".navbar li, .navbar .btn",{
    opacity:0,
    y: -200,
    duration:0.3,
    stagger:0.3
})

tl.from(".center-part1 h1",{
    x:-100,
    opacity:0,
    duration:1
},"anim")

tl.from(".center-part1 p",{
    x:100,
    opacity:0,
    duration:1
},"anim")

tl.from(".center-part1 button",{
    x:-100,
    opacity:0,
    duration:1
}, "anim")

tl.from(".center-part2",{
    opacity:0,
    duration:1,
    rotate:360,
},"anim")

window.addEventListener("wheel", (dets) => {
    if(dets.deltaY > 0){
        gsap.to("brands",{
            transform: "translateX(-200%)",
            repeat:-1,
            duration:2,
            ease:"none"
        })
    }
    else{
        gsap.to("brands",{
            transform: "translateX(0%)",
            repeat:-1,
            duration:2,
            ease:"none"
        })
    }
})

tl.from(".services h1",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:"#page2",
        start:"top 90%",
        end:"top 50%",
        scrub:1
    }
})

tl.from(".services p",{
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:"#page2",
        start:"top 90%",
        end:"top 50%",
        scrub:1
    }
})

tl.from(".search, .social",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".search, .social",
        scrub:1
    }
})

tl.from(".pay, .email", {
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".search, .social",
        scrub:1
    }
})

tl.from(".section",{
    opacity: 0,
    scale:0.2,
    duration:2,
    scrollTrigger: {
        trigger: ".section",
        scrub:1,
        end:"top 90%"
    }
})

tl.from(".case h1",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".case",
        start:"top 90%",
        end:"top 50%",
        scrub:1
    }
})

tl.from(".case p",{
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".case",
        start:"top 90%",
        end:"top 50%",
        scrub:1
    }
})

tl.from(".last-section",{
    opacity: 0,
    scale:0.2,
    duration:2,
    delay:1,
    scrollTrigger: {
        trigger: ".last-section",
        scrub:1,
        end:"top 90%"
    }

})
