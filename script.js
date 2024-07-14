
function showSidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function preLoader(){
    document.addEventListener("DOMContentLoaded", function() {
        var tl = gsap.timeline({
            onComplete: () => {
                gsap.to("#preloader", { duration: 1, autoAlpha: 0 });
                document.getElementById("main-content").style.display = "block";
            }
        });
        tl.to(".loader-content1", { duration: 0.7, autoAlpha: 1, stagger: 0.5})
          .to("#text1", { duration: 0.3, autoAlpha: 0, delay: 0.3 })
          .to(".loader-content2", { duration: 0.5, autoAlpha: 1, stagger: 0.5 })
          .to("#text2", { duration: 0.5, autoAlpha: 0, delay: 0.5 })
          .to("#text3", { duration: 0.5, autoAlpha: 1 })
          .to("#text3", { duration: 0.5, scale: 70, delay: 0.5 });
    });
    
}

preLoader();

function menuTab(){    
    var menu = document.querySelector(".menu");
    var cross = document.querySelector(".cross");

    var tl = gsap.timeline();
    tl.to(".sidebar",{
        right:0,
        duration:0.5
    })
    tl.from(".sidebar li",{
        opacity:0,
        y:50,
        stagger:0.1,
        duration:0.5
    })
    tl.pause();
    menu.addEventListener("click",function(){
        tl.play();
    })
    cross.addEventListener("click",function(){
        tl.reverse();
    })
}
menuTab();
gsap.to("#marquee h1",{
    transform: 'translateX(-100%)',
    duration:7,
    repeat:-1,
    ease:"none"
})

