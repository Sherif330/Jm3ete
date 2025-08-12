const form = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("itemName").value.trim();
    const quantity = document.getElementById("itemQuantity").value;

    if (name && quantity > 0) {
        const li = document.createElement("li");
        li.textContent = `${name} - الكمية: ${quantity}`;
        itemList.appendChild(li);

        form.reset();
    }
});
