let cart = [

]

let products = [
    {
        name: "Final Fantasy X",
        price: "4.99",
        originalPrice: "49",
        description: "One of the PlayStation 2's most popular titles, Final Fantasy X's box art is bite-the-back-of-your-hand beautiful. Sweeping, mythical and brilliantly simple.",
        imageUrl: "images/FinalFantasyX.jpg.jpg",
        genre: "RPG",
        releaseDate: 2001,
        platform: "PlayStation2",
        onSale: true
    },
    {
        name: "Alien Breed",
        price: "18",
        originalPrice: "50",
        description: "Despite being over twenty years old, the Alien Breed cover is still a benchmark for scary. Does exactly what it says on the box.",
        imageUrl: "images/AlienBreed(1991).jpg",
        genre: "Action",
        releaseDate: 1991,
        platform: "PC",
        onSale: true
    },
    {
        name: "Araknoid",
        price: "50",
        originalPrice: "50",
        description: "We take off our hats to the artist who penned this Arkanoid cover. For a game whose major concern is bouncing a ball into a wall of bricks, this certainly makes the experience look a lot more... active?",
        imageUrl: "images/Arkanoid(1986).jpg",
        genre: "Action",
        releaseDate: 1986,
        platform: "PC",
        onSale: false
    },
    {
        name: "Armored Core V",
        price: "12",
        originalPrice: "50",
        description: "The box art for Armored Core V is simplistically insightful - buy this game for bullets, mechs and lens flare.",
        imageUrl: "images/ArmoredCoreV(2012).jpg",
        genre: "Action",
        releaseDate: 2012,
        platform: "XBOX360",
        onSale: true
    },
    {
        name: "Awesome",
        price: "6.99",
        originalPrice: "50",
        description: "The box art for Awesome fulfils the title's promise. Grand, brooding and industrial, how can you not want to plug this in?",
        imageUrl: "images/Awesome(1990).jpg.jpg",
        genre: "Action",
        releaseDate: 1990,
        platform: "PC",
        onSale: true
    },
    {
        name: "Baldurs Gate II",
        price: "50",
        originalPrice: "50",
        description: "Opting for the old 'is it a book or a box', Baldur's Gate II is very stylish, instantly appealing to fantasy fans.",
        imageUrl: "images/BaldursGate2(2000).jpg",
        genre: "RPG",
        releaseDate: 2000,
        platform: "PC",
        onSale: false
    },
    {
        name: "BioShock",
        price: "50",
        originalPrice: "50",
        description: "Leading with its central nemesis, the BioShock cover manages to put across a lot more drama than its latest sibling BioShock Infinite.",
        imageUrl: "images/BioShock(2007).jpg",
        genre: "Action",
        releaseDate: 2007,
        platform: "XBOX360",
        onSale: false
    },
    {
        name: "Craxy Taxi",
        price: "50",
        originalPrice: "50",
        description: "The arcade classic was a massive hit for the ill-fated Dreamcast. A bold cover, simple, striking and clean.",
        imageUrl: "images/CrazyTaxi(2000).jpg",
        genre: "Race",
        releaseDate: 2000,
        platform: "SEGA",
        onSale: false
    },
    {
        name: "Dead Space",
        price: "50",
        originalPrice: "50",
        description: "The first severed limb to appear in our list, this is exactly the last thing you want to happen to you in Dead Space.",
        imageUrl: "images/DeadSpace(2008).jpg",
        genre: "Action",
        releaseDate: 2008,
        platform: "PC",
        onSale: false
    },
    {
        name: "Diablo III",
        price: "50",
        originalPrice: "50",
        description: "One of the most recent releases to make our list, Diablo III is diabolically sinister, and undeniably cool.",
        imageUrl: "images/Diablo3(2012).jpg",
        genre: "Action",
        releaseDate: 2012,
        platform: "PC",
        onSale: false
    },
    {
        name: "DOOM",
        price: "50",
        originalPrice: "50",
        description: "The cover of the classic first-person shooter has been echoed ever since it ripped its way out of hell in 1993. The typography alone makes this cover worthy of inclusion.",
        imageUrl: "images/Doom(1993).jpg",
        genre: "Action",
        releaseDate: 1993,
        platform: "PC",
        onSale: false
    },
    {
        name: "Dragon Quest VIII",
        price: "50",
        originalPrice: "50",
        description: "Journey of the Cursed King is another cover to demonstrate the effectiveness of beautiful drawing.",
        imageUrl: "images/DragonQuestVIII(2004).jpg",
        genre: "Action",
        releaseDate: 2004,
        platform: "PayStation2",
        onSale: false
    },
    // {
    //     name: "Driver",
    //     price: 50,
    //     description: "Making the wheelman cool long before Ryan had anything to do with it, the Driver cover is one of our all time favourites.",
    //     imageUrl: "images/Driver(1999).jpg",
    //     genre: "Race",
    //     releaseDate: 2012,
    //     platform: "PlayStation"
    // },  
]


