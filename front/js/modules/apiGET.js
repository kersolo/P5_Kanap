//fonction d'appel de l'API pour la récupération des données de tous les produits
export const fetchCall = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products/');
    const products = await response.json();
    return products;
  } catch (error) {
    alert('Erreur de chargement des produits');
  }
};

//fonction d'appel de l'API pour la récupération des données d'un produit en fonction de son id réupéré en paramètre avec getItemId
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
