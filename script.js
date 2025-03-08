document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    function updateCart() {
        cartItemsList.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} грн`;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "❌";
            removeButton.onclick = () => {
                cart.splice(index, 1);
                updateCart();
            };
            
            li.appendChild(removeButton);
            cartItemsList.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = totalPrice;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const id = product.dataset.id;
            const name = product.dataset.name;
            const price = parseInt(product.dataset.price);

            cart.push({ id, name, price });
            updateCart();
        });
    });

    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Кошик порожній!");
        } else {
            alert("Дякуємо за покупку!");
            cart.length = 0;
            updateCart();
        }
    });
});

