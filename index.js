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

function addToCart(productId) {
    const product = products.find(p => p.name === productId);
    if (product) {
        cart.push(product);
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart); // For testing purposes
    }
    updateCartCount();
}



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


function displayProducts(products) {
    console.log("displayProducts called")
    let productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        return;
    }

    let row;

    products.forEach((product, index) => {
        if (index % 3 === 0) {
            row = document.createElement('div');
            row.className = 'row';
            productsContainer.appendChild(row);
        }

        let priceDisplay;
        let saleIndicator = '';
        
        if (product.onSale) {
            // If the product is on sale, show original price with a line through and add a SALE indicator
            priceDisplay = `<p>Price: <span style="text-decoration: line-through;">$${product.originalPrice}</span> <span style="color: red;">$${product.price}</span></p>`;
            saleIndicator = `<div style="color: red; font-weight: bold; text-align: center;">SALE</div>`;
        } else {
            // If the product is not on sale, show only the price
            priceDisplay = `<p>Price: $${product.price}</p>`;
        }

        let col = `
            <div class="col border border-5 border-black">
                <img src="${product.imageUrl}" alt="${product.name}" style="width:100%; height:auto;">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p>Genre: ${product.genre}</p>
                <p>Platform: ${product.platform}</p>
                <p>Release Date: ${product.releaseDate}</p>
                ${priceDisplay}
                <button class="btn btn-primary add-to-cart-btn" data-id="${product.name}">
                    Add to Cart
                </button>
                ${saleIndicator}
                
            </div>
        `;
        row.innerHTML += col;
    });
    attachButtonListeners();
}

function handleAddToCartClick() {
    addToCart(this.getAttribute('data-id'));
}

function attachButtonListeners() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
        button.removeEventListener('click', handleAddToCartClick);
        button.addEventListener('click', handleAddToCartClick);
    });
}


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
        priceDisplay.innerHTML = `<span style="color: black;">$${activeItem.dataset.price}</span> <span style="color: black; text-decoration: line-through;">$${activeItem.dataset.originalPrice}</span>`;
    });

    let initialActiveItem = carouselContainer.querySelector('.carousel-item.active');
    if (initialActiveItem) {
        priceDisplay.innerHTML = `<span style="color: black;">$${initialActiveItem.dataset.price}</span> <span style="color: black; text-decoration: line-through;">$${initialActiveItem.dataset.originalPrice}</span>`;
    }
}

if (document.getElementById('carouselItems')) {
    displaySaleProductsInCarousel(products);
}


function displayCartItems() {
    let cartContainer = document.getElementById('cart-container');
    if (!cartContainer) {
        return; // Exit if cart container is not found
    }

    // Load cart from local storage
    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    // Clear existing content
    cartContainer.innerHTML = '';

    // Display total price
    let totalPrice = calculateCartPrice(cart);
    let totalPriceElement = `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
    cartContainer.innerHTML = totalPriceElement;

    // Check if the cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML += '<p>Your cart is empty.</p>';
        return;
    }

    // Loop through the cart and create HTML for each item
    cart.forEach((product, index) => {
        let item = `
            <div class="cart-item">
                <img src="${product.imageUrl}" alt="${product.name}" style="width:100px; height:auto;">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="btn btn-danger remove-from-cart-btn" data-index="${index}">
                    Remove from Cart
                </button>
            </div>
        `;
        cartContainer.innerHTML += item;
    });

    attachRemoveButtonListeners();
}

function attachRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            removeFromCart(parseInt(button.getAttribute('data-index')));
        });
    });
}

function removeFromCart(index) {
    // Load cart from local storage
    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-display the cart items
    displayCartItems();
    updateCartCount();
}

function clearCart() {
    // Clear the cart array
    cart = [];

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the display
    displayCartItems();
    updateCartCount();
}



displayCartItems();

function calculateCartPrice(cart) {
    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += parseFloat(product.price);
    });
    return totalPrice;
}

function updateCartCount() {
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        let storedCart = localStorage.getItem('cart');
        let cart = storedCart ? JSON.parse(storedCart) : [];
        let itemCount = cart.length;
        cartCountElement.textContent = itemCount > 0 ? `${itemCount} items` : 'Empty';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load cart from local storage
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    // Display products and cart items
    displayProducts(products);
    displayCartItems();

    // Attach event listener to the clear cart button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    updateCartCount();
});