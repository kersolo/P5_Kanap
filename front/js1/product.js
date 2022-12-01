////import de la fonction permettant la récupération des valeurs du localStorage
import { loadcart } from './modules.js';
import { getItem } from './apimodule.js';

import { quantityAffichagePanier } from './modules.js';

//Fonction principale
const main = async () => {
  dataProduct = await loadcart();
  const item = await getItem(getItemId);
  createKanap(item);
  LocalStorage(item);
  quantityAffichagePanier(dataProduct);
};

/****************************************/
//Récupère l'id du produit

/****************************************/
//Récupère les données du produit

/****************************************/
//Création des cards
const createKanap = (item) => {
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

/****************************************/
/****************************************/

//Ajoute les valeurs dans le localStorage

/****************************************/
const addData = async (product) => {
  let foundProduct = dataProduct.find(
    (p) =>
      p.idProduct == product.idProduct && p.colorProduct == product.colorProduct
  );
  if (foundProduct != undefined) {
    foundProduct.quantityProduct += product.quantityProduct;
  } else {
    dataProduct.push(product);
  }
  localStorage.setItem('produits', JSON.stringify(dataProduct));
};
/****************************************/
//Ajout au localstorage
const LocalStorage = (item) => {
  const btnAddToCart = document.querySelector('#addToCart');
  const colorKanap = document.querySelector('#colors');
  const quantityKanap = document.querySelector('#quantity');

  btnAddToCart.addEventListener('click', () => {
    const choiceColor = colorKanap.value;
    const choiceQuantity = quantityKanap.value;

    let itemProductss = {
      idProduct: item._id,
      imgProduct: item.imageUrl,
      nameProduct: item.name,
      colorProduct: choiceColor,
      // priceProduct: item.price,
      quantityProduct: parseInt(choiceQuantity),
    };

    if (!itemProductss.colorProduct && !itemProductss.quantityProduct) {
      alert('Veuillez choisir la couleur et la quantité souhaité');
    } else if (!itemProductss.colorProduct) {
      alert('Veuillez choisir la couleur souhaitée');
    } else if (
      !itemProductss.quantityProduct ||
      itemProductss.quantityProduct > 100
    ) {
      alert('la quantité doit être comprise entre 1 et 100');
    } else {
      addData(itemProductss);
      if (
        window.confirm(`${itemProductss.nameProduct} a bien été ajouté au panier
      Souhaitez-vous rejoindre le panier ?`)
      ) {
        window.location.href = 'cart.html';
      } else {
        window.location.href = 'index.html';
      }
    }
  });
};

/****************************************/
const getItemId = new URL(location.href).searchParams.get('id');
let dataProduct;

main();
