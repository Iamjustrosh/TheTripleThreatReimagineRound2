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