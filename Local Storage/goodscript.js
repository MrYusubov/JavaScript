const cartList = document.getElementById("cartList");
const cartItems = JSON.parse(localStorage.getItem("cart"));

if (cartItems.length === 0) {
    cartList.innerHTML = "<p>The Cart is Empty</p>";
} else {
    cartItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <h3>${item.product_name}</h3>
            <p>${item.product_description}</p>
            <p><b>Price:</b> ${item.product_price} AZN</p>
        `;
        cartList.appendChild(itemDiv);
    });
}