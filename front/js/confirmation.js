//récupération du numéro de commande après la requête à l'api
const getOrderId = new URL(location.href).searchParams.get('orderId');
//récupération et affichage d'élement du DOM
document.querySelector('#orderId').innerHTML = getOrderId;
//suppression des données enregistrées dans le localStorage
localStorage.clear();
