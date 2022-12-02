//import de la fonction permettant l'affichage de la quantité du panier dans menu nav
import { quantityAffichagePanier } from './createItems.js';
////import de la fonction permettant la récupération des valeurs du localStorage
import { loadcart } from './localStorage.js';
//Déclaration de la variable dataProduct
//import fonction
import { createHtml } from './createItems.js';
import { getItem } from './apiGET.js';
import { deleteItemProduct } from './localStorage.js';
import { changeQuantity } from './localStorage.js';
import { quantityAndTotalPrice } from './localStorage.js';

import { getDataForm } from './apiPOST.js';

/****************************************/

/****************************************/

//Fonction principale
const mainFunction = async () => {
  dataProduct = await loadcart();
  let cartwithprice = structuredClone(dataProduct);
  for (const data of cartwithprice) {
    const product = await getItem(data.idProduct);
    data.priceProduct = product.price;
  }
  if (dataProduct === null || dataProduct == 0) {
    localStorage.removeItem('produits');
  }

  let form_cart__order = document.querySelector('.cart__order');
  let form_cart__order__form = document.querySelector('.cart__order__form');

  let votrePanier = document.querySelector('#cartAndFormContainer h1');

  if (dataProduct == 0) {
    form_cart__order.removeChild(form_cart__order__form);
    votrePanier.innerHTML = 'Votre panier est vide';
  } else {
    //création DOM panier

    createHtml(cartwithprice);
    deleteItemProduct();
    changeQuantity();
    quantityAndTotalPrice(cartwithprice);
    getDataForm();
    quantityAffichagePanier(dataProduct);
  }
};

/****************************************/

/****************************************/

// /****************************************/

// /****************************************/

//Total de la quantité et du prix

// /****************************************/

// /****************************************/

// /****************************************/

// /****************************************/

// /****************************************/

let dataProduct;

//Déclaration des variables pour les messages d'erreur des inputs du formulaire

mainFunction();
