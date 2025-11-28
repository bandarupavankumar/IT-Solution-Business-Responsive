AOS.init({duration:1000, once:true});

function toggleMenu(){
    document.getElementById("mobileNav").classList.toggle("open");
}

// testimonial slider

new Swiper(".testimonialSlider",{
    loop: true,
    autoplay: {delay: 2500},
    spaceBetween:0,
    conteredSlides:true,
    navigation:{
        prevE1: ".swiper-button-prev",
        nextE1: ".swiper-button-next",
    }
});

// scroll

window.onscroll = () =>{
    const scrolled = scrollY;
    document.getElementById("mainHeader").classList.toggle("fixed", scrolled > 100);
    document.getElementById("backToTop").style.display = scrolled > 300 ? "block" : "none";
}

document.getElementById("backToTop").onclick = () => window.scrollTo({top:0 , behavior:"smooth"});
