import { loadcart } from './modules.js';
let dataProduct = loadcart();

/****************************************/

const mainFunction = () => {
  let testform = document.querySelector('.cart__order');
  let formTest = document.querySelector('.cart__order__form');

  let votrePanier = document.querySelector('#cartAndFormContainer h1');

  if (dataProduct == 0) {
    testform.removeChild(formTest);
    votrePanier.innerHTML = 'Votre panier est vide';
  } else {
    createHtml();
    deleteItemProduct();
    changeQuantity();
    quantityAndTotalPrice();
    getDataForm();
  }
};

/****************************************/
const createHtml = () => {
  for (let data of dataProduct) {
    let section_cart__items = document.querySelector('#cart__items');

    //***Création constantes***//
    let article_cart__item = document.createElement('article');

    article_cart__item.id = data.idProduct;

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
    input.value = data.quantityProduct;
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

    img.src = data.imgProduct;
    h2_name_description.innerText = data.nameProduct;
    p_color_description.innerText = data.colorProduct;
    p_price_description.innerText = data.priceProduct + ' €';
    p_quantity.innerText = 'Qté : ';

    p_deleteItem.innerText = 'Supprimer';

    /****************************************/
  }
};

/****************************************/
//Supprimer Produit
const deleteItemProduct = () => {
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

if (dataProduct === null || dataProduct == 0) {
  localStorage.removeItem('produits');
}

// /****************************************/
// Incrémenter ou décrémenter produit dans le panier
const changeQuantity = () => {
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

// /****************************************/

//Total de la quantité et du prix
let Quantity = document.querySelector('#totalQuantity');
let PrixTotal = document.querySelector('#totalPrice');

let quantityAndTotalPrice = () => {
  const totalQuantity = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantityProduct),
    0
  );

  const totalPrice = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue +
      parseInt(currentValue.quantityProduct * currentValue.priceProduct),
    0
  );
  Quantity.innerText = totalQuantity;
  PrixTotal.innerText = totalPrice;
};

// /****************************************/
import { quantityAffichagePanier } from './modules.js';
quantityAffichagePanier();

// /****************************************/

// function errormessage(contact) {
//   let formIsValid = true;

//   let divtest = document.querySelectorAll('.cart__order__form__question p');
//   for (let testt of divtest) {
//     testt.innerHTML = '';
//   }

//   let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg');
//   let lastNameErrorMsg = document.querySelector('#lastNameErrorMsg');
//   let addressErrorMsg = document.querySelector('#addressErrorMsg');
//   let cityErrorMsg = document.querySelector('#cityErrorMsg');
//   let emailErrorMsg = document.querySelector('#emailErrorMsg');

//   if (!/^[a-zA-Z-]{3,20}$/.test(contact.firstName)) {
//     formIsValid = false;
//     firstNameErrorMsg.innerHTML = 'Le prénom est invalide';
//   }
//   if (!/^[a-zA-Z-]{3,20}$/.test(contact.lastName)) {
//     formIsValid = false;
//     lastNameErrorMsg.innerHTML = 'Le nom est invalide';
//   }
//   if (!/^[a-zA-Z-0-9]{3,50}$/.test(contact.address)) {
//     // addressErrorMsg.innerHTML = '';
//     formIsValid = false;
//     addressErrorMsg.innerHTML = "L'adresse est invalide";
//   }
//   if (!/^[a-zA-Z-0-9]{3,50}$/.test(contact.city)) {
//     // cityErrorMsg.innerHTML = '';
//     formIsValid = false;
//     cityErrorMsg.innerHTML = 'La ville est invalide';
//   }
//   if (
//     !/^^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(
//       contact.email
//     )
//   ) {
//     // emailErrorMsg.innerHTML = '';
//     formIsValid = false;
//     emailErrorMsg.innerHTML = "L'email est invalide";
//   }
//   return formIsValid;
// }

// /****************************************/
let firstNameTest = document.querySelector('#firstName');
let lastNameTest = document.querySelector('#lastName');
let addressTest = document.querySelector('#address');
let cityTest = document.querySelector('#city');
let emailTest = document.querySelector('#email');
let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg');
let lastNameErrorMsg = document.querySelector('#lastNameErrorMsg');
let addressErrorMsg = document.querySelector('#addressErrorMsg');
let cityErrorMsg = document.querySelector('#cityErrorMsg');
let emailErrorMsg = document.querySelector('#emailErrorMsg');
// /****************************************/

function errormessage() {
  let formIsValid = true;

  let validMessage = document.querySelectorAll(
    '.cart__order__form__question p'
  );
  for (let message of validMessage) {
    message.innerHTML = '';
  }

  if (!/^[a-zA-Z-]{3,20}$/.test(firstNameTest.value)) {
    formIsValid = false;
    firstNameErrorMsg.innerHTML = 'Le prénom est invalide';
  }
  if (!/^[a-zA-Z-]{3,20}$/.test(lastNameTest.value)) {
    formIsValid = false;
    lastNameErrorMsg.innerHTML = 'Le nom est invalide';
  }

  if (!/^[a-zA-Z-0-9]{3,50}$/.test(addressTest.value)) {
    formIsValid = false;
    addressErrorMsg.innerHTML = "L'adresse est invalide";
  }

  if (!/^[a-zA-Z-0-9]{3,50}$/.test(cityTest.value)) {
    // cityErrorMsg.innerHTML = '';
    formIsValid = false;
    cityErrorMsg.innerHTML = 'La ville est invalide';
  }

  if (
    !/^^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(
      emailTest.value
    )
  ) {
    // emailErrorMsg.innerHTML = '';
    formIsValid = false;
    emailErrorMsg.innerHTML = "L'email est invalide";
  }

  return formIsValid;
}
// /****************************************/
//Pour la séléction de chaque input pour msg erreur
let inputTest = document.querySelectorAll('.cart__order__form__question input');

for (let inputs of inputTest) {
  inputs.addEventListener('input', errormessage);
}
// /****************************************/

// /****************************************/

const getDataForm = () => {
  let btnCommander = document.querySelector('#order');
  btnCommander.addEventListener('click', (e) => {
    e.preventDefault();
    //----------

    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    };

    console.log(contact);

    //----------

    let products = [];
    for (let idProduct of dataProduct) {
      products.push(idProduct.idProduct);
    }
    console.log(products);

    //----------
    // errormessage();
    //----------

    if (dataProduct >= [1] && errormessage()) {
      //----------

      //----------

      localStorage.setItem('contact', JSON.stringify(contact));
      localStorage.setItem('products', JSON.stringify(products));
      // localStorage.removeItem('produits');
      //----------
      fetch('http://localhost:3000/api/products/order', {
        method: 'POST',
        body: JSON.stringify({ contact, products }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          window.location.href = './confirmation.html?orderId=' + data.orderId;
        })
        .catch((error) => alert("Erreur lors de l'envoi du formulaire"));
    }
    if (dataProduct == 0 && !errormessage()) {
      alert('pas de produit et form non rempli');
    }
    if (dataProduct == 0 && errormessage()) {
      alert('manque produit');
    }
    if (dataProduct >= [1] && !errormessage()) {
      alert('bien remplir formulaire');
    }
  });
};

// /****************************************/

mainFunction();
