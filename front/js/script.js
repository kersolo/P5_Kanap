//import de la fonction permettant l'affichage de la quantité du panier dans menu nav
import { quantityAffichagePanier } from './modules.js';

//Fonction principale asynchrone revecevant une promesse de la fonction fetchcall et va créer une boucle pour affichage de tous les produits via la fonction createcards
const mainFunction = async () => {
  const productsData = await fetchCall();
  for (const product of productsData) {
    createCards(product);
  }
};

//Fonction appel de l'API
const fetchCall = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products/');
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    alert('Erreur de chargement des produits');
  }
};

//Création des cards pour affichage produits
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
  img.alt = product.name;
  h3.innerText = product.name;
  p.innerText = product.description;
};

//Appel de la fonction principale
mainFunction();
//Appel de la fonction importée
quantityAffichagePanier();