//------------------BUTTONS----------------------------
//Adds item to cart array and local storage
function addToCart(productId) {
    const product = products.find(p => p.name === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    updateCartCount();
}
function attachButtonListeners() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
        button.removeEventListener('click', handleAddToCartClick);
        button.addEventListener('click', handleAddToCartClick);
    });
}
function handleAddToCartClick() {
    addToCart(this.getAttribute('data-id'));
}

//Removes one item from cart
function removeFromCart(index) {
    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));

    displayCartItems();
    updateCartCount();
    updateCheckoutButtonStatus();
}
function attachRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            removeFromCart(parseInt(button.getAttribute('data-index')));
        });
    });
}

//Removes all items from cart
function clearCart() {
    cart = [];

    localStorage.setItem('cart', JSON.stringify(cart));

    displayCartItems();
    updateCartCount();
    displayCheckoutCartItems();
    updateCheckoutButtonStatus();
}
function attachClearCartButtonListener() {
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
}
//-----------------------------------------------------------


//Calculates price of all items in cart
function calculateCartPrice(cart) {
    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += parseFloat(product.price);
    });
    return totalPrice;
}

//Displays how many items are in cart on navbar
function updateCartCount() {
    let cartCountElements = document.querySelectorAll('.cart-count');
    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];
    let itemCount = cart.length;

    cartCountElements.forEach(element => {
        element.textContent = itemCount > 0 ? `${itemCount} items` : 'Empty';
    });
}


//----------------DISPLAY ITEMS----------------------------------------
//Displays all items that are on sale inside carousel on home page
function displaySaleProductsInCarousel(products) {
    let carouselContainer = document.getElementById('carouselItems');
    let priceDisplay = document.getElementById('priceDisplay');

    if (!carouselContainer || !priceDisplay) {
        return;
    }

    products.forEach((product, index) => {
        if (product.onSale) {
            let carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
            carouselItem.innerHTML = `<img class="d-block w-100 carousel-image" src="${product.imageUrl}" alt="${product.name}">`;
            carouselItem.dataset.price = product.price;
            carouselItem.dataset.originalPrice = product.originalPrice;
            carouselContainer.appendChild(carouselItem);
        }
    });

    $('#carouselExampleControls').on('slid.bs.carousel', function () {
        let activeItem = carouselContainer.querySelector('.carousel-item.active');
        priceDisplay.innerHTML = `<span class="carousel-price">$${activeItem.dataset.price}</span> <span <span class="carousel-old-price">$${activeItem.dataset.originalPrice}</span>`;
    });

    let initialActiveItem = carouselContainer.querySelector('.carousel-item.active');
    if (initialActiveItem) {
        priceDisplay.innerHTML = `<span class="carousel-price">$${initialActiveItem.dataset.price}</span> <span class="carousel-old-price">$${initialActiveItem.dataset.originalPrice}</span>`;
    }
}
if (document.getElementById('carouselItems')) {
    displaySaleProductsInCarousel(products);
}

