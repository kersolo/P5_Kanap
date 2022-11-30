//import de la fonction permettant l'affichage de la quantité du panier dans menu nav
import { quantityAffichagePanier } from './modules.js';
////import de la fonction permettant la récupération des valeurs du localStorage
import { loadcart } from './modules.js';

//Déclaration de la variable dataProduct
//import fonction
import { createHtml } from './moduleCREATE.js';

/****************************************/

/****************************************/

//Fonction principale
const mainFunction = () => {
  let form_cart__order = document.querySelector('.cart__order');
  let form_cart__order__form = document.querySelector('.cart__order__form');

  let votrePanier = document.querySelector('#cartAndFormContainer h1');

  if (dataProduct == 0) {
    form_cart__order.removeChild(form_cart__order__form);
    votrePanier.innerHTML = 'Votre panier est vide';
  } else {
    //création DOM panier

    createHtml();
    deleteItemProduct();
    changeQuantity();
    quantityAndTotalPrice();
    getDataForm();
    quantityAffichagePanier();
  }
};

/****************************************/

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

// /****************************************/

// /****************************************/
function firstnameTest() {
  if (!/^[a-zA-Z-]{3,20}$/.test(firstName.value)) {
    formIsValid = false;
    firstNameErrorMsg.innerHTML = 'Le prénom est invalide';
  } else {
    formIsValid = true;
    firstNameErrorMsg.innerHTML = '';
  }
}
function lastNameTest() {
  if (!/^[a-zA-Z-]{3,20}$/.test(lastName.value)) {
    formIsValid = false;
    lastNameErrorMsg.innerHTML = 'Le nom est invalide';
  } else {
    formIsValid = true;
    lastNameErrorMsg.innerHTML = '';
  }
}
function addressTest() {
  if (!/^[a-zA-Z-0-9 - ]{3,50}$/.test(address.value)) {
    formIsValid = false;
    addressErrorMsg.innerHTML = "L'adresse est invalide";
  } else {
    formIsValid = true;
    addressErrorMsg.innerHTML = '';
  }
}
function cityTest() {
  if (!/^[a-zA-Z-0-9 - ]{3,50}$/.test(city.value)) {
    // cityErrorMsg.innerHTML = '';
    formIsValid = false;
    cityErrorMsg.innerHTML = 'La ville est invalide';
  } else {
    formIsValid = true;
    cityErrorMsg.innerHTML = '';
  }
}
function emailTest() {
  if (
    !/^^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(
      email.value
    )
  ) {
    formIsValid = false;
    emailErrorMsg.innerHTML = "L'email est invalide";
  } else {
    formIsValid = true;
    emailErrorMsg.innerHTML = '';
  }
}

// // /****************************************/

function errormessage() {
  // let erromsg = document.querySelectorAll('.cart__order__form__question p');
  // for (const message of erromsg) {
  //   message.innerHTML = '';
  // }
  firstnameTest();
  lastNameTest();
  addressTest();
  cityTest();
  emailTest();

  return formIsValid;
}

// /****************************************/

//Fonction qui envoie la requête post à l'API
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

    //----------

    //----------

    let products = [];
    for (let idProduct of dataProduct) {
      products.push(idProduct.idProduct);
    }

    //----------

    if (dataProduct >= [1] && errormessage()) {
      //----------

      localStorage.setItem('contact', JSON.stringify(contact));
      localStorage.setItem('products', JSON.stringify(products));
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
          alert('top');
          // window.location.href = './confirmation.html?orderId=' + data.orderId;
        })
        .catch((error) => alert("Erreur lors de l'envoi du formulaire"));
    } else {
      alert('Veuillez bien remplir le formulaire');
    }
  });
};

// /****************************************/

let dataProduct = loadcart();

let Quantity = document.querySelector('#totalQuantity');
let PrixTotal = document.querySelector('#totalPrice');
//Déclaration des variables pour les messages d'erreur des inputs du formulaire
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let address = document.querySelector('#address');
let city = document.querySelector('#city');
let email = document.querySelector('#email');
let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg');
let lastNameErrorMsg = document.querySelector('#lastNameErrorMsg');
let addressErrorMsg = document.querySelector('#addressErrorMsg');
let cityErrorMsg = document.querySelector('#cityErrorMsg');
let emailErrorMsg = document.querySelector('#emailErrorMsg');
let inputTest = document.querySelectorAll('.cart__order__form__question input');
if (dataProduct === null || dataProduct == 0) {
  localStorage.removeItem('produits');
}

let formIsValid = true;

firstName.addEventListener('input', firstnameTest);
lastName.addEventListener('input', lastNameTest);
address.addEventListener('input', addressTest);
city.addEventListener('input', cityTest);
email.addEventListener('input', emailTest);

mainFunction();
