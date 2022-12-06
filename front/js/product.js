//import de la fonction permettant l'appel de l'API pour la récupération des données d'un produit en fonction de son id qui est réupéré en paramètre avec getItemId
import { getItem } from './modules/apiGET.js';
//import de la fonction permettant la création des items pour l'affichage des produits sur la page produit
import { createKanap } from './modules/createItems.js';
//import de la fonction permettant la création de l'objet avec les données du produit pour ajout au tableau dans le localStorage
import { LocalStorage } from './modules/localStorage.js';
//import de la fonction permettant de récupérer les valeurs des produits enregistrés dans le localStorage
import { loadcart } from './modules/localStorage.js';
//import de la fonction permettant l'affichage de la quantité du panier dans le menu nav
import { quantityAffichagePanier } from './modules/createItems.js';

//fonction principale
const mainFunction = async () => {
  const item = await getItem(getItemId);
  createKanap(item);
  LocalStorage(item);
  quantityAffichagePanier(dataProduct);
};

/****************************************/

//récupération de l'id du produit séléctionné sur la page d'accueil
const getItemId = new URL(location.href).searchParams.get('id');

//création de la variable dataProduct pour l'appel de la fonction loadcart
let dataProduct = loadcart();

//appel de la fonction pricipale
mainFunction();
