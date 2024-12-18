document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const slideInterval = 3000; // 定义轮播图切换间隔时间，单位为毫秒

    function showSlide(index) {
        slides.forEach((slide, i) => slide.style.display = i === index ? 'block' : 'none');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');

    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    function autoPlaySlides() {
        nextSlide();
        setTimeout(autoPlaySlides, slideInterval); // 确保这里使用的是已定义的 slideInterval
    }

    showSlide(currentSlide);
    autoPlaySlides(); // 确保在定义 slideInterval 后调用

    function navigateTo(page) {
        if (page === '#home') {
            showSlide(0);
        } else {
            window.location.href = page;
        }
    }
});
// 确保这个函数在 login.html 中的 <script> 标签中定义
function register() {
    // 注册逻辑
    alert('注册功能尚未实现。');
}

function login() {
    // 登录逻辑
    alert('登录功能尚未实现。');
}