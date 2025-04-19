const slidesData = [
    { color: 'blue', text: 'Blue Slide' },
    { color: 'black', text: 'Black Slide' },
    { color: 'red', text: 'Red Slide' },
    { color: 'green', text: 'Green Slide' }
];

const sliderContainer = document.querySelector('.slider');
const navigation = document.querySelector('.navigation');
let currentSlide = 0;

slidesData.forEach((slideData, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');

    colorBlock.style.backgroundColor = slideData.color;
    colorBlock.innerText = slideData.text;

    slide.appendChild(colorBlock);
    sliderContainer.appendChild(slide);

    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    navigation.appendChild(dot);
});

const updateSlider = () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlider();
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    updateSlider();
};

const goToSlide = (index) => {
    currentSlide = index;
    updateSlider();
};

updateSlider();
