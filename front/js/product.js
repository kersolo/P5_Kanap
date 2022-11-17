//Fonction principale
const main = async () => {
  const item = await getItem(getItemId);
  createKanap(item);
  LocalStorage(item);
};

/****************************************/
//Récupère l'id du produit
const getItemId = new URL(location.href).searchParams.get('id');

/****************************************/
//Récupère les données du produit
const getItem = async (getItemId) => {
  const response = await fetch(
    'http://localhost:3000/api/products/' + getItemId
  );
  const products = await response.json();

  return products;
};

/****************************************/
//Création des cards
const createKanap = (item) => {
  let item2 = document.querySelector('.item__img');
  let title = document.querySelector('#title');

  let price = document.querySelector('#price');
  let img = document.createElement('img');
  let p = document.querySelector('#description');
  let colorsId = document.querySelector('#colors');

  item2.appendChild(img);

  title.innerHTML = item.name;
  price.innerHTML = item.price;
  img.src = item.imageUrl;
  p.innerHTML = item.description;

  //boucle pour le choix de la couleur
  for (const color of item.colors) {
    let option = document.createElement('option');

    option.innerHTML = color;
    colorsId.appendChild(option);
  }
};

/****************************************/
//Ajoute un emplacement [clé, valeur] dans le localStorage
// const setData = (itemProductss) => {
//   localStorage.setItem('produits', JSON.stringify(itemProductss));
//   console.log(localStorage.setItem('produits', JSON.stringify(itemProductss)));
// };
import { loadcart } from './modules.js';
//Ajoute les valeurs dans le localStorage
const addData = (product) => {
  let dataProduct = loadcart();
  let foundProduct = dataProduct.find(
    (p) =>
      p.idDuProduit == product.idDuProduit &&
      p.couleurDuProduit == product.couleurDuProduit
  );
  if (foundProduct != undefined) {
    foundProduct.nombreDeProduit += product.nombreDeProduit;
  } else {
    dataProduct.push(product);
  }
  localStorage.setItem('produits', JSON.stringify(dataProduct));
  // setData(dataProduct);
  // popupConfirmation(dataProduct);
};
/****************************************/
//Ajout au localstorage
const LocalStorage = (item) => {
  const btnAjouterAuPanier = document.querySelector('#addToCart');
  const couleurKanap = document.querySelector('#colors');
  const quantiteKanap = document.querySelector('#quantity');

  btnAjouterAuPanier.addEventListener('click', () => {
    const choixColor = couleurKanap.value;
    const choixQantite = quantiteKanap.value;

    let itemProductss = {
      idDuProduit: item._id,
      imageDuProduit: item.imageUrl,
      nomDuProduit: item.name,
      couleurDuProduit: choixColor,
      prixDuProduit: item.price,
      nombreDeProduit: parseInt(choixQantite),
    };

    if (!itemProductss.couleurDuProduit && !itemProductss.nombreDeProduit) {
      alert('Veuillez choisir la couleur et la quantité souhaité');
    } else if (!itemProductss.couleurDuProduit) {
      alert('Veuillez choisir la couleur souhaitée');
    } else if (!itemProductss.nombreDeProduit) {
      alert('Veuillez choisir la quantité souhaitée');
    } else {
      addData(itemProductss);
      if (
        window.confirm(`${itemProductss.nomDuProduit} a bien été ajouté au panier
      Souhaitez-vous rejoindre le panier ?`)
      ) {
        window.location.href = 'cart.html';
      } else {
        window.location.href = 'index.html';
      }
    }
  });
};

//-------------------

//-------------------

//Popup de confirmation
// const popupConfirmation = (itemProductss) => {
//   if (
//     window.confirm(`${itemProductss.nomDuProduit} a bien été ajouté au panier
// Souhaitez-vous rejoindre le panier ?`)
//   ) {
//     window.location.href = 'cart.html';
//   } else {
//     window.location.href = 'index.html';
//   }
// };

/****************************************/
let dataProduct = loadcart();

import { quantityAffichagePanier } from './modules.js';
quantityAffichagePanier();

// let quantityAffichagePanier = () => {
//   const totalQuantity = dataProduct.reduce(
//     (previousValue, currentValue) =>
//       previousValue + parseInt(currentValue.nombreDeProduit),
//     0
//   );

//   let nav = document.querySelector('nav > ul > a:nth-child(2) li');
//   let span = document.createElement('span');
//   nav.appendChild(span);
//   span.innerHTML = ' ' + '(' + totalQuantity + ')';
// };
// quantityAffichagePanier();
/****************************************/

main();
