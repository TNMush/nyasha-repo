

let cartCount = 0;
let cartItems = [];

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Here you could push item data to the cartItems array if you want to track what items are added
}

function updateCartView() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ""; // Clear previous content
    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItems.forEach(item => {
            cartItemsDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        });
    }
}

// Call this function when navigating to the cart.html page
if (document.title === "View Cart - Illusions") {
    updateCartView();
}
