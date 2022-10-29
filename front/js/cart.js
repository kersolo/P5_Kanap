let dataLocalStorage = JSON.parse(localStorage.getItem('produit'));
console.log(dataLocalStorage); //creer fonction

const mainFunction = async () => {
  const productsData = await dataLocalStorage();
  for (const product of productsData) {
    createHtml(product);
  }
};

const createHtml = (product) => {
  let section_cart__items = document.querySelector('#cart__items');
  let article_cart__item = document.createElement('article');
  article_cart__item.classList.add('cart__item');

  let div_cart__item__img = document.createElement('div');
  div_cart__item__img.classList.add('cart__item__img');

  let img = document.createElement('img');

  section_cart__items.appendChild(article_cart__item);
  article_cart__item.appendChild(div_cart__item__img);
  div_cart__item__img.appendChild(img);

  console.log(section_cart__items);

  img.src = product.imageDuProduit;
};
createHtml();
