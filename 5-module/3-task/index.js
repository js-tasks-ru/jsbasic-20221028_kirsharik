function initCarousel() {

  const carousel = document.querySelector('.carousel');

  const carouselArrowRightBtn = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeftBtn = document.querySelector('.carousel__arrow_left');

  const carouselItems = document.querySelector('.carousel__inner');

  const itemWidth = carouselItems.offsetWidth;
  console.log(carouselItems);
  console.log(carouselItems.offsetWidth);

  let slideSize = 0;

  carouselArrowLeftBtn.style.display = 'none'

  // Обработчик отключающий стрелки
  carousel.onclick = function(event) {
    
    let carouselArrow = event.target.closest('.carousel__arrow');
    if (!carouselArrow) return;

    if (slideSize < itemWidth) {carouselArrowLeftBtn.style.display = 'none'}
    else {carouselArrowLeftBtn.style.display = ''};

    if (slideSize > (carouselItems.children.length - 2) * itemWidth) {carouselArrowRightBtn.style.display = 'none'}
    else {carouselArrowRightBtn.style.display = ''};

  };

  // Обработчики для свайпов
  carouselArrowRightBtn.addEventListener('click', function() {carouselItems.style.transform = `translateX(-${slideSize += itemWidth}px)`});
  carouselArrowLeftBtn.addEventListener('click', function() {carouselItems.style.transform = `translateX(-${slideSize -= itemWidth}px)`});

}
