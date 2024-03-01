function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveScroll();
gsap.to("#nav-left svg",{
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -10%",
        scrub:1
    }
})
gsap.to("#nav-right #links",{
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -10%",
        scrub:1
    }
})

function videotTagAnimation() {
    var videotag = document.querySelector("#video-tag")
    var playbtn = document.querySelector("#play")

    // mouse move animation using gsap
    videotag.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })
    })
    videotag.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })
    videotag.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 60,
            top: dets.y - 70
        })
    })
}
videotTagAnimation();

function changeCourseVideoAnimation() {
    gsap.from("#page1 h1", {
        y: 200,
        opacity: 0,
        stagger: 0.5,
        duration: 0.9,
        delay: 0.2
    })
    gsap.from("#video-tag", {
        y: 200,
        opacity: 0,
        duration: 0.9,
        delay: 1
    })
}
changeCourseVideoAnimation();

function childCursorAnimation() {
    var child = document.querySelectorAll(".child");
    child.forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {
            gsap.to("#cursor", {
                left: dets.x,
                top: dets.y,
            })
        })
    })

    document.querySelector("#child1").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: '#2C211E'
        })
    })
    document.querySelector("#child1").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: '#F87F11'
        })
    })
    document.querySelector("#child2").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })
    document.querySelector("#child3").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: '#111111'
        })
    })
    document.querySelector("#child3").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })
    document.querySelector("#child4").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)',
            backgroundColor: '#CFE4ED'
        })
    })
    document.querySelector("#child4").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })
}
childCursorAnimation();

