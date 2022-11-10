const mainFunction = () => {
  loadcart();
  createHtml();
  deleteItemProduct();
  // changeQuantity(dataProduct);
};

let loadcart = () => {
  let dataProduct = localStorage.getItem('produits');
  if (dataProduct == null) {
    return [];
  } else {
    return JSON.parse(dataProduct);
  }
};
let dataProduct = loadcart();

/****************************************/
const createHtml = () => {
  for (let data of dataProduct) {
    let section_cart__items = document.querySelector('#cart__items');

    //***Création constantes***//
    let article_cart__item = document.createElement('article');

    // article_cart__item.id = `${data.idDuProduit}`;
    article_cart__item.id = data.idDuProduit;

    let div_cart__item__img = document.createElement('div');
    let img = document.createElement('img');
    let div_cart__item__content = document.createElement('div');
    let div_cart__item__content__description = document.createElement('div');
    let h2_name_description = document.createElement('h2');
    let p_color_description = document.createElement('p');
    let p_price_description = document.createElement('p');
    let div_cart__item__content__settings = document.createElement('div');
    let div_cart__item__content__settings__quantity =
      document.createElement('div');
    let p_quantity = document.createElement('p');
    let input = document.createElement('input');
    input.type = 'number';
    input.class = 'itemQuantity';
    input.name = 'itemQuantity';
    input.min = 1;
    input.max = 100;
    input.value = data.nombreDeProduit;
    let div_cart__item__content__settings__delete =
      document.createElement('div');
    let p_deleteItem = document.createElement('p');
    //***Création constantes***//

    //***Ajout Class***//
    article_cart__item.classList.add('cart__item');
    div_cart__item__img.classList.add('cart__item__img');
    div_cart__item__content.classList.add('cart__item__content');
    div_cart__item__content__description.classList.add(
      'cart__item__content__description'
    );
    div_cart__item__content__settings.classList.add(
      'cart__item__content__settings'
    );
    div_cart__item__content__settings__quantity.classList.add(
      'cart__item__content__settings__quantity'
    );
    input.classList.add('.itemQuantity');
    div_cart__item__content__settings__delete.classList.add(
      'cart__item__content__settings__delete'
    );
    p_deleteItem.classList.add('deleteItem');
    //***Ajout Class***//

    //***AppendChild***//
    section_cart__items.appendChild(article_cart__item);
    article_cart__item.appendChild(div_cart__item__img);
    div_cart__item__img.appendChild(img);
    article_cart__item.appendChild(div_cart__item__content);
    div_cart__item__content.appendChild(div_cart__item__content__description);
    div_cart__item__content__description.appendChild(h2_name_description);
    div_cart__item__content__description.appendChild(p_color_description);
    div_cart__item__content__description.appendChild(p_price_description);
    div_cart__item__content.appendChild(div_cart__item__content__settings);
    div_cart__item__content__settings.appendChild(
      div_cart__item__content__settings__quantity
    );
    div_cart__item__content__settings__quantity.appendChild(p_quantity);
    div_cart__item__content__settings__quantity.appendChild(input);
    div_cart__item__content__settings.appendChild(
      div_cart__item__content__settings__delete
    );
    div_cart__item__content__settings__delete.appendChild(p_deleteItem);
    //***AppendChild***//

    // console.log(section_cart__items);

    img.src = data.imageDuProduit;
    h2_name_description.innerText = data.nomDuProduit;
    p_color_description.innerText = data.couleurDuProduit;
    p_price_description.innerText = data.prixDuProduit + ' €';
    p_quantity.innerText = 'Qté : ';
    // input.innerText = data.nombreDeProduit;
    p_deleteItem.innerText = 'Supprimer';

    // /****************************************/

    input.addEventListener('input', function () {
      data.nombreDeProduit = input.value;

      localStorage.setItem('produits', JSON.stringify(dataProduct));

      window.location.href = 'cart.html';
    });

    /****************************************/

    /****************************************/

    //   input.addEventListener('input', () => {
    //     const changeQuantity = input.value;
    //     console.log(changeQuantity);
    //     let foundProduct = dataProduct.find(
    //       (p) => p.idDuProduit == data.idDuProduit
    //     );
    //     console.log(foundProduct);
    //     if (foundProduct != undefined) {
    //       foundProduct.nombreDeProduit == data.nombreDeProduit++;
    //     } else {
    //       foundProduct.nombreDeProduit == data.nombreDeProduit--;
    //     }

    //     localStorage.setItem('produits', JSON.stringify(dataProduct));

    //   alert('Cette élement a bien été supprimer du panier');
    //   window.location.href = 'cart.html';
    // });
    /****************************************/
    /****************************************/
  }
};
/****************************************/

