const mainFunction = () => {
  loadcart();
  createHtml();
  deleteItemProduct();
  changeQuantity();
  quantityAndTotalPrice();
  getDataForm();
  firstNameFunction();
  lastNameFunction();
  addressFunction();
  cityFunction();
  emailFunction();
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

    /****************************************/
    // const changeQuantity = () => {
    //   data.nombreDeProduit = input.value;

    //   localStorage.setItem('produits', JSON.stringify(dataProduct));

    //   window.location.href = 'cart.html';
    // };

    // document
    //   .querySelectorAll('.cart__item__content__settings__quantity input')
    //   .forEach((input) => {
    //     input.addEventListener('input', changeQuantity);
    //     console.log(input);
    //   });
    /****************************************/
  }
};

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
// Incrémenter ou décrémenter produit dans le panier
const changeQuantity = () => {
  const inputs = document.querySelectorAll(
    '.cart__item__content__settings__quantity input'
  );
  for (let m = 0; m < inputs.length; m++) {
    inputs[m].addEventListener('input', () => {
      dataProduct[m].nombreDeProduit = inputs[m].value;
      console.log(dataProduct);

      localStorage.setItem('produits', JSON.stringify(dataProduct));

      window.location.href = 'cart.html';
    });
  }
};

// /****************************************/
// /****************************************/
// const changeQuantity = () => {
//   const inputs = document.querySelectorAll(
//     '.cart__item__content__settings__quantity input'
//   );
//   for (let m in dataProduct) {
//     inputs.addEventListener('input', () => {
//       dataProduct[m].nombreDeProduit = inputs.value;
//       console.log(dataProduct[m]);

//       localStorage.setItem('produits', JSON.stringify(dataProduct));
//       // window.location.href = 'cart.html';
//     });
//   }
// };
// /****************************************/

//Total de la quantité et du prix
let Quantity = document.querySelector('#totalQuantity');
let PrixTotal = document.querySelector('#totalPrice');

let quantityAndTotalPrice = () => {
  const totalQuantity = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.nombreDeProduit),
    0
  );

  const totalPrice = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue +
      parseInt(currentValue.nombreDeProduit * currentValue.prixDuProduit),
    0
  );
  Quantity.innerText = totalQuantity;
  PrixTotal.innerText = totalPrice;
};

// /****************************************/

/****************************************/

//Messages d'erreur des input

function firstNameFunction() {
  let firstName = document.querySelector('#firstName');
  firstName.addEventListener('input', function () {
    let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg');
    let firstNameRegEx = new RegExp('^[a-zA-Z]+$', 'g');
    let testFirstName = firstNameRegEx.test(firstName.value);
    if (!testFirstName) {
      firstNameErrorMsg.innerHTML = 'Le prénom est invalide';
    } else {
      firstNameErrorMsg.innerHTML = '';
    }
  });
}
function lastNameFunction() {
  let lastName = document.querySelector('#lastName');
  lastName.addEventListener('input', function () {
    let lastNameErrorMsg = document.querySelector('#lastNameErrorMsg');
    let lastNameRegEx = new RegExp('^[a-zA-Z]+$', 'g');
    let testLastName = lastNameRegEx.test(lastName.value);
    if (!testLastName) {
      lastNameErrorMsg.innerHTML = 'Le nom est invalide';
    } else {
      lastNameErrorMsg.innerHTML = '';
    }
  });
}
function addressFunction() {
  let address = document.querySelector('#address');
  address.addEventListener('input', function () {
    let addressErrorMsg = document.querySelector('#addressErrorMsg');
    let addressRegEx = new RegExp('^[a-zA-Z0-9-]+$', 'g');
    let testAddress = addressRegEx.test(address.value);
    if (!testAddress) {
      addressErrorMsg.innerHTML = "L'adresse est invalide";
    } else {
      addressErrorMsg.innerHTML = '';
    }
  });
}
function cityFunction() {
  let city = document.querySelector('#city');
  city.addEventListener('input', function () {
    let cityErrorMsg = document.querySelector('#cityErrorMsg');
    let cityNameRegEx = new RegExp('^[a-zA-Z-]+$', 'g');
    let testCity = cityNameRegEx.test(city.value);
    if (!testCity) {
      cityErrorMsg.innerHTML = 'La ville est invalide';
    } else {
      cityErrorMsg.innerHTML = '';
    }
  });
}
function emailFunction() {
  let email = document.querySelector('#email');
  email.addEventListener('input', function () {
    let emailErrorMsg = document.querySelector('#emailErrorMsg');
    let emailRegEx = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
      'g'
    );
    let testEmail = emailRegEx.test(email.value);
    if (!testEmail) {
      emailErrorMsg.innerHTML = "L'e-mail est invalide";
    } else {
      emailErrorMsg.innerHTML = '';
    }
  });
}

// /****************************************/
//Récupération values du formulaire
const getDataForm = () => {
  let btnCommander = document.querySelector('#order');

  btnCommander.addEventListener('click', () => {
    let coordonnéesForm = {
      prenom: firstName.value,
      nom: lastName.value,
      adresse: address.value,
      ville: city.value,
      email: email.value,
    };
    // addDataForm(coordonnéesForm);
    localStorage.setItem('coordonnées', JSON.stringify(coordonnéesForm));

    // window.location.href = 'confirmation.html';
  });
};
// /****************************************/
// /****************************************/
//Pour garder les coordonnées des visiteurs
// const testtt = () => {
//   const testGarderCordonnées = localStorage.getItem('coordonnées');

//   if (testGarderCordonnées != undefined) {
//     const testGarderCordonnéesParse = JSON.parse(testGarderCordonnées);

//     let firstName = document
//       .querySelector('#firstName')
//       .setAttribute('value', testGarderCordonnéesParse.prenom);
//     let lastName = document
//       .querySelector('#lastName')
//       .setAttribute('value', testGarderCordonnéesParse.nom);
//     let address = document
//       .querySelector('#address')
//       .setAttribute('value', testGarderCordonnéesParse.adresse);
//     let city = document
//       .querySelector('#city')
//       .setAttribute('value', testGarderCordonnéesParse.ville);
//     let email = document
//       .querySelector('#email')
//       .setAttribute('value', testGarderCordonnéesParse.email);

//Autre méthode (a améliorer)
// function suptest(tup) {
//   document
//     .querySelector(`#${tup}`)

//     .setAttribute('value', testGarderCordonnéesParse[tup]);
//   console.log(document.querySelector(`#${tup}`));
// }

// suptest('firstName');
// suptest('lastName');
// suptest('address');
// suptest('city');
// suptest('email');
//Autre méthode (a améliorer)
//   }
// };

// /****************************************/

mainFunction();
