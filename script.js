
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
                start: "top 30%",
                end: "top top",
                scrub: true,
            },
            opacity: 0,
            x:-100,
            duration: 1,
            scale: 1.2,
            // ease: "bounce.in",
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


function productAndCart(){
    var products = [{
        image: "./assets/shoes/endorphin.png",
        price: "$149",
        name: "Saucony <br> Endorphin Pro 4",
        description: "Experience a seamless heel-to-toe transition for an effortless stride."
    },
    {
        image: "./assets/shoes/hoka_clifton.png",
        price: "$139",
        name: "Hoka <br> Clifton 9",
        description: "Experience great cushioning and high rebound while running."
    },
    {
        image: "./assets/shoes/altra_outroad.png ",
        price: "$109",
        name: "Altra <br> Outroad 2",
        description: "Balanced Cushioning platforms position your heel and forefoot at equal level."
    }
]

var cart = [];

function addProduct() {
    clutter = "";
    products.forEach(function(product, index) {
        clutter += `<div class="product w-full flex flex-row lg:flex-col ">
                        <div class="box h-[25vh] w-[50%] lg:w-[60%] rounded-3xl mb-20 lg:mb-2 px-[5%] py-[2%] flex justify-between relative" id="box${index}">
                            <img class="absolute left-12 md:left-24 lg:left-16 bottom-24 md:bottom-12 lg:bottom-16" src="${product.image}" alt="Shoes ">
                            <h2 class="text-white font-bold text-3xl absolute bottom-6 left-5 lg:left-8"> ${product.price} </h2>
                            <button data-index = "${index}" class="atc"><i data-index = "${index}" class="atc ri-add-line rounded-xl text-2xl px-2 py-1.5 h-10 w-10 font-bold bottom-6 right-5 lg:right-8 absolute bg-white "></i> </button>
                        </div>
                        <div class="des">
                            <h3 class="m-[5%] mt-10 md:mt-[20%] lg:mt-2 font-bold text-xl max-w-max ">${product.name} </h3>
                            <h4 class="ml-[5%] mt-2 font-normal w-[40vw] lg:w-[65%] ">${product.description} </h4>
                        </div>
                    </div> `;
    })
    document.querySelector(".products").innerHTML = clutter;

    viewmore = "";
    viewmore = `<div class="more w-full font-bold self-center flex justify-center items-center ">
                        <h1 class=" ">View More </h1>
                        <i class="ri-arrow-right-s-line text-lg "></i>
                    </div>`;
    document.querySelector(".products").innerHTML += viewmore;



}

function addToCart() {
    document.querySelector(".products").addEventListener("click", function(info) {

        if (info.target.classList.contains("atc")) {
            cart.push(products[info.target.dataset.index])
        }
    })
}

function showCart() {
    document.querySelector(".carticon").addEventListener("click", function() {
        document.querySelector(".cartexpand").style.display = "block";
        clutter = "";
        cart.forEach(function(product, index) {
            clutter += ` <div class = "flex gap-2 bg-white p-2 rounded-lg" >
                            <div class = "w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden" >
                                <img class = "w-full h-full object-cover" src = "${product.image}" />
                            </div>
                            <div>
                                <h3 class = "font-semibold"> ${ product.name } </h3> 
                                <h5 class = "text-sm font-semibold opacity-80" > ${ product.price } </h5> 
                            </div>
                        </div>`;
        })
        document.querySelector(".cartexpand").innerHTML = clutter;
    })
    document.querySelector(".hero-section").addEventListener("click", function() {
        document.querySelector(".cartexpand").style.display = "none";
    });
}
addProduct();
addToCart();
showCart();
}



preLoader();
menuTab();
marqueeAnimation();
mobileMarqueeAnimation();
shoeAnimation();
productAndCart();