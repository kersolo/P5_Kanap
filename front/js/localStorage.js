/****************************************/
//Récupère les valeurs du localStorage

export let loadcart = () => {
  let dataProduct = JSON.parse(localStorage.getItem('produits'));
  if (dataProduct == null) {
    return [];
  } else {
    return dataProduct;
  }
};
/****************************************/
//Ajout au localstorage
export const addData = async (product) => {
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
export const LocalStorage = (item) => {
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
//Supprimer Produit
export const deleteItemProduct = () => {
  const deleteButton = document.querySelectorAll('.deleteItem');
  for (let i = 0; i < dataProduct.length; i++) {
    deleteButton[i].addEventListener('click', () => {
      if (confirm('Souhaitez-vous supprimer cet article ?')) {
        let supprimerId = dataProduct[i].idProduct;
        let supprimercolor = dataProduct[i].colorProduct;

        dataProduct = dataProduct.filter(
          (el) =>
            el.idProduct != supprimerId || el.colorProduct != supprimercolor
        );

        localStorage.setItem('produits', JSON.stringify(dataProduct));
        window.location.href = 'cart.html';
      }
    });
  }
};
/****************************************/
// Incrémenter ou décrémenter produit dans le panier
export const changeQuantity = () => {
  const inputs = document.querySelectorAll(
    '.cart__item__content__settings__quantity input'
  );
  for (let m = 0; m < inputs.length; m++) {
    inputs[m].addEventListener('input', () => {
      dataProduct[m].quantityProduct = inputs[m].value;

      localStorage.setItem('produits', JSON.stringify(dataProduct));

      window.location.href = 'cart.html';
    });
  }
};
/****************************************/
export let quantityAndTotalPrice = async (cartwithprice) => {
  let Quantity = document.querySelector('#totalQuantity');
  let PrixTotal = document.querySelector('#totalPrice');
  const totalQuantity = cartwithprice.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantityProduct),
    0
  );
  const totalPrice = cartwithprice.reduce(
    (previousValue, currentValue) =>
      previousValue +
      parseInt(currentValue.quantityProduct * currentValue.priceProduct),
    0
  );
  Quantity.innerText = totalQuantity;
  PrixTotal.innerText = totalPrice;
};
/****************************************/
/****************************************/
let dataProduct = loadcart();
