//Fonction appel de l'API
export const fetchCall = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products/');
    const products = await response.json();
    return products;
  } catch (error) {
    alert('Erreur de chargement des produits');
  }
};

/****************************************/
export const getItem = async (getItemId) => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/products/' + getItemId
    );
    const products = await response.json();

    return products;
  } catch (error) {
    alert('Erreur de chargement du produit');
  }
};
