const getItemId = () => {
  return new URL(location.href).searchParams.get('id');
};

const mainFunction = async () => {
  const itemId = getItemId();
  const item = await getItem(itemId);
  showItems(item);
};

const getItem = async (itemId) => {
  // const response = await fetch(`http://localhost:3000/api/products/${itemId}`);
  const response = await fetch('http://localhost:3000/api/products/' + itemId);
  const products = await response.json();
  return products;
};

const showItems = (item) => {
  let item2 = document.querySelector('.item__img');
  let title = document.querySelector('#title');

  let price = document.querySelector('#price');
  let img = document.createElement('img');
  let p = document.querySelector('#description');
  let colorsId = document.querySelector('#colors');

  item2.appendChild(img);
  title.innerHTML = item.name;
  price.innerHTML = item.price;
  img.src = item.imageUrl;
  p.innerHTML = item.description;

  for (const color of item.colors) {
    let option = document.createElement('option');
    // console.log(option);
    option.innerHTML = color;
    colorsId.appendChild(option);
  }
};

mainFunction();

/**************************/

// const addProductInCart = async () => {
//   const itemId = getItemId();
//   const item = await getItem(itemId);
//   showItems(item);
// };

// const getItemId = () => {
//   return new URL(location.href).searchParams.get('id');
// };
// const getItem = (itemId) => {
//   return fetch(`http://localhost:3000/api/products/${itemId}`)
//     .then(function (httpBodyResponse) {
//       return httpBodyResponse.json();
//     })
//     .then(function (product) {
//       return product;
//     })
//     .catch(function (error) {
//       alert('Erreur de chargement des produits');
//     });
// };

// const showItems = (item) => {
//   let item2 = document.querySelector('.item__img');
//   let title = document.querySelector('#title');

//   let price = document.querySelector('#price');
//   let img = document.createElement('img');
//   let p = document.querySelector('#description');
//   let colorsId = document.querySelector('#colors');

//   item2.appendChild(img);
//   title.innerHTML = item.name;
//   price.innerHTML = item.price;
//   img.src = item.imageUrl;
//   p.innerHTML = item.description;

//   for (const color of item.colors) {
//     let option = document.createElement('option');
//     // console.log(option);
//     option.innerHTML = color;
//     colorsId.appendChild(option);
//   }
// };

// addProductInCart();

/****************************************/
/****************************************/

// const getId = new URL(document.location.href).searchParams.get('id');

// console.log(getId);

// let url = 'http://localhost:3000/api/products/' + getId;
// ///////////////////////////////
// let tab = fetch(url).then((res) => res.json());
// // console.log(tab);
// tab.then((productData) => console.log(productData));

// tab.then((productData) => {
//   let item = document.querySelector('.item__img');
//   let title = document.querySelector('#title');
//   let price = document.querySelector('#price');
//   let img = document.createElement('img');
//   let p = document.querySelector('#description');
//   let colorsId = document.querySelector('#colors');

//   item.appendChild(img);
//   title.innerHTML = productData.name;
//   price.innerHTML = productData.price;
//   img.src = productData.imageUrl;
//   p.innerHTML = productData.description;

//   for (const color of productData.colors) {
//     let option = document.createElement('option');
//     // console.log(option);
//     option.innerHTML = color;
//     colorsId.appendChild(option);
//   }
// });

// /****************************************/
// /****************************************/

// const btnDiv = document.querySelector('.item__content__addButton');
// const btnA = document.createElement('a');
// const btn = document.querySelector('button');
// btnDiv.appendChild(btnA);
// btnA.appendChild(btn);

// btn.addEventListener('click', () => {
//   btnA.href = './cart.html';
// });

/****************************************/
/****************************************/

// let firstTest = document.querySelector('.item__content__addButton');
// let testt = document.createElement('a');
// let button = document.querySelector('button');
// firstTest.appendChild(testt);
// testt.appendChild(button);
// console.log(testt);
// testt.href = './cart.html';

/////////////////////////////////////////////////
/////////////////////////////////////////////////:
/////////////////////////////////////////////

// for (let i = 0; i < productData.colors.length; i++) {
//   let color = document.createElement('option');
//   console.log(color);
//   color.innerText = productData.colors[i];

//   testColor.appendChild(color);
// }

///////////////////////////////
///////////////////////////////
