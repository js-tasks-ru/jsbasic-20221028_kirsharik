import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
// корневой контенер карусели
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');

// добавляем кнопки переключения

    const carouselArrowRight = document.createElement('div');
    carouselArrowRight.classList.add('carousel__arrow', 'carousel__arrow_right');
    carouselArrowRight.innerHTML = '<img src="/assets/images/icons/angle-icon.svg" alt="icon">'
    carouselDiv.append(carouselArrowRight);

    const carouselArrowLeft = document.createElement('div');
    carouselArrowLeft.classList.add('carousel__arrow', 'carousel__arrow_left');
    carouselArrowLeft.innerHTML = '<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">'
    carouselDiv.append(carouselArrowLeft);

    
// добавляем слайды
    const carouselInnerDiv = document.createElement('div');
    carouselInnerDiv.classList.add('carousel__inner')

    this.slides.forEach(elem => {
      const slideHtml = createElement(`
      <div class="carousel__slide" data-id=${elem.id}>
        <img src="/assets/images/carousel/${elem.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${elem.price.toFixed(2)}</span>
          <div class="carousel__title">${elem.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);

    carouselInnerDiv.append(slideHtml);

  });

  carouselDiv.append(carouselInnerDiv);

//Функция свайп

  // альтернативное решение
  // let itemWidth
  // if (window.innerWidth < 988) {itemWidth = window.innerWidth}
  // else {itemWidth = 988};

  let slideSize = 0;

  carouselArrowLeft.style.display = 'none'

  // Функция свайп / Обработчик отключающий стрелки
  carouselDiv.onclick = function(event) {

    let itemWidth = carouselInnerDiv.offsetWidth
    let carouselArrow = event.target.closest('.carousel__arrow');
    if (!carouselArrow) return;

    if (slideSize < itemWidth) {carouselArrowLeft.style.display = 'none'}
    else {carouselArrowLeft.style.display = ''};

    if (slideSize > (carouselInnerDiv.children.length - 2) * itemWidth) {carouselArrowRight.style.display = 'none'}
    else {carouselArrowRight.style.display = ''};

  };

  // Функция свайп / Обработчики для свайпов
  carouselArrowRight.addEventListener('click', function() {
    let itemWidth = carouselInnerDiv.offsetWidth;
    carouselInnerDiv.style.transform = `translateX(-${slideSize += itemWidth}px)`
  });

  carouselArrowLeft.addEventListener('click', function() {
    let itemWidth = carouselInnerDiv.offsetWidth;
    carouselInnerDiv.style.transform = `translateX(-${slideSize -= itemWidth}px)`
  });

  // Обработчики кнопки "+"

  carouselDiv.addEventListener('click', function(ev) {

    let addBtn = ev.target.closest('.carousel__button');
    if (!addBtn) return;

    const productAddEv = new CustomEvent("product-add", {
      detail: ev.target.closest('.carousel__slide').dataset.id,
      bubbles: true
    });

    this.id = ev.target.closest('.carousel__slide').dataset.id;
    this.dispatchEvent(productAddEv);

  });

// возвращаем корневой контенер карусели
  return carouselDiv;

  } //render

} //class Carousel