const mainFunction = async () => {
  const productsData = await fetchCall();
  for (const product of productsData) {
    createCards(product);
  }
};

const fetchCall = async () => {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();

  console.log(products);
  return products;
};

const createCards = (product) => {
  let items = document.querySelector('.items');
  let a = document.createElement('a');
  let article = document.createElement('article');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  h3.classList.add('productName');
  p.classList.add('productDescription');

  a.href = './product.html?id=' + product._id;

  items.appendChild(a);
  a.appendChild(article);
  article.appendChild(h3);
  article.appendChild(img);
  article.appendChild(p);

  img.src = product.imageUrl;
  h3.innerText = product.name;
  p.innerText = product.description;
};

import { loadcart } from './modules.js';
let dataProduct = loadcart();

import { quantityAffichagePanier } from './modules.js';
quantityAffichagePanier();
// let quantityAffichagePanier = () => {
//   const totalQuantity = dataProduct.reduce(
//     (previousValue, currentValue) =>
//       previousValue + parseInt(currentValue.nombreDeProduit),
//     0
//   );
//   let nav = document.querySelector('nav > ul > a:nth-child(2) li');
//   let span = document.createElement('span');
//   nav.appendChild(span);
//   span.innerHTML = ' ' + '(' + totalQuantity + ')';
//   console.log(span);
// };
// quantityAffichagePanier();

mainFunction();
