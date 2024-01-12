function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
// init()
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var h1 = document.querySelector(".right h1")
h1.addEventListener("mouseenter", function(dets) {
    circle.style.scale = 8
})

h1.addEventListener("mouseleave", function(dets) {
    circle.style.scale = 1
})

document.addEventListener("mousemove", function(dets) {
    document.querySelector("#circle").style.left = `${dets.x - 15  }px`
    document.querySelector("#circle").style.top = `${dets.y + 15 }px`

    document.querySelector(".in-eye").style.top = `${dets.y / 55}px`
    document.querySelector(".in-eye").style.left = `${dets.x / 55}px`
    document.querySelector(".in-eye2").style.top = `${dets.y / 55}px`
    document.querySelector(".in-eye2").style.left = `${dets.x / 55}px`
    document.querySelector(".center h1").style.top = `${dets.y / 55}px`
    document.querySelector(".right").style.left = `${dets.x / 55}px`
        // document.querySelector(".eyes").style.width = "30px "
        // console.log("ehyegfe")
})

// var crsr = document.querySelector(".cursor")
// var main = document.querySelector(".main")
// document.addEventListener("mousemove", function(dets) {
//     crsr.style.left = dets.x + 20 + "px"
//     crsr.style.top = dets.y + 20 + "px"
// })

// gsap.from(".page1 h1,.page1 h2", {
//     y: 10,
//     rotate: 10,
//     opacity: 0,
//     delay: 0.3,
//     duration: 0.7
// })
// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         // markers:true,
//         start: "top 27%",
//         end: "top 0",
//         scrub: 3
//     }
// })
// tl.to(".page1 h1", {
//     x: -100,
// }, "anim")
// tl.to(".page1 h2", {
//     x: 100
// }, "anim")
// tl.to(".page1 video", {
//     width: "90%"
// }, "anim")

// var tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         // markers:true,
//         start: "top -115%",
//         end: "top -120%",
//         scrub: 3
//     }
// })
// tl2.to(".main", {
//     backgroundColor: "#fff",
// })

// var tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         // markers:true,
//         start: "top -280%",
//         end: "top -300%",
//         scrub: 3
//     }
// })

// tl3.to(".main", {
//     backgroundColor: "#0F0D0D"
// })


// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function(elem) {
//     elem.addEventListener("mouseenter", function() {
//         var att = elem.getAttribute("data-image")
//         crsr.style.width = "470px"
//         crsr.style.height = "370px"
//         crsr.style.borderRadius = "0"
//         crsr.style.backgroundImage = `url(${att})`
//     })
//     elem.addEventListener("mouseleave", function() {
//         elem.style.backgroundColor = "transparent"
//         crsr.style.width = "20px"
//         crsr.style.height = "20px"
//         crsr.style.borderRadius = "50%"
//         crsr.style.backgroundImage = `none`
//     })
// })

// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem) {
//     elem.addEventListener("mouseenter", function() {
//         purple.style.display = "block"
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave", function() {
//         purple.style.display = "none"
//         purple.style.opacity = "0"
//     })
// })
/* Store the element in el */
let el = document.getElementById('boximg')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
    /*
     * Get position of mouse cursor
     * With respect to the element
     * On mouseover
     */
    /* Store the x position */
    const xVal = e.layerX
        /* Store the y position */
    const yVal = e.layerY

    /*
     * Calculate rotation valuee along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const yRotation = 20 * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -20 * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    /* Apply the calculated transformation */
    el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});