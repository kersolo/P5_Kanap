const getId = new URL(document.location.href).searchParams.get('id');

let url = 'http://localhost:3000/api/products/' + getId;
///////////////////////////////
let tab = fetch(url).then((res) => res.json());
console.log(tab);
tab.then((productData) => console.log(productData));

tab.then((productData) => {
  let item = document.querySelector('.item__img');
  let title = document.querySelector('#title');
  let price = document.querySelector('#price');
  let img = document.createElement('img');
  let p = document.querySelector('#description');
  let colorsId = document.querySelector('#colors');

  item.appendChild(img);
  title.innerHTML = productData.name;
  price.innerHTML = productData.price;
  img.src = productData.imageUrl;
  p.innerHTML = productData.description;

  for (const color of productData.colors) {
    let option = document.createElement('option');
    console.log(option);
    option.innerHTML = color;
    colorsId.appendChild(option);
  }
});

let firstTest = document.querySelector('.item__content__addButton');
let testt = document.createElement('a');
let button = document.querySelector('button');
firstTest.appendChild(testt);
testt.appendChild(button);
console.log(testt);
testt.href = './cart.html';

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

///////////////////////////////
