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
// export let loadcart = async () => {
//   let dataProduct = JSON.parse(localStorage.getItem('produits'));
//   if (dataProduct == null) {
//     return [];
//   } else {
//     for (const datatest of dataProduct) {
//       let urlapi = await fetch(
//         'http://localhost:3000/api/products/' + datatest.idProduct
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           return data.price;
//         });
//       console.log(datatest.idProduct);
//       console.log(urlapi);
//     }

//     return dataProduct;
//   }
// };
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
