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
