import { loadcart } from './localStorage.js';
let dataProduct = loadcart();

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

//Fonction qui envoie la requête post à l'API
export const getDataForm = () => {
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
          window.location.href = './confirmation.html?orderId=' + data.orderId;
        })
        .catch((error) => alert("Erreur lors de l'envoi du formulaire"));
    } else {
      alert('Veuillez bien remplir le formulaire');
    }
  });
};
// // /****************************************/
firstName.addEventListener('input', firstnameTest);
lastName.addEventListener('input', lastNameTest);
address.addEventListener('input', addressTest);
city.addEventListener('input', cityTest);
email.addEventListener('input', emailTest);
// // /****************************************/

let formIsValid = true;

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
