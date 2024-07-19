
function preLoader() {
    document.addEventListener("DOMContentLoaded", function () {
        var tl = gsap.timeline({
            onComplete: () => {
                gsap.to("#preloader", { duration: 1, autoAlpha: 0 });
                document.getElementById("main-content").style.display = "block";
                gsap.to(".hero-shoe", { duration: 1.5, x: 0, rotate: 0 });
                heroText = document.querySelectorAll(".hero-text")

                var splitText = new SplitType(heroText, { type: "chars" });
                var chars = splitText.chars;

                gsap.from(chars, {

                    y: 20,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.03,
                    ease: "power4.inOut"

                })
                thirdSectionAnimation();
                marqueeParaAnimation();
            }
        });
        tl.to(".loader-content1", { duration: 0.7, autoAlpha: 1, stagger: 0.5 })
            .to("#text1", { duration: 0.3, autoAlpha: 0, delay: 0.3 })
            .to(".loader-content2", { duration: 0.5, autoAlpha: 1, stagger: 0.5 })
            .to("#text2", { duration: 0.5, autoAlpha: 0, delay: 0.5 })
            .to("#text3", { duration: 0.5, autoAlpha: 1 })
            .to("#text3", { duration: 0.5, scale: 70, delay: 0.5, autoAlpha: 0 })

    });

}


function menuTab() {
    var menu = document.querySelector(".menu");
    var cross = document.querySelector(".cross");

    var tl = gsap.timeline();
    tl.to(".sidebar", {
        right: 0,
        duration: 0.5
    })
    tl.from(".sidebar li", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.5
    })
    tl.pause();
    menu.addEventListener("click", function () {
        tl.play();
    })
    cross.addEventListener("click", function () {
        tl.reverse();
    })
}

function marqueeAnimation() {
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marquee-content", {
                transform: 'translateX(-200%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })

            gsap.to("#marquee .shoes", {
                rotationY: 180
            })
        }
        else {
            gsap.to(".marquee-content", {
                transform: 'translateX(0%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })
            gsap.to("#marquee .shoes", {
                rotationY: 0
            })
        }

    })

    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marquee-content-reverse", {
                transform: 'translateX(100%)',
                duration: 12,
                repeat: -1,
                ease: "none"
            })
        }
        else {
            gsap.to(".marquee-content-reverse", {
                transform: 'translateX(-100%)',
                duration: 12,
                repeat: -1,
                ease: "none"
            })
        }

    })
}


function shoeAnimation() {
    if (window.innerWidth >= 1024) {
        var shoe = document.querySelector(".heroshoes");
        var star = document.querySelector(".star")
        document.addEventListener("mousemove", function (dets) {
            var moveX_shoe = (dets.clientX - window.innerWidth / 2) * 0.03;
            var moveY_shoe = (dets.clientY - window.innerHeight / 2) * 0.05;
            var moveX_star = (dets.clientX - window.innerWidth / 2) * 0.05;
            var moveY_star = (dets.clientY - window.innerHeight / 2) * 0.07;

            shoe.style.transform = `translate(${moveX_shoe}px, ${moveY_shoe}px)`;
            star.style.transform = `translate(${moveX_star}px, ${moveY_star}px)`;

        })

    }

}


function thirdSectionAnimation() {
    gsap.utils.toArray(".leftimg").forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 50%",
                end: "top top",
                scrub: true,
            },
            opacity: 0,
            duration: 1,
        });
    });


    /* Old Animation 

    //   gsap.utils.toArray(".righttext").forEach((txt) => {
    //     gsap.from(txt, {
    //       scrollTrigger: {
    //         trigger: txt,
    //         start: "top 70%",
    //         end: "top top",
    //         scrub: true,
    //       },
    //       opacity: 0,
    //       y:100,
    //       duration: 1,
    //     });
    //   });
    */
    var sText = document.querySelectorAll(".righttext");

    sText.forEach(function (element) {
        var splitText = new SplitType(element, { type: "chars" });
        var chars = splitText.chars;

        gsap.from(chars, {
            scrollTrigger: {
                trigger: element,
                start: "top 70%",
                end: "top 20%",
                scrub: true,
            },
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1,
            ease: "power4.inOut",
        });
    });



}

function marqueeParaAnimation() {
    var sText = document.querySelectorAll(".para");

    sText.forEach(function (element) {
        var splitText = new SplitType(element, { type: "chars" });
        var chars = splitText.chars;

        gsap.from(chars, {
            scrollTrigger: {
                trigger: element,
                start: "top 70%",
                end: "top 20%",
                scrub: true,
            },
            opacity: 0.2,
            stagger: 0.3,
            duration: 0.1,
            ease: "none",
        });
    });
}


function mobileMarqueeAnimation(){
    let startY;
    let scrollDirection;
    
   
    window.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    });
    
  
    window.addEventListener("touchmove", function (e) {
        let touch = e.touches[0];
        let moveY = touch.clientY - startY;
    
        if (moveY > 0) {
            scrollDirection = 1; 
        } else {
            scrollDirection = -1; 
        }
        updateMarquee();
    });
    
    function updateMarquee() {
        if (scrollDirection === 1) {
            gsap.to(".marquee-content", {
                transform: 'translateX(-200%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".marquee-content-reverse", {
                transform: 'translateX(100%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            });
    
            gsap.to("#marquee .shoes", {
                rotationY: 180
            })
        }
        else {
            gsap.to(".marquee-content", {
                transform: 'translateX(0%)',
                duration: 10,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".marquee-content-reverse", {
                transform: 'translateX(-100%)',
                duration: 6,
                repeat: -1,
                ease: "none"
            });
            gsap.to("#marquee .shoes", {
                rotationY: 0
            })
        }
    }
}

preLoader();
menuTab();
marqueeAnimation();
mobileMarqueeAnimation();
shoeAnimation();