let buy = addToCart;
function addToCart() {
    const qty = document.getElementById("quantity").value;
    alert('Added ${qty} Chicken Burger(s) to cart!');
}

// reservation button
const shop = ourShop;
function ourShop() {
    window.location.href = "shop.html";
}

// ordered succesfully
const ordered = orderNow;

function orderNow() {
    alert('Ordered Sucessfully!');
}
