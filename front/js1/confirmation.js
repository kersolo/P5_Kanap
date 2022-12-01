const getOrderId = new URL(location.href).searchParams.get('orderId');

document.querySelector('#orderId').innerHTML = getOrderId;

localStorage.clear();
