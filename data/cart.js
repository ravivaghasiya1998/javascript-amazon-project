export const cart = [];

export function addToCart(productId){
    let matchingItem ;    
        cart.forEach((cartItem) =>{
            if (productId ===cartItem.productId){
                matchingItem = cartItem;   
            }
        });
        // 13-a --> 13-e //
        const quatnitySelector = document.querySelector(
            `.js-quantity-selector-${productId}`);
        const quantity = Number(quatnitySelector.value)

        if (matchingItem){
            matchingItem.quantity += quantity;
        } else {
            cart.push({
                productId,
                quantity
            });
        }   
}