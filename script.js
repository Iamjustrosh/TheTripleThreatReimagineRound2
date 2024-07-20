function showSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function preLoader() {
    document.addEventListener("DOMContentLoaded", function() {
        var tl = gsap.timeline({
            onComplete: () => {
                gsap.to("#preloader", { duration: 1, autoAlpha: 0 });
                document.getElementById("main-content").style.display = "block";
            }
        });
        tl.to(".loader-content1", { duration: 0.7, autoAlpha: 1, stagger: 0.5 })
            .to("#text1", { duration: 0.3, autoAlpha: 0, delay: 0.3 })
            .to(".loader-content2", { duration: 0.5, autoAlpha: 1, stagger: 0.5 })
            .to("#text2", { duration: 0.5, autoAlpha: 0, delay: 0.5 })
            .to("#text3", { duration: 0.5, autoAlpha: 1 })
            .to("#text3", { duration: 0.5, scale: 70, delay: 0.5 });
    });

}

// preLoader();

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
    menu.addEventListener("click", function() {
        tl.play();
    })
    cross.addEventListener("click", function() {
        tl.reverse();
    })
}
menuTab();
gsap.to(".marquee-content", {
    transform: 'translateX(-100%)',
    duration: 15,
    repeat: -1,
    ease: "none"
})

//Product-section
var products = [{
        image: "./assets/shoes/endorphin.png",
        price: "$50",
        name: "Saucony <br> Endorphin Pro 4",
        description: "Experience a seamless heel-to-toe transition for an effortless stride."
    },
    {
        image: "./assets/shoes/hoka_clifton.png",
        price: "$150",
        name: "Hoka <br> Clifton 9",
        description: "Experience great cushioning and high rebound while running."
    },
    {
        image: "./assets/shoes/altra_outroad.png ",
        price: "$199",
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
                            <h2 class=" font-bold text-3xl absolute bottom-2 left-5"> ${product.price} </h2>
                            <button data-index = "${index}" class="atc"><i data-index = "${index}" class="atc ri-add-line rounded-xl text-2xl px-2 py-1.5 h-10 w-10 font-bold bottom-2 right-5 absolute bg-white "></i> </button>
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
}
addProduct();
addToCart();
showCart();