const mainFunction = async () => {
  const productsData = dataLocalStorage();
  for (const product of productsData) {
    createHtml(product);
    deleteItemProduct(productsData);
  }
};

const dataLocalStorage = () => {
  return JSON.parse(localStorage.getItem('produit'));
};
console.log(dataLocalStorage);

//-------------------------------BUTTON SUPPR-------------------------------//
function deleteItemProduct(productsData) {
  const deleteButton = document.querySelectorAll('.deleteItem');

  for (let i = 0; i < productsData.length; i++) {
    deleteButton[i].addEventListener('click', (e) => {
      e.preventDefault();

      let supprimerId = productsData[i].idDuProduit;

      productsData = productsData.filter((el) => el.idDuProduit != supprimerId);

      localStorage.setItem('produit', JSON.stringify(productsData));

      alert('Cette élement a bien été supprimer du panier');

      window.location.href = 'cart.html';
    });
  }
}

//-------------------------------FIN BUTTON SUPPR-------------------------------//

//-------------------------------CREATION HTML-------------------------------//
const createHtml = (product) => {
  let section_cart__items = document.querySelector('#cart__items');
  //***Création constantes***//
  let article_cart__item = document.createElement('article');

  article_cart__item.id = `${product.idDuProduit}`;

  console.log(article_cart__item);

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

  // console.log(section_cart__items);

  img.src = product.imageDuProduit;
  h2_name_description.innerText = product.nomDuProduit;
  p_color_description.innerText = product.couleurDuProduit;
  p_price_description.innerText = product.prixDuProduit + ' €';
  p_quantity.innerText = 'Qté : ';
  // input.innerText = product.nombreDeProduit;
  p_deleteItem.innerText = 'Supprimer';
  ///-----------///
  //-------------------------------FIN CREATION HTML-------------------------------//

  //-------------------------------BUTTON SUPPR-------------------------------//
  // let btn_supprimer = document.querySelectorAll('.deleteItem');

  // for (let l = 0; l < btn_supprimer.length; l++) {
  //   btn_supprimer[l].addEventListener('click', () => {
  //     //Sélection de l'id qui sera supprimé en cliquant sur le bouton
  //     let id_selectionner_suppression = dataLocalStorage[l].idDuProduit;
  //     // console.log(id_selectionner_suppression);

  //     //avec la méthode filter, je selectionne les élements a garder et je supprime l'élément où le btn suppr à été cliqué
  //     dataLocalStorage = dataLocalStorage.filter(
  //       (el) => el.idDuProduit !== id_selectionner_suppression
  //     );
  //     // console.log(produitEnregistreDansLocalStorage);

  //     //On envoie la variable dans le local storage
  //     //La transformation en format JSON et l'envoyer dans la key 'produit' du localStorage
  //     localStorage.setItem('produit', JSON.stringify(dataLocalStorage));
  //     //alert pour avertir que le produit a été supprimé et rechargement de la page
  //     alert('Ce produit a été supprimé du panier');
  //     window.location.href = 'cart.html';
  //   });
  // }
  //-------------------------------FIN BUTTON SUPPR-------------------------------//

  //-------------------------------AFFICHER PRIX-------------------------------//

  ///-----------///
  let testQuantity = document.querySelector('#totalQuantity');
  testQuantity.innerText = product.nombreDeProduit;

  let testPrixTotal = document.querySelector('#totalPrice');
  testPrixTotal.innerText = product.prixDuProduit;

  let prixTotalCalcul = [];
  //Aller chercher les prix dans le panier
  for (let m = 0; m < dataLocalStorage.length; m++) {
    let prixProduitPanier = dataLocalStorage[m].prixDuProduit;

    //Mettre les prix du panier dans la variable "prixTotalCalcul"
    prixTotalCalcul.push(prixProduitPanier);
  }

  //Additionner les prix avec la méthode .reduce
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const prixTotal = prixTotalCalcul.reduce(reducer, 0);

  //-------------------------------FIN AFFICHER PRIX-------------------------------//
};

///-----------///

///-----------///
mainFunction();
