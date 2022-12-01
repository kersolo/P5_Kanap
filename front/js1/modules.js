//Récupère les valeurs du localStorage

export let loadcart = () => {
  let dataProduct = localStorage.getItem('produits');
  if (dataProduct == null) {
    return [];
  } else {
    return JSON.parse(dataProduct);
  }
};
import { getItem } from './apimodule.js';

/****************************************/

/****************************************/
// export let loadcart2 = async () => {
//   let dataProduct = JSON.parse(localStorage.getItem('produits'));
//   if (dataProduct == null) {
//     return [];
//   } else {
//     for (const data of dataProduct) {
//       const product = await getItem(data.idProduct);
//       data.priceProduct = product.price;
//     }
//     console.log(dataProduct[0]);
//     console.log(dataProduct[0].priceProduct);
//     return dataProduct;
//   }
// };
/****************************************/
// Fonction permettant affichage quantité après panier dans menu nav
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
