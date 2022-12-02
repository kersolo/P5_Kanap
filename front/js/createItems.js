//**********INDEX.JS**********//
//Création des cards pour affichage produits
export const createCards = (product) => {
  let items = document.querySelector('.items');
  let a = document.createElement('a');
  let article = document.createElement('article');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  h3.classList.add('productName');
  p.classList.add('productDescription');

  a.href = './product.html?id=' + product._id;

  items.appendChild(a);
  a.appendChild(article);
  article.appendChild(h3);
  article.appendChild(img);
  article.appendChild(p);

  img.src = product.imageUrl;
  img.alt = product.name;
  h3.innerText = product.name;
  p.innerText = product.description;
};
//**********PRODUCT.JS**********//
//Création des cards
export const createKanap = (item) => {
  let item__img = document.querySelector('.item__img');
  let title = document.querySelector('#title');

  let price = document.querySelector('#price');
  let img = document.createElement('img');
  let p_description = document.querySelector('#description');
  let colors = document.querySelector('#colors');

  item__img.appendChild(img);

  title.innerHTML = item.name;
  price.innerHTML = item.price;
  img.src = item.imageUrl;
  img.alt = item.name;
  p_description.innerHTML = item.description;

  //boucle pour le choix de la couleur
  for (const color of item.colors) {
    let option = document.createElement('option');

    colors.appendChild(option);
    option.innerHTML = color;
  }
};
//**********CART.JS**********//
//Fonction création éléments
export const createHtml = (dataProduct) => {
  for (let v = 0; v < dataProduct.length; v++) {
    let section_cart__items = document.querySelector('#cart__items');

    //***Création constantes***//
    let article_cart__item = document.createElement('article');

    article_cart__item.id = dataProduct[v].idProduct;

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
    input.value = dataProduct[v].quantityProduct;
    let div_cart__item__content__settings__delete =
      document.createElement('div');
    let p_deleteItem = document.createElement('p');
    //***Création constantes***//

    //***Ajout Class***//
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
    input.classList.add('.itemQuantity');
    div_cart__item__content__settings__delete.classList.add(
      'cart__item__content__settings__delete'
    );
    p_deleteItem.classList.add('deleteItem');
    //***Ajout Class***//

    //***AppendChild***//
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
    //***AppendChild***//

    img.src = dataProduct[v].imgProduct;
    img.alt = dataProduct[v].name;
    h2_name_description.innerText = dataProduct[v].nameProduct;
    p_color_description.innerText = dataProduct[v].colorProduct;

    p_price_description.innerText = dataProduct[v].priceProduct + ' €';

    p_quantity.innerText = 'Qté : ';

    p_deleteItem.innerText = 'Supprimer';

    /****************************************/
  }
};
export let quantityAffichagePanier = (dataProduct) => {
  const totalQuantity = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantityProduct),
    0
  );

  let nav = document.querySelector('nav > ul > a:nth-child(2) li');
  let span = document.createElement('span');
  nav.appendChild(span);
  if (totalQuantity) {
    span.innerHTML = ' ' + '(' + totalQuantity + ')';
    span.style.color = 'grey';
  }
};
