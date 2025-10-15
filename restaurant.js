// Menu Data for each restaurant WITH IMAGES
const menuData = {
    1: {
        name: "Pizza Paradise",
        cuisine: "Italian, Pizza",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        menu: [
            { 
                name: "Margherita Pizza", 
                description: "Classic tomato and mozzarella", 
                price: "₹250",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300"
            },
            { 
                name: "Pepperoni Pizza", 
                description: "Loaded with pepperoni", 
                price: "₹350",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300"
            },
            { 
                name: "Veggie Supreme", 
                description: "Fresh vegetables and cheese", 
                price: "₹300",
                image: "supreme.jpg"
            },
            { 
                name: "BBQ Chicken Pizza", 
                description: "Grilled chicken with BBQ sauce", 
                price: "₹400",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300"
            },
            { 
                name: "Four Cheese Pizza", 
                description: "Blend of 4 cheeses", 
                price: "₹380",
                image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=300"
            }
        ]
    },
    2: {
        name: "Burger King",
        cuisine: "Burgers, Fast Food",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        menu: [
            { 
                name: "Classic Burger", 
                description: "Lamb patty with cheese", 
                price: "₹150",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"
            },
            { 
                name: "Chicken Burger", 
                description: "Crispy chicken patty", 
                price: "₹180",
                image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300"
            },
            { 
                name: "Veggie Burger", 
                description: "Vegetarian patty", 
                price: "₹120",
                image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300"
            },
            { 
                name: "Double Decker", 
                description: "Two patties with cheese", 
                price: "₹250",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300"
            },
            { 
                name: "Spicy Burger", 
                description: "Extra spicy chicken", 
                price: "₹200",
                image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300"
            }
        ]
    },
    3: {
        name: "Chinese Wok",
        cuisine: "Chinese, Asian",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
        menu: [
            { 
                name: "Fried Rice", 
                description: "Mixed vegetable fried rice", 
                price: "₹180",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300"
            },
            { 
                name: "Chow Mein", 
                description: "Stir-fried noodles", 
                price: "₹200",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300"
            },
            { 
                name: "Spring Rolls", 
                description: "Crispy vegetable rolls", 
                price: "₹120",
                image: "https://images.unsplash.com/photo-1679310290259-78d9eaa32700?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600?w=300"
            },
            { 
                name: "Manchurian", 
                description: "Spicy vegetable balls", 
                price: "₹150",
                image: "manchurian.jpg"
            },
            { 
                name: "Hakka Noodles", 
                description: "Indo-Chinese noodles", 
                price: "₹220",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300"
            }
        ]
    },
    4: {
        name: "Spice Garden",
        cuisine: "Indian, North Indian",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
        menu: [
            { 
                name: "Butter Chicken", 
                description: "Creamy tomato curry", 
                price: "₹320",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300"
            },
            { 
                name: "Paneer Tikka", 
                description: "Grilled cottage cheese", 
                price: "₹280",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300"
            },
            { 
                name: "Biryani", 
                description: "Aromatic rice with spices", 
                price: "₹300",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300"
            },
            { 
                name: "Dal Makhani", 
                description: "Black lentils in butter", 
                price: "₹200",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300"
            },
            { 
                name: "Naan", 
                description: "Indian flatbread", 
                price: "₹40",
                image: "naan.jpg"
            }
        ]
    },
    5: {
        name: "Sweet Delights",
        cuisine: "Desserts, Bakery",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
        menu: [
            { 
                name: "Chocolate Cake", 
                description: "Rich chocolate layers", 
                price: "₹150",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300"
            },
            { 
                name: "Cheesecake", 
                description: "Creamy New York style", 
                price: "₹180",
                image: "cheeseck.jpg"
            },
            { 
                name: "Brownie", 
                description: "Fudgy chocolate brownie", 
                price: "₹100",
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300"
            },
            { 
                name: "Pastry", 
                description: "Assorted flavors", 
                price: "₹80",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300"
            },
            { 
                name: "Ice Cream", 
                description: "Various flavors", 
                price: "₹120",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300"
            }
        ]
    },
    6: {
        name: "Fresh Juice Bar",
        cuisine: "Beverages, Healthy",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800",
        menu: [
            { 
                name: "Orange Juice", 
                description: "Freshly squeezed", 
                price: "₹80",
                image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300"
            },
            { 
                name: "Mango Smoothie", 
                description: "Thick and creamy", 
                price: "₹100",
                image: "mango.jpg"
            },
            { 
                name: "Green Detox", 
                description: "Healthy vegetable blend", 
                price: "₹120",
                image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300"
            },
            { 
                name: "Berry Blast", 
                description: "Mixed berry juice", 
                price: "₹110",
                image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300"
            },
            { 
                name: "Watermelon Juice", 
                description: "Refreshing summer drink", 
                price: "₹70",
                image: "watermelon.jpg"
            }
        ]
    }
};

// Get restaurant ID from URL
const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get('id');

// Load Restaurant Details
if (restaurantId && menuData[restaurantId]) {
    const restaurant = menuData[restaurantId];
    
    // Load Header
    const header = document.getElementById('restaurantHeader');
    if (header) {
        header.innerHTML = `
            <h1>${restaurant.name}</h1>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">
                <i class="fas fa-tag"></i> ${restaurant.cuisine} • 
                <i class="fas fa-star"></i> ${restaurant.rating}
            </p>
        `;
    }
    
    // Load Menu WITH IMAGES
    const menuContainer = document.getElementById('menuContainer');
    if (menuContainer) {
        menuContainer.innerHTML = `
            <h2 style="margin-bottom: 2rem; color: var(--primary-color);">Menu</h2>
            ${restaurant.menu.map(item => `
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                    <div class="menu-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="menu-item-price">
                        <span class="price">${item.price}</span>
                        <button class="btn-add" onclick="addToCart('${item.name}', '${item.price}')">
                            <i class="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            `).join('')}
        `;
    }
}

// Add to Cart Function
function addToCart(itemName, price) {
    alert(`${itemName} (${price}) added to cart!`);
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
    }
}
