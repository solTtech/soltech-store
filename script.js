document.querySelector("body > div.header__menu-block > div.menu-mob__faq > ul.language-switcher > li.active")
const renderCartItem = (product, inputNumber) => {
    const cart = document.querySelector(".cart-list");
    const emptyCartTitle = document.querySelector(".cart-empty-title");
    const cartListWrapper = document.querySelector(".cart-list-wrapper");
    // creating elements
    const cartListItem = document.createElement("li");
    const cartListImgSection = document.createElement("section");
    const cartListPriceSection = document.createElement("section");
    const cartListQuantitySection = document.createElement("section");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("span");
    const quantity = document.createElement("input");
    const removeBtn = document.createElement("button");
    quantity.addEventListener("change", () => getCartTotal(product));
    removeBtn.addEventListener("click", (event) =>
      removeProductFromCart(event, product)
    );