//**********INDEX.JS**********//
//création des items pour l'affichage des produits sur la page d'accueil
export const createCards = (product) => {
  //récupération d'élément du DOM
  let items = document.querySelector('.items');
  //création d'élements du DOM
  let a = document.createElement('a');
  let article = document.createElement('article');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  //ajout d'une class aux éléments
  h3.classList.add('productName');
  p.classList.add('productDescription');
  //envoi les données de l'id d'un produit sur la page produit
  a.href = './product.html?id=' + product._id;
  //création des noeuds enfant-parent
  items.appendChild(a);
  a.appendChild(article);
  article.appendChild(h3);
  article.appendChild(img);
  article.appendChild(p);
  //Affichage des éléments
  img.src = product.imageUrl;
  img.alt = product.name;
  h3.innerText = product.name;
  p.innerText = product.description;
};

//**********PRODUCT.JS**********//
//création des items pour l'affichage des produits sur la page produit
export const createKanap = (item) => {
  //récupération d'éléments du DOM
  let item__img = document.querySelector('.item__img');
  let title = document.querySelector('#title');
  let price = document.querySelector('#price');
  //création d'élements du DOM
  let img = document.createElement('img');
  let p_description = document.querySelector('#description');
  let colors = document.querySelector('#colors');
  //création du noeud enfant-parent
  item__img.appendChild(img);
  //affichage des éléments
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
//création des items pour l'affichage des produits sur la page panier
export const createHtml = (dataProduct) => {
  for (let v = 0; v < dataProduct.length; v++) {
    //récupération d'élément du DOM
    let section_cart__items = document.querySelector('#cart__items');
    //création d'élements du DOM
    let article_cart__item = document.createElement('article');
    // article_cart__item.id = dataProduct[v].idProduct;
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

    //affichage de la quantité du produit sélectionné
    input.value = dataProduct[v].quantityProduct;

    let div_cart__item__content__settings__delete =
      document.createElement('div');
    let p_deleteItem = document.createElement('p');

    //ajout de classes aux éléments
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

    //création des noeuds enfant-parent
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

    //affichage des éléments
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

//affichage de la quantité des produits du panier dans menu nav
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
