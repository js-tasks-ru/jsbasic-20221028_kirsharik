import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product
    this.elem = this.render();
  }

  // addBtnOnClick(ev) {
  //   let addBtn = ev.target.closest('.card__button');
  //   if (!addBtn) return;

  //   const eventevent = new CustomEvent("product-add", {
  //     detail: this.product.id,
  //     bubbles: true
  //   });
    
  //   this.dispatchEvent(eventevent); //нерабочий вариант

  render() {

    const productDiv = createElement(`
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>
    `);
      
    const eventevent = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });

    // productDiv.addEventListener('click', this.addBtnOnClick); //нерабочий вариант
    productDiv.addEventListener('click', function(ev) {

      let addBtn = ev.target.closest('.card__button');
      if (!addBtn) return;

      this.dispatchEvent(eventevent);

      console.log(eventevent)

    }); //рабочий вариант

    return productDiv;
  }

}