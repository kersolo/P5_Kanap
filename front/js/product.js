////import de la fonction permettant la récupération des valeurs du localStorage
import { loadcart } from './localStorage.js';
import { quantityAffichagePanier } from './createItems.js';
import { getItem } from './apiGET.js';
import { createKanap } from './createItems.js';
import { LocalStorage } from './localStorage.js';

//Fonction principale
const main = async () => {
  dataProduct = await loadcart();
  const item = await getItem(getItemId);
  createKanap(item);
  LocalStorage(item);
  quantityAffichagePanier(dataProduct);
};

/****************************************/
const getItemId = new URL(location.href).searchParams.get('id');
let dataProduct;

main();
