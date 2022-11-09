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
const setData = (itemProductss) => {
  localStorage.setItem('produits', JSON.stringify(itemProductss));
  console.log(localStorage.setItem('produits', JSON.stringify(itemProductss)));
};
//Renvoie les valeurs dans le localStorage
const getData = () => {
  let dataProduct = localStorage.getItem('produits');
  if (dataProduct == null) {
    return [];
  } else {
    return JSON.parse(dataProduct);
  }
};
//Ajoute les valeurs dans le localStorage
const addData = (product) => {
  let dataProduct = getData();
  let foundProduct = dataProduct.find(
    (p) =>
      p.idDuProduit == product.idDuProduit &&
      p.couleurDuProduit == product.couleurDuProduit
  );
  if (foundProduct != undefined) {
    foundProduct.nombreDeProduit++;
  } else {
    product.nombreDeProduit = 1;
    dataProduct.push(product);
  }
  setData(dataProduct);
  popupConfirmation(dataProduct);
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
      nombreDeProduit: choixQantite,
    };
    addData(itemProductss);
  });
};
//Popup de confirmation
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

main();
