//import de la fonction permettant l'appel de l'API pour la récupération des données de tous les produits
import { fetchCall } from './modules/apiGET.js';
//import de la fonction permettant la création des items pour l'affichage des produits sur la page d'accueil
import { createCards } from './modules/createItems.js';
//import de la fonction permettant de récupérer les valeurs des produits enregistrés dans le localStorage
import { loadcart } from './modules/localStorage.js';
//import de la fonction permettant l'affichage de la quantité du panier dans le menu nav
import { quantityAffichagePanier } from './modules/createItems.js';

//fonction principale
const mainFunction = async () => {
  const productsData = await fetchCall();
  for (const product of productsData) {
    createCards(product);
  }
  //appel de la fonction quantityAffichagePanier
  quantityAffichagePanier(dataProduct);
};

//création de la variable dataProduct pour l'appel de la fonction loadcart
let dataProduct = loadcart();
//appel de la fonction principale
mainFunction();
