let loginform = document.querySelector('.header .login-form');
document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
    navbar.classList.remove('active');

}
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginform.classList.remove('active');

}
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});


window.onscroll = () => {
    loginform.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }



}
window.onload = () => {


    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }



}
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const input = e.target.parentNode.querySelector('.quantity-input');
        let value = parseInt(input.value);

        if (e.target.id === 'increase') {
            value += 1;
        } else if (e.target.id === 'decrease' && value > 1) {
            value -= 1;
        }

        input.value = value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });

    function addToCartClicked(event) {
        const button = event.target;
        const shopItem = button.closest('.box');

        const title = shopItem.querySelector('.shop-content h3').textContent;
        const priceString = shopItem.querySelector('.amount').textContent;
        const price = parseFloat(priceString.replace('Rs. ', ''));

        addItemToCart(title, price);
    }

    function addItemToCart(title, price) {
        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');

        const cartItems = document.getElementById('cart-items');
        const cartItemNames = cartItems.getElementsByClassName('cart-item-title');

        for (let i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].textContent === title) {
                alert('This item is already added to the cart!');
                return;
            }
        }

        const cartRowContents = `
            <div class="cart-item">
                <span class="cart-item-title">${title}</span>
                <span class="cart-item-price">Rs. ${price.toFixed(2)}</span>
            </div>
        `;
        
        cartRow.innerHTML = cartRowContents;
        cartItems.appendChild(cartRow);

        updateCartTotal();
    }

    function updateCartTotal() {
        const cartItems = document.getElementById('cart-items');
        const cartRows = cartItems.getElementsByClassName('cart-row');
        let total = 0;

        for (let i = 0; i < cartRows.length; i++) {
            const cartRow = cartRows[i];
            const priceElement = cartRow.querySelector('.cart-item-price');
            const price = parseFloat(priceElement.textContent.replace('Rs. ', ''));
            total += price;
        }

        document.getElementById('cart-total').textContent = `Rs. ${total.toFixed(2)}`;
    }
});
