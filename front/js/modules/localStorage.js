/****************************************/
//récupère les valeurs des produits enregistré dans le localStorage
export let loadcart = () => {
  let dataProduct = JSON.parse(localStorage.getItem('produits'));
  if (dataProduct == null) {
    return [];
  } else {
    return dataProduct;
  }
};
/****************************************/
//ajout d'un produit au localStorage si le produit de même id et même couleur n'a pas déja été ajouté sinon il est incrémenté
export const addData = async (product) => {
  //la méthode find renvoie la valeur du premier élément trouvé dans le tableau
  let foundProduct = dataProduct.find(
    (el) =>
      el.idProduct == product.idProduct &&
      el.colorProduct == product.colorProduct
  );
  if (foundProduct != undefined) {
    foundProduct.quantityProduct += product.quantityProduct;
  } else {
    dataProduct.push(product);
  }
  //enregistre dans le localStorage de la clé produits
  localStorage.setItem('produits', JSON.stringify(dataProduct));
};
/****************************************/
//création de l'objet avec les données du produit pour ajout au tableau dans le localStorage et à la page panier
export const LocalStorage = (item) => {
  //récupération d'éléments du DOM
  const btnAddToCart = document.querySelector('#addToCart');
  const colorKanap = document.querySelector('#colors');
  const quantityKanap = document.querySelector('#quantity');

  btnAddToCart.addEventListener('click', () => {
    //récupération des valeurs de couleur et quantité
    const choiceColor = colorKanap.value;
    const choiceQuantity = quantityKanap.value;
    //création de l'objet itemProductss avec les informations a envoyer dans le localStorage
    let itemProductss = {
      idProduct: item._id,
      imgProduct: item.imageUrl,
      nameProduct: item.name,
      colorProduct: choiceColor,
      quantityProduct: parseInt(choiceQuantity),
    };
    //condition pour l'ajout du produit au panier
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
      //Appel de la fonction addData
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
//suppression produit
export const deleteItemProduct = () => {
  const deleteButton = document.querySelectorAll('.deleteItem');
  //boucle pour récupérer un élément du tableau dataProduct
  for (let i = 0; i < dataProduct.length; i++) {
    deleteButton[i].addEventListener('click', () => {
      if (confirm('Souhaitez-vous supprimer cet article ?')) {
        //création des variables pour récupérer l'id et la couleur d'un élémént du tableau
        let supprimerId = dataProduct[i].idProduct;
        let supprimercolor = dataProduct[i].colorProduct;
        //méthode filter qui vérifie les éléments et gardent seulement ceux qui ne correspondent pas
        dataProduct = dataProduct.filter(
          (el) =>
            el.idProduct != supprimerId || el.colorProduct != supprimercolor
        );
        //enregistre dans le localStorage de la clé produits
        localStorage.setItem('produits', JSON.stringify(dataProduct));
        //recharge la page panier
        window.location.href = 'cart.html';
      }
    });
  }
};

/****************************************/
// incrémenter ou décrémenter produit dans le panier
export const changeQuantity = () => {
  const inputs = document.querySelectorAll(
    '.cart__item__content__settings__quantity input'
  );
  //boucle qui récupère les inputs des produits présent dans le tableau
  for (let m = 0; m < inputs.length; m++) {
    inputs[m].addEventListener('input', () => {
      //récupère la valeur de l'input séléctionné
      dataProduct[m].quantityProduct = parseInt(inputs[m].value);
      //enregistre dans le localStorage de la clé produits
      localStorage.setItem('produits', JSON.stringify(dataProduct));
      //recharge la page panier
      window.location.href = 'cart.html';
    });
  }
};
/****************************************/
// calcul total de la quantité et du prix
export let quantityAndTotalPrice = async (cartwithprice) => {
  //récupération d'éléments du DOM
  let totalQuantity = document.querySelector('#totalQuantity');
  let totalPrice = document.querySelector('#totalPrice');
  //méthode reduce qui calcul toutes les quantités des produits présent dans le tableau
  const calculQuantity = cartwithprice.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantityProduct),
    0
  );
  //méthode reduce qui calcul les prix en fonction de la quantité de chaque produits présent dans le tableau
  const calculPrice = cartwithprice.reduce(
    (previousValue, currentValue) =>
      previousValue +
      parseInt(currentValue.quantityProduct * currentValue.priceProduct),
    0
  );
  //Affichage des éléments totalQuantity et totalPrice
  totalQuantity.innerText = calculQuantity;
  totalPrice.innerText = calculPrice;
};

/****************************************/
//création de la variable dataProduct pour l'appel de la fonction loadcart
let dataProduct = loadcart();
