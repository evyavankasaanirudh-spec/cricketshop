// Cricket World JavaScript

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme Management
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const currentTheme = body.getAttribute('data-theme');
    themeToggle.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeButton();
}

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'card mb-3';
        cartItem.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price}</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function updateCartCount() {
    // Update cart count in navbar if exists
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Product Data
const bats = [
    { name: 'English Willow Bat', price: 299, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Kashmir Willow Bat', price: 199, image: 'https://images.unsplash.com/photo-1606103920295-9a1b4b0b3b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Lightweight Bat', price: 149, image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Professional Bat', price: 399, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Training Bat', price: 99, image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Junior Bat', price: 79, image: 'https://images.unsplash.com/photo-1606103920295-9a1b4b0b3b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
];

const balls = [
    { name: 'Leather Cricket Ball', price: 49, image: 'https://images.unsplash.com/photo-1540747913346-19bd32b51a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Tennis Ball', price: 19, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Plastic Ball', price: 29, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'White Cricket Ball', price: 39, image: 'https://images.unsplash.com/photo-1540747913346-19bd32b51a4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Red Cricket Ball', price: 35, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Practice Ball Set', price: 25, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
];

const kits = [
    { name: 'Complete Kit', price: 399, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Batting Gloves', price: 79, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Wicket Keeping Gloves', price: 99, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Helmet', price: 149, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Pads', price: 89, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Protective Gear', price: 199, image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Thigh Guard', price: 45, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Arm Guard', price: 35, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Abdominal Guard', price: 55, image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
];

// Load Products
function loadProducts(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card product-card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary mt-auto" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Feedback Form
function handleFeedbackSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    alert(`Thank you for your feedback, ${name}! We'll get back to you soon.`);
    
    // Reset form
    event.target.reset();
}

// Checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Checkout successful! Total: $${total}`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Load products on respective pages
    loadProducts('bats-container', bats);
    loadProducts('balls-container', balls);
    loadProducts('kit-container', kits);
    
    // Display cart if on cart page
    displayCart();
    
    // Feedback form
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    updateCartCount();
});