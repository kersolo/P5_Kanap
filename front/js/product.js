const getItemId = () => {
  return new URL(location.href).searchParams.get('id');
};
/****************************************/

const getItem = async (itemId) => {
  // const response = await fetch(`http://localhost:3000/api/products/${itemId}`);
  const response = await fetch('http://localhost:3000/api/products/' + itemId);
  const products = await response.json();
  console.log(products);
  return products;
};
/****************************************/

const mainFunction = async () => {
  //--------
  dataLocalStorage = JSON.parse(localStorage.getItem('produit'));

  //s'il n'y a pas déja des produits d'enregistré dans le local storage
  if (!dataLocalStorage) {
    dataLocalStorage = [];
  }
  //--------
  const itemId = getItemId();
  const item = await getItem(itemId);
  showItems(item);

  const btnAjouterAuPanier = document.querySelector('button');

  const couleurKanap = document.querySelector('#colors');
  const quantiteKanap = document.querySelector('#quantity');

  btnAjouterAuPanier.addEventListener('click', () => {
    const choixColor = couleurKanap.value;
    const choixQantite = quantiteKanap.value;

    const itemProductss = {
      idDuProduit: item._id,
      imageDuProduit: item.imageUrl,
      nomDuProduit: item.name,
      couleurDuProduit: choixColor,
      prixDuProduit: item.price,
      nombreDeProduit: choixQantite,
    };

    if (dataLocalStorage) {
      ajoutProduitLocalStorage(itemProductss);
      popupConfirmation(itemProductss);
    } else {
      dataLocalStorage = [];
      ajoutProduitLocalStorage(itemProductss);
      popupConfirmation(itemProductss);
    }

    // ajoutProduitLocalStorage(itemProductss);
    // popupConfirmation(itemProductss);
  });
};
/****************************************/

const ajoutProduitLocalStorage = (itemProductss) => {
  let product = dataLocalStorage.find(
    (p) =>
      p.idDuProduit == itemProductss.idDuProduit &&
      p.couleurDuProduit == itemProductss.couleurDuProduit
  );

  if (product != undefined) {
    let ajoutDeQuantite =
      parseInt(itemProductss.nombreDeProduit) +
      parseInt(product.nombreDeProduit);
    product.nombreDeProduit = ajoutDeQuantite;
  } else {
    itemProductss.nombreDeProduit = itemProductss.nombreDeProduit;
    dataLocalStorage.push(itemProductss);
  }

  localStorage.setItem('produit', JSON.stringify(dataLocalStorage));
};
/****************************************/

//fonciton ajouter un produit sélectionné dans le local storage
// const ajoutProduitLocalStorage = (itemProductss) => {
//   for (i = 0; i < dataLocalStorage.length; i++) {
//     if ("produit n'existe pas") {
//       ("l'ajouer");
//     } else {
//       ('augmenter juste la quantité');
//     }
//   }

//   dataLocalStorage.push(itemProductss);
//   localStorage.setItem('produit', JSON.stringify(dataLocalStorage));
// };

/****************************************/
const popupConfirmation = (itemProductss) => {
  if (
    window.confirm(`${itemProductss.nomDuProduit} a bien été ajouté au panier
Souhaitez-vous rejoindre le panier ?`)
  ) {
    window.location.href = 'cart.html';
  } else {
    window.location.href = 'index.html';
  }
};
/****************************************/

/****************************************/
const showItems = (item) => {
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

  for (const color of item.colors) {
    let option = document.createElement('option');
    // console.log(option);
    option.innerHTML = color;
    colorsId.appendChild(option);
  }
};
/****************************************/

/****************************************/
let dataLocalStorage;
mainFunction();

/****************************************/
