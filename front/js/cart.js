//import de la fonction permettant de récupérer les valeurs des produits enregistré dans le localStorage
import { loadcart } from './modules/localStorage.js';
//import de la fonction permettant la création des items pour l'affichage des produits sur la page panier
import { createHtml } from './modules/createItems.js';
//import de la fonction permettant l'appel de l'API pour la récupération des données d'un produit en fonction de son id qui est réupéré en paramètre avec getItemId
import { getItem } from './modules/apiGET.js';
//import de la fonction permettant la suppression d'un produit
import { deleteItemProduct } from './modules/localStorage.js';
//import de la fonction permettant l'incrémentation ou la décrémentation un produit
import { changeQuantity } from './modules/localStorage.js';
//import de la fonction permettant le calcul total de la quantité et du prix des produits afficher sur la page panier
import { quantityAndTotalPrice } from './modules/localStorage.js';
//import de la fonction permettant l'envoie de la requête post à l'API
import { getDataForm } from './modules/apiPOST.js';
//import de la fonction permettant l'affichage de la quantité du panier dans le menu nav
import { quantityAffichagePanier } from './modules/createItems.js';

/****************************************/

/****************************************/

//fonction principale
const mainFunction = async () => {
  //clone le tableau dataProduct pour pouvoir ajouter une valeur sans modifier le tableau dataProduct originel
  let cartwithprice = structuredClone(dataProduct);
  //boucle pour rajouter le prix dans les données d'un produit
  for (const data of cartwithprice) {
    const product = await getItem(data.idProduct);
    data.priceProduct = product.price;
  }
  //condition pour supprimer le tableau vide présent dans le localStorage
  if (dataProduct === null || dataProduct == 0) {
    localStorage.removeItem('produits');
  }
  //récupération d'éléments du DOM
  let form_cart__order = document.querySelector('.cart__order');
  let form_cart__order__form = document.querySelector('.cart__order__form');
  let votrePanier = document.querySelector('#cartAndFormContainer h1');
  //condition pour supprimer l'affichage du formulaire si aucun produit n'est présent sur la page panier sinon appel de toutes les autres fonctions
  if (dataProduct == 0) {
    form_cart__order.removeChild(form_cart__order__form);
    votrePanier.innerHTML = 'Votre panier est vide';
  } else {
    createHtml(cartwithprice);
    deleteItemProduct();
    changeQuantity();
    quantityAndTotalPrice(cartwithprice);
    getDataForm();
    quantityAffichagePanier(dataProduct);
  }
};

/****************************************/
//création de la variable dataProduct pour l'appel de la fonction loadcart
let dataProduct = loadcart();

//appel de la fonction pricipale
mainFunction();
