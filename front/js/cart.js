const mainFunction = async () => {
  const productsData = await dataLocalStorage();
  for (const product of productsData) {
    createHtml(product);
  }
};

const dataLocalStorage = async () => {
  const testHop = JSON.parse(localStorage.getItem('produit'));
  // console.log(dataLocalStorage);

  return testHop;
};

// let dataLocalStorage = () => {
//   JSON.parse(localStorage.getItem('produit'));
//   console.log(dataLocalStorage); //creer fonction
// };

// const mainFunction = () => {
//   const productsData = dataLocalStorage();
//   for (const product of productsData) {
//     createHtml(product);
//   }
// };

const createHtml = (product) => {
  let section_cart__items = document.querySelector('#cart__items');
  let article_cart__item = document.createElement('article');
  let div_cart__item__img = document.createElement('div');
  let img = document.createElement('img');
  let div_cart__item__content = document.createElement('div');
  let div_cart__item__content__description = document.createElement('div');
  let h2_name_description = document.createElement('h2');
  let p_color_description = document.createElement('p');
  let p_price_description = document.createElement('p');
  let div_cart__item__content__settings = document.createElement('div');
  let div_cart__item__content__settings__quantity =
    document.createElement('div');
  let p_quantity = document.createElement('p');
  let input = document.createElement('input');
  input.type = 'number';
  input.class = 'itemQuantity';
  input.name = 'itemQuantity';
  input.min = 1;
  input.max = 100;
  input.value = product.nombreDeProduit;
  let div_cart__item__content__settings__delete = document.createElement('div');
  let p_deleteItem = document.createElement('p');

  article_cart__item.classList.add('cart__item');
  div_cart__item__img.classList.add('cart__item__img');
  div_cart__item__content.classList.add('cart__item__content');
  div_cart__item__content__description.classList.add(
    'cart__item__content__description'
  );
  div_cart__item__content__settings.classList.add(
    'cart__item__content__settings'
  );
  div_cart__item__content__settings__quantity.classList.add(
    'cart__item__content__settings__quantity'
  );
  div_cart__item__content__settings__delete.classList.add(
    'cart__item__content__settings__delete'
  );
  p_deleteItem.classList.add('deleteItem');

  section_cart__items.appendChild(article_cart__item);
  article_cart__item.appendChild(div_cart__item__img);
  div_cart__item__img.appendChild(img);
  article_cart__item.appendChild(div_cart__item__content);
  div_cart__item__content.appendChild(div_cart__item__content__description);
  div_cart__item__content__description.appendChild(h2_name_description);
  div_cart__item__content__description.appendChild(p_color_description);
  div_cart__item__content__description.appendChild(p_price_description);
  div_cart__item__content.appendChild(div_cart__item__content__settings);
  div_cart__item__content__settings.appendChild(
    div_cart__item__content__settings__quantity
  );
  div_cart__item__content__settings__quantity.appendChild(p_quantity);
  div_cart__item__content__settings__quantity.appendChild(input);
  div_cart__item__content__settings.appendChild(
    div_cart__item__content__settings__delete
  );
  div_cart__item__content__settings__delete.appendChild(p_deleteItem);

  console.log(section_cart__items);

  img.src = product.imageDuProduit;
  h2_name_description.innerText = product.nomDuProduit;
  p_color_description.innerText = product.couleurDuProduit;
  p_price_description.innerText = product.prixDuProduit + ' €';
  p_quantity.innerText = 'Qté : ';
  // input.innerText = product.nombreDeProduit;
  p_deleteItem.innerText = 'Supprimer';
};

mainFunction();
