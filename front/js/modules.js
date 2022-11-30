//Récupère les valeurs du localStorage

// export let loadcart = () => {
//   let dataProduct = localStorage.getItem('produits');
//   if (dataProduct == null) {
//     return [];
//   } else {
//     return JSON.parse(dataProduct);
//   }
// };

/****************************************/
/****************************************/
export let loadcart = () => {
  let dataProduct = JSON.parse(localStorage.getItem('produits'));
  if (dataProduct == null) {
    return [];
  } else {
    for (const data of dataProduct) {
      fetch('http://localhost:3000/api/products/' + data.idProduct)
        .then((res) => res.json())
        .then((dataId) => {
          let price = dataId.price;
          data.priceProduct = price;
        });
    }
    console.log(dataProduct);
    return dataProduct;
  }
};
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
