//vérifie si le prénom inscrit dans le champ correspondant respecte bien les conditions du regEx
function firstnameTest() {
  if (!/^[a-zA-Z-]{3,20}$/.test(firstName.value)) {
    formIsValid = false;
    firstNameErrorMsg.innerHTML = 'Le prénom est invalide';
  } else {
    formIsValid = true;
    firstNameErrorMsg.innerHTML = '';
  }
  return formIsValid;
}
//vérifie si le nom inscrit dans le champ correspondant respecte bien les conditions du regEx
function lastNameTest() {
  if (!/^[a-zA-Z-]{3,20}$/.test(lastName.value)) {
    formIsValid = false;
    lastNameErrorMsg.innerHTML = 'Le nom est invalide';
  } else {
    formIsValid = true;
    lastNameErrorMsg.innerHTML = '';
  }
  return formIsValid;
}
//vérifie si l'adresse' inscrite dans le champ correspondant respecte bien les conditions du regEx
function addressTest() {
  if (!/^[a-zA-Z-0-9 - ]{3,50}$/.test(address.value)) {
    formIsValid = false;
    addressErrorMsg.innerHTML = "L'adresse est invalide";
  } else {
    formIsValid = true;
    addressErrorMsg.innerHTML = '';
  }
  return formIsValid;
}
//vérifie si la ville inscrite dans le champ correspondant respecte bien les conditions du regEx
function cityTest() {
  if (!/^[a-zA-Z-0-9 - ]{3,50}$/.test(city.value)) {
    // cityErrorMsg.innerHTML = '';
    formIsValid = false;
    cityErrorMsg.innerHTML = 'La ville est invalide';
  } else {
    formIsValid = true;
    cityErrorMsg.innerHTML = '';
  }
  return formIsValid;
}
//vérifie si l'email inscrit dans le champ correspondant respecte bien les conditions du regEx
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
  return formIsValid;
}

// // /****************************************/
//fonction qui envoie la requête post à l'API
export const getDataForm = (dataProduct) => {
  let btnCommander = document.querySelector('#order');
  btnCommander.addEventListener('click', (e) => {
    e.preventDefault();

    //----------
    //création de l'objet contact avec les informations a envoyer a l'api
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    };
    //----------
    //création du tableau rassemblant l'id de chaque produit
    let products = [];
    for (let idProduct of dataProduct) {
      products.push(idProduct.idProduct);
    }
    //----------
    //envoi du formulaire et des produits à l'api si il y a des produits dans le panier et que le formulaire est correctement rempli avec l'appel des fonctions de vérification des champs
    if (
      dataProduct >= [1] &&
      firstnameTest() &&
      lastNameTest() &&
      addressTest() &&
      cityTest() &&
      emailTest()
    ) {
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
          window.location.href = './confirmation.html?orderId=' + data.orderId;
        })
        .catch((error) => alert("Erreur lors de l'envoi du formulaire"));
    } else {
      alert('Veuillez bien remplir le formulaire');
    }
  });
};
// // /****************************************/
//création de la variable formIsValid
let formIsValid = true;

//récupération d'éléments du DOM
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let address = document.querySelector('#address');
let city = document.querySelector('#city');
let email = document.querySelector('#email');
//récupération d'éléments du DOM pour les messages d'erreur
let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg');
let lastNameErrorMsg = document.querySelector('#lastNameErrorMsg');
let addressErrorMsg = document.querySelector('#addressErrorMsg');
let cityErrorMsg = document.querySelector('#cityErrorMsg');
let emailErrorMsg = document.querySelector('#emailErrorMsg');
// // /****************************************/
//les évenements de vérification des champs du formulaire
firstName.addEventListener('input', firstnameTest);
lastName.addEventListener('input', lastNameTest);
address.addEventListener('input', addressTest);
city.addEventListener('input', cityTest);
email.addEventListener('input', emailTest);
// // /****************************************/
