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

mainFunction();

/****************************************/
/****************************************/
/****************************************/

// let url = 'http://localhost:3000/api/products';

// let tab = fetch(url).then((res) => res.json());
// // tab.then((data) => console.log(data));

// tab.then((productsData) => {
//   // for (let i = 0; i < data.length; i++) {
//   for (const product of productsData) {
//     let items = document.querySelector('.items');
//     let a = document.createElement('a');
//     a.href = './product.html?id=' + product._id;
//     let article = document.createElement('article');
//     let img = document.createElement('img');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     h3.classList.add('productName');
//     p.classList.add('productDescription');

//     function append() {
//       items.appendChild(a);
//       a.appendChild(article);
//       article.appendChild(h3);
//       article.appendChild(img);
//       article.appendChild(p);
//     }
//     append();

//     function pourTest() {
//       img.src = product.imageUrl;
//       h3.innerText = product.name;
//       p.innerText = product.description;
//     }
//     pourTest();
//   }
// });

/****************************************/
/****************************************/
/****************************************/

// ///////////////////////////////
// let url = 'http://localhost:3000/api/products';

// let tab = fetch(url).then((res) => res.json());
// // tab.then((data) => console.log(data));
// ///////////////////////////////

// ///////////////////////////////
// tab.then((productsData) => {
//   // for (let i = 0; i < data.length; i++) {
//   for (const product of productsData) {
//     ///////////////////////////////
//     let items = document.querySelector('.items');
//     let a = document.createElement('a');
//     ////********************////
//     a.href = './product.html?id=' + product._id;
//     ////********************////
//     let article = document.createElement('article');
//     let img = document.createElement('img');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     ///////////////////////////////
//     h3.classList.add('productName');
//     p.classList.add('productDescription');

//     ///////////////////////////////
//     function append() {
//       items.appendChild(a);
//       a.appendChild(article);
//       article.appendChild(h3);
//       article.appendChild(img);
//       article.appendChild(p);
//     }
//     append();
//     ///////////////////////////////

//     ///////////////////////////////
//     function pourTest() {
//       img.src = product.imageUrl;

//       h3.innerText = product.name;

//       p.innerText = product.description;
//     }
//     pourTest();
//     ///////////////////////////////
//     ///////////////////////////////

//     //////
//     /////
//   }
// });

//////// AUTRE METHODE //////////////

// let tab = fetch('http://localhost:3000/api/products').then((res) => res.json());
// console.log(tab);
// tab.then((data) => {
//   for (let i = 0; i < data.length; i++) {
//     let creation = document.querySelector('.items');
//     creation.innerHTML += `
//     <a href="./product.html">
//       <article>
//       <img src="
//       ${data[i].imageUrl}
//     " />
//     <h2>
//       ${data[i].name}
//       </h2>
//       </article>
//       </a>
//       `;
//   }
// });
