export let cart = [];

// funtion to add items in the cart
export function addtocart(productId) {
  let matchingitem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingitem = cartitem;
    }
  });
  if (matchingitem) {
    matchingitem.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
