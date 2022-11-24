//Récupère les valeurs du localStorage

export let loadcart = () => {
  let dataProduct = localStorage.getItem('produits');
  if (dataProduct == null) {
    return [];
  } else {
    return JSON.parse(dataProduct);
  }
};

/****************************************/

/****************************************/
// let priceProduct = fetch('http://localhost:3000/api/products/')
//   .then((res) => res.json())
//   .then((data) => {
//     for (let n = 0; n < dataProduct.length; n++) {
//       return data[n].price;
//     }
//   });
// console.log(priceProduct);
/****************************************/

/****************************************/

// fetch('http://localhost:3000/api/products/')
//   .then((res) => res.json())
//   .then((data) => {
//     for (let n = 0; n < data.length; n++) {
//       console.log(data[n].price);
//       return data[n].price;
//     }
//   });
/****************************************/

/****************************************/
// Fonction permettant affichage quantité après panier dans menu nav
export let quantityAffichagePanier = () => {
  const totalQuantity = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantityProduct),
    0
  );

  let nav = document.querySelector('nav > ul > a:nth-child(2) li');
  let span = document.createElement('span');
  nav.appendChild(span);
  if (totalQuantity) {
    span.innerHTML = ' ' + '(' + totalQuantity + ')';
    span.style.color = 'grey';
  }
};

let dataProduct = loadcart();
// let priceProduct = fetch('http://localhost:3000/api/products/')
//   .then((res) => res.json())
//   .then((data) => {
//     for (let datatest of data) {
//       // console.log(datatest.price);
//     }
//   });
// if (dataProduct != 0) {
//   console.log('test');
//   console.log(priceProduct);
//   priceProduct;
// } else {
//   console.log('mince');
// }

let testprixapi = () => {
  fetch('http://localhost:3000/api/products/' + dataProduct)
    .then((res) => res.json())
    .then((data) => {
      for (let datatest of data) {
        console.log(datatest.price);
      }
    });
};
testprixapi;
