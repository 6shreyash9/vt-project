// Restaurant Data
const restaurants = [
    {
        id: 1,
        name: "Pizza Paradise",
        cuisine: "Italian, Pizza",
        rating: 4.5,
        time: "30-35 min",
        price: "₹200 for one",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        menuPage: "restaurant.html?id=1"
    },
    {
        id: 2,
        name: "Burger King",
        cuisine: "Burgers, Fast Food",
        rating: 4.2,
        time: "25-30 min",
        price: "₹150 for one",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        menuPage: "restaurant.html?id=2"
    },
    {
        id: 3,
        name: "Chinese Wok",
        cuisine: "Chinese, Asian",
        rating: 4.3,
        time: "35-40 min",
        price: "₹250 for one",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
        menuPage: "restaurant.html?id=3"
    },
    {
        id: 4,
        name: "Spice Garden",
        cuisine: "Indian, North Indian",
        rating: 4.6,
        time: "40-45 min",
        price: "₹300 for one",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
        menuPage: "restaurant.html?id=4"
    },
    {
        id: 5,
        name: "Sweet Delights",
        cuisine: "Desserts, Bakery",
        rating: 4.4,
        time: "20-25 min",
        price: "₹100 for one",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
        menuPage: "restaurant.html?id=5"
    },
    {
        id: 6,
        name: "Fresh Juice Bar",
        cuisine: "Beverages, Healthy",
        rating: 4.1,
        time: "15-20 min",
        price: "₹80 for one",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500",
        menuPage: "restaurant.html?id=6"
    }
];

// Load Restaurants
function loadRestaurants() {
    const restaurantGrid = document.getElementById('restaurantGrid');
    if (!restaurantGrid) return;
    
    restaurantGrid.innerHTML = restaurants.map(r => `
        <div class="restaurant-card" onclick="window.location.href='${r.menuPage}'">
            <img src="${r.image}" alt="${r.name}" class="restaurant-img">
            <div class="restaurant-info">
                <h3>${r.name}</h3>
                <p><i class="fas fa-tag"></i> ${r.cuisine}</p>
                <p><i class="fas fa-star"></i> ${r.rating} • <i class="fas fa-clock"></i> ${r.time}</p>
                <p><i class="fas fa-rupee-sign"></i> ${r.price}</p>
            </div>
        </div>
    `).join('');
}

// Zomato/Swiggy Style Search
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length > 0) {
            const results = restaurants.filter(restaurant => 
                restaurant.name.toLowerCase().includes(query) ||
                restaurant.cuisine.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                let html = results.map(r => `
                    <div class="search-result-item" onclick="window.location.href='${r.menuPage}'">
                        <div class="search-result-icon">🍽️</div>
                        <div class="search-result-info">
                            <h4>${r.name}</h4>
                            <p>${r.cuisine} • ${r.time} • ${r.price}</p>
                        </div>
                    </div>
                `).join('');
                searchResults.innerHTML = html;
                searchResults.classList.add('active');
            } else {
                searchResults.innerHTML = `
                    <div class="no-results">
                        <p>No restaurants found</p>
                    </div>
                `;
                searchResults.classList.add('active');
            }
        } else {
            searchResults.classList.remove('active');
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-wrapper')) {
            searchResults.classList.remove('active');
        }
    });
}

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active state
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        }
    });
});

// Contact Form Submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent successfully! We will get back to you soon.');
        this.reset();
    });
}

// Initialize
loadRestaurants();
