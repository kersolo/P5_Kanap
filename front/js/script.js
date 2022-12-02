//import de la fonction permettant l'affichage de la quantité du panier dans menu nav
import { fetchCall } from './apiGET.js';
import { createCards } from './createItems.js';
import { loadcart } from './localStorage.js';
import { quantityAffichagePanier } from './createItems.js';

//Fonction principale asynchrone revecevant une promesse de la fonction fetchcall et va créer une boucle pour affichage de tous les produits via la fonction createcards
const mainFunction = async () => {
  const productsData = await fetchCall();
  for (const product of productsData) {
    createCards(product);
  }
  let dataProduct = await loadcart();
  quantityAffichagePanier(dataProduct);
};

//Appel de la fonction principale
mainFunction();