/****************************************/

/****************************************/
//Supprimer Produit
const deleteItemProduct = () => {
  const deleteButton = document.querySelectorAll('.deleteItem');

  for (let i = 0; i < dataProduct.length; i++) {
    deleteButton[i].addEventListener('click', () => {
      let supprimerId = dataProduct[i].idDuProduit;
      let supprimercolor = dataProduct[i].couleurDuProduit;

      dataProduct = dataProduct.filter(
        (el) =>
          el.idDuProduit != supprimerId || el.couleurDuProduit != supprimercolor
      );

      localStorage.setItem('produits', JSON.stringify(dataProduct));

      alert('Cette élement a bien été supprimer du panier');

      window.location.href = 'cart.html';
    });
  }
};

let produitPanier = [];
if (dataProduct === null || dataProduct == 0) {
  localStorage.removeItem('produits');
}

// /****************************************/

// /****************************************/
// /****************************************/

// /****************************************/
// Fonction permettant de changer de quantité dans le panier
// function changeQuantity(dataProduct, nombreDeProduit) {
//   let input = document.querySelectorAll('.itemQuantity')

//   input.addEventListener('click', ()=>{
//     let
//   })

// }

// function changeQuantity() {
//   let input = document.querySelectorAll('.itemQuantity');

//   input.addEventListener('click', () => {
//     let foundProduct = dataProduct.find(
//       (p) => p.idDuProduit == dataProduct.idDuProduit
//     );
//     if (foundProduct != undefined) {
//       foundProduct.nombreDeProduit += nombreDeProduit;
//     }

//     localStorage.setItem('produits', JSON.stringify(dataProduct));

//     alert('Cette élement a bien été supprimer du panier');

//     window.location.href = 'cart.html';
//   });
// }
// changeQuantity();

// const changeQuantity = (dataProduct) => {
//   const onVerra = document.querySelectorAll('.itemQuantity');
//   const verraOn = onVerra.length;
//   for (let v = 0; v < verraOn; v++) {
//     onVerra[v].addEventListener('input', () => {
//       let foundProduct = dataProduct[v].find(
//         (p) => p.idDuProduit == dataProduct[v].idDuProduit
//       );
//       if (foundProduct != undefined) {
//         foundProduct.input.value += input.value;
//       }

//       localStorage.setItem('produits', JSON.stringify(dataProduct));

//       alert('Cette élement a bien été supprimer du panier');

//       window.location.href = 'cart.html';
//     });
//   }
// };

// changeQuantity(product);

// // -------------------------------FIN BUTTON SUPPR-------------------------------//
// // ***************//

// // -------------------------------Fin AFFICHER LA QUANTITE ET LE PRIX-------------------------------//
// let Quantity = document.querySelector('#totalQuantity');
// let PrixTotal = document.querySelector('#totalPrice');

// let quantityAndTotalPrice = () => {
//   const totalQuantity = dataProduct.reduce(
//     (previousValue, currentValue) =>
//       previousValue + parseInt(currentValue.nombreDeProduit),
//     0
//   );
//   const totalPrice = dataProduct.reduce(
//     (previousValue, currentValue) =>
//       previousValue + parseInt(currentValue.prixDuProduit),
//     0
//   );
//   Quantity.innerText = totalQuantity;
//   PrixTotal.innerText = totalPrice;
// };

// -------------------------------Fin AFFICHER LA QUANTITE ET LE PRIX-------------------------------//

// quantityAndTotalPrice();

mainFunction();