//Displays all products on store page
function displayProducts(products) {
    let productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        return;
    }

    productsContainer.innerHTML = '';
    let row = document.createElement('div');
    row.className = 'row d-flex align-items-stretch';
    productsContainer.appendChild(row);

    products.forEach((product, index) => {
        let col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4 mb-4';

        let priceDisplay;
        let saleIndicator = '';
        
        if (product.onSale) {
            priceDisplay = `<p>Price: <span style="text-decoration: line-through;">$${product.originalPrice}</span> <span style="color: red;">$${product.price}</span></p>`;
            saleIndicator = `<div style="color: red; font-weight: bold; text-align: center;">SALE</div>`;
        } else {
            priceDisplay = `<p>Price: $${product.price}</p>`;
        }

        col.innerHTML = `
            <div class="card h-100"> <!-- Card with full height -->
                <img src="${product.imageUrl}" alt="${product.name}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-text">${product.description}</p>
                    <p>Genre: ${product.genre}</p>
                    <p>Platform: ${product.platform}</p>
                    <p>Release Date: ${product.releaseDate}</p>
                    ${priceDisplay}
                    <button class="btn btn-primary add-to-cart-btn" data-id="${product.name}">
                        Add to Cart
                    </button>
                    ${saleIndicator}
                </div>
            </div>
        `;
        row.appendChild(col);
    });

    attachButtonListeners();
}
//Makes items in store the same size
function setUniformDescriptionHeight() {
    let descriptions = document.querySelectorAll('.product-description');
    let maxHeight = 0;

    descriptions.forEach(description => {
        if (description.offsetHeight > maxHeight) {
            maxHeight = description.offsetHeight;
        }
    });

    descriptions.forEach(description => {
        description.style.height = maxHeight + 'px';
    });
}

//Display items in cart on cart page
function displayCartItems() {
    let cartContainer = document.getElementById('checkout-cart-container');
    if (!cartContainer) {
        return;
    }

    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let totalPrice = 0;

    cart.forEach((product, index) => {
        totalPrice += parseFloat(product.price);

        let item = `
            <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-12 col-md-3 col-lg-2">
                            <img src="${product.imageUrl}" class="img-fluid rounded-3" alt="${product.name}">
                        </div>
                        <div class="col-12 col-md-6 col-lg-7">
                            <p class="lead fw-normal mb-2">${product.name}</p>
                            <p><span class="text-muted">Price: </span>$${product.price}</p>
                        </div>
                        <div class="col-12 col-md-3 col-lg-3 text-md-end text-start mt-3 mt-md-0">
                            <h5 class="mb-0">$${product.price}</h5>
                            <button class="btn btn-danger remove-from-cart-btn" data-index="${index}"><i class="fas fa-trash fa-lg"></i> Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cartContainer.innerHTML += item;
    });

    cartContainer.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5 class="text-end">Total: $${totalPrice.toFixed(2)}</h5>
                <button class="btn btn-warning btn-block" id="clear-cart-btn">Clear Cart</button>
            </div>
        </div>
    `;

    attachRemoveButtonListeners();
    attachClearCartButtonListener();
}

//Disables checkout button if cart is empty
function updateCheckoutButtonStatus() {
    let checkoutBtn = document.getElementById('proceed-to-checkout-btn');
    if (!checkoutBtn) {
        return
    }
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let proceedToCheckoutButton = document.getElementById('proceed-to-checkout-btn');

    if (!proceedToCheckoutButton) {
        console.error('Proceed to Checkout button not found.');
        return;
    }

    if (cart.length === 0) {
        proceedToCheckoutButton.classList.add('disabled');
        proceedToCheckoutButton.removeAttribute('href');
    } else {
        proceedToCheckoutButton.classList.remove('disabled');
        proceedToCheckoutButton.setAttribute('href', 'checkout.html');
    }
}

//Display items in cart on checkout page
function displayCheckoutCartItems() {
    let cartContainer = document.getElementById('checkout-cart-items');
    if (!cartContainer) {
        return;
    }

    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
        return;
    }

    let totalPrice = 0;

    cart.forEach((product, index) => {
        totalPrice += parseFloat(product.price);

        let item = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="my-0">${product.name}</h6>
                    <small class="text-muted">Price: $${product.price}</small>
                </div>
                <span class="text-muted">$${product.price}</span>
            </li>
        `;
        cartContainer.innerHTML += item;
    });

    let totalPriceItem = `
        <li class="list-group-item d-flex justify-content-between">
            <span>Total price:</span>
            <strong>$${totalPrice.toFixed(2)}</strong>
        </li>
    `;
    cartContainer.innerHTML += totalPriceItem;
}
//Checks validation on checkout
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      var forms = document.getElementsByClassName('needs-validation')
  
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())
//-------------------------------------------------------------------------



document.addEventListener('DOMContentLoaded', function() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    if (typeof displayProducts === "function") {
        displayProducts(products);
    }
    if (typeof displayCartItems === "function") {
        displayCartItems();
        updateCheckoutButtonStatus();
    }
    if (typeof displayCheckoutCartItems === "function") {
        displayCheckoutCartItems();
    }

    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    if (typeof updateCartCount === "function") {
        updateCartCount();
    }
});

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });