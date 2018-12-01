var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
let price = Math.floor(Math.random()*100);
cart.push({[item]:price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
