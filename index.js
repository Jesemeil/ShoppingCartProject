function addItem() {
    const itemInput = document.getElementById('item-input');
    const priceInput = document.getElementById('price-input');
    const cartItems = document.getElementById('cart-items');

    if (itemInput.value && priceInput.value) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${itemInput.value}</td><td>${priceInput.value}</td>`;
        cartItems.appendChild(newRow);

        
        itemInput.value = '';
        priceInput.value = '';
    }
}

function removeItem() {
    const itemToRemove = document.getElementById('item-input').value;
    const cartItems = document.getElementById('cart-items');
    const rows = cartItems.getElementsByTagName('tr');

    if (!itemToRemove) {
        alert('Please enter an item to remove.');
        return;
    }

    
    for (let i = 0; i < rows.length; i++) {
        const itemCell = rows[i].getElementsByTagName('td')[0];
        if (itemCell && itemCell.textContent === itemToRemove) {
            cartItems.removeChild(rows[i]);
            return; 
        }
    }

    alert(`Item "${itemToRemove}" not found in the cart.`);
}

function removeAllItems() {
    const cartItems = document.getElementById('cart-items');
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }
}

function calculateTotal() {
    const rows = document.getElementById('cart-items').getElementsByTagName('tr');
    let total = 0;

    for (let i = 0; i < rows.length; i++) {
        const priceCell = rows[i].getElementsByTagName('td')[1];
        if (priceCell) {
            total += parseFloat(priceCell.textContent) || 0;
        }
    }

    
    document.getElementById('total-price').textContent = total.toFixed(2);
}
