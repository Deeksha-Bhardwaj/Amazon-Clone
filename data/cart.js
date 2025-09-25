export let cart = [];

// funtion to add to the cart 
export function addtocart(productId){
let matchingitem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingitem = item;
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