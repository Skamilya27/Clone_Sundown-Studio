const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation() {
    let elemC = document.querySelector('#elem-container');
let fixedImage = document.querySelector('#fixed-image'); 
elemC.addEventListener("mouseenter", () => {
    fixedImage.style.display = 'block';
})
elemC.addEventListener("mouseleave", () => {
    fixedImage.style.display = 'none';
})

let elems = document.querySelectorAll(".elem");
elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        let image = e.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`
    })
})
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

page3Animation();
swiperAnimation();

