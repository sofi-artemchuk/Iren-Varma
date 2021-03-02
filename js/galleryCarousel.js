(function() {
    var slideIndex = 1;
        showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    document.querySelector('.dot').addEventListener('click', () => plusSlides(1));
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides_item");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length-1) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length-1; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-0].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
})();

(function() {
    var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    document.querySelector('.prev_testimonials').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next_testimonials').addEventListener('click', () => plusSlides(1));
    document.querySelector('.dot_testimonials').addEventListener('click', () => plusSlides(1));
    
    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonials-item");
    var dots = document.getElementsByClassName("dot_testimonials");
    if (n > slides.length-1) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length-1; i++) {
        dots[i].className = dots[i].className.replace (" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
})();
