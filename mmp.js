document.addEventListener("DOMContentLoaded", () => {
    console.log("Mari Massage Poltava loaded");
});

document.querySelectorAll(".service-slider").forEach(slider => {
    const slides = slider.querySelectorAll(".service-slide");
    let index = 0;

    slider.querySelector(".next").addEventListener("click", () => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    });

    slider.querySelector(".prev").addEventListener("click", () => {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    });
});
