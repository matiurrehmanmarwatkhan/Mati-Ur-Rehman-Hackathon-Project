//  DATA
const products = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    name: "Wireless Mouse",
    price: 1200,
    rating: 4.5,
    category: "Electronics",
    brand: "Logitech",
    inStock: true,
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    name: "Gaming Keyboard",
    price: 3500,
    rating: 4.7,
    category: "Electronics",
    brand: "Razer",
    inStock: true,
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    name: "Bluetooth Headphones",
    price: 4200,
    rating: 4.6,
    category: "Audio",
    brand: "Sony",
    inStock: true,
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    name: "Smart Watch",
    price: 6500,
    rating: 4.8,
    category: "Wearables",
    brand: "Apple",
    inStock: true,
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    name: "Laptop Stand",
    price: 2800,
    rating: 4.3,
    category: "Accessories",
    brand: "Amazon Basics",
    inStock: true,
  },
  {
    id: 6,
    imgUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    name: "Smartphone",
    price: 45000,
    rating: 4.9,
    category: "Mobiles",
    brand: "Samsung",
    inStock: true,
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    name: "Camera Lens",
    price: 15000,
    rating: 4.6,
    category: "Photography",
    brand: "Canon",
    inStock: false,
  },
  {
    id: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400",
    name: "Gaming Chair",
    price: 22000,
    rating: 4.7,
    category: "Furniture",
    brand: "DXRacer",
    inStock: true,
  },
  {
    id: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    name: "Sneakers Shoes",
    price: 3200,
    rating: 4.4,
    category: "Fashion",
    brand: "Nike",
    inStock: true,
  },
  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    name: "T-Shirt",
    price: 1200,
    rating: 4.2,
    category: "Fashion",
    brand: "H&M",
    inStock: true,
  },
  {
    id: 11,
    imgUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
    name: "Perfume",
    price: 2800,
    rating: 4.5,
    category: "Beauty",
    brand: "Davidoff",
    inStock: true,
  },
  {
    id: 12,
    imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    name: "Running Shoes",
    price: 5500,
    rating: 4.8,
    category: "Sports",
    brand: "Adidas",
    inStock: true,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Gaming Accessories",
    excerpt: "Must-have gaming accessories for 2024",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    category: "gaming",
    author: "Alex Chen",
    date: "2024-01-15",
    likes: 234,
  },
  {
    id: 2,
    title: "Sustainable Fashion Trends",
    excerpt: "Eco-friendly fashion is taking over",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400",
    category: "fashion",
    author: "Sarah Johnson",
    date: "2024-01-12",
    likes: 189,
  },
  {
    id: 3,
    title: "Future of AI in Shopping",
    excerpt: "How AI is revolutionizing online shopping",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
    category: "technology",
    author: "Mike Williams",
    date: "2024-01-10",
    likes: 312,
  },
];

//  STATE
let cart = [];
let isLoggedIn = false;
let currentUser = null;

//  INITIALIZE
document.addEventListener("DOMContentLoaded", function () {
  // Check login status
  checkLoginStatus();

  // Load products
  displayProducts();

  // Load blog posts
  displayBlogPosts();

  // Initialize slider
  initializeSlider();

  // Initialize event listeners
  initializeEventListeners();

  // Show home page by default
  showPage("home");
});

//  LOGIN FUNCTIONS
function checkLoginStatus() {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    isLoggedIn = true;
    currentUser = JSON.parse(savedUser);
    updateUIForLogin();
  }
}

function updateUIForLogin() {
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("logoutBtn").classList.remove("hidden");
  const userEmailDisplay = document.getElementById("userEmailDisplay");
  userEmailDisplay.textContent = currentUser?.email || "User";
  userEmailDisplay.classList.remove("hidden");

  // Show notification
  showNotification(`Welcome back, ${currentUser?.email}!`, "success");
}

function updateUIForLogout() {
  document.getElementById("loginBtn").style.display = "block";
  document.getElementById("logoutBtn").classList.add("hidden");
  document.getElementById("userEmailDisplay").classList.add("hidden");
}

//  PAGE NAVIGATION
function showPage(page) {
  // Hide all pages
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("blogPage").classList.add("hidden");
  document.getElementById("aboutPage").classList.add("hidden");
  document.getElementById("contactPage").classList.add("hidden");

  // Show selected page
  document.getElementById(page + "Page").classList.remove("hidden");

  // Update active nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("text-blue-600");
    } else {
      link.classList.remove("text-blue-600");
    }
  });
}

//  SLIDER
function initializeSlider() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
  }, 3000);
}

//  PRODUCTS
function displayProducts() {
  const container = document.getElementById("productContainer");
  if (!container) return;

  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2";

    card.innerHTML = `
            <div class="relative overflow-hidden group">
                <img src="${product.imgUrl}" alt="${product.name}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                <span class="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">${product.category}</span>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800 mb-1">${product.name}</h3>
                <div class="flex items-center mb-2">
                    ${"⭐".repeat(Math.floor(product.rating))}${product.rating % 1 ? "½" : ""}
                    <span class="text-xs text-gray-500 ml-1">(${product.rating})</span>
                </div>
                <div class="flex items-center justify-between mt-3">
                    <span class="text-xl font-bold text-gray-800">Rs ${product.price.toLocaleString()}</span>
                    <button onclick="addToCart(${product.id})" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm">
                        <i class="fa-solid fa-cart-plus mr-2"></i>Add
                    </button>
                </div>
            </div>
        `;

    container.appendChild(card);
  });
}

//  BLOG
function displayBlogPosts(category = "all") {
  const container = document.getElementById("blogContainer");
  if (!container) return;

  const filtered =
    category === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === category);

  container.innerHTML = "";

  filtered.forEach((post) => {
    const card = document.createElement("article");
    card.className =
      "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all";

    card.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex items-center text-sm text-gray-500 mb-2">
                    <span>${post.date}</span>
                    <span class="mx-2">•</span>
                    <span>${post.likes} likes</span>
                </div>
                <h3 class="text-xl font-bold mb-2">${post.title}</h3>
                <p class="text-gray-600 mb-4">${post.excerpt}</p>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-700">${post.author}</span>
                    <button class="text-blue-600 hover:text-blue-700">Read More →</button>
                </div>
            </div>
        `;

    container.appendChild(card);
  });
}

//  CART FUNCTIONS
function addToCart(productId) {
  if (!isLoggedIn) {
    showNotification("Please login first!", "error");
    openLoginModal();
    return;
  }

  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
    showNotification(`${product.name} added to cart!`, "success");
  }
}

function removeFromCart(index) {
  const removed = cart[index];
  cart.splice(index, 1);
  updateCart();
  showNotification(`${removed.name} removed from cart`, "error");
}

function updateCart() {
  const count = document.getElementById("cartCount");
  const itemCount = document.getElementById("cartItemCount");
  const totalSpan = document.getElementById("cartTotal");
  const itemsContainer = document.getElementById("cartItems");

  count.textContent = cart.length;
  itemCount.textContent = `${cart.length} ${cart.length === 1 ? "item" : "items"}`;

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalSpan.textContent = `Rs ${total.toLocaleString()}`;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fa-solid fa-bag-shopping text-4xl mb-2 opacity-30"></i>
                <p class="text-sm">Your cart is empty</p>
            </div>
        `;
  } else {
    let html = "";
    cart.forEach((item, index) => {
      html += `
                <div class="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                    <img src="${item.imgUrl}" class="w-12 h-12 object-cover rounded-lg">
                    <div class="flex-1">
                        <h4 class="text-sm font-semibold">${item.name}</h4>
                        <p class="text-xs text-gray-500">Rs ${item.price}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
    });
    itemsContainer.innerHTML = html;
  }
}

//  NOTIFICATIONS
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-500 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  } text-white`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

//  MODAL FUNCTIONS
function openLoginModal() {
  document.getElementById("loginModal").classList.remove("hidden");
  document.getElementById("loginModal").classList.add("flex");
}

function closeLoginModal() {
  document.getElementById("loginModal").classList.add("hidden");
  document.getElementById("loginModal").classList.remove("flex");
}

//  EVENT LISTENERS
function initializeEventListeners() {
  // Page navigation
  document.querySelectorAll("[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(link.dataset.page);
    });
  });

  // Cart dropdown
  document.getElementById("cartButton").addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById("cartDropdown");
    dropdown.classList.toggle("hidden");
  });

  // User dropdown
  document.getElementById("userButton").addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById("userDropdown");
    dropdown.classList.toggle("hidden");
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.getElementById("cartDropdown").classList.add("hidden");
    document.getElementById("userDropdown").classList.add("hidden");
    document.getElementById("mobileMenu").classList.add("hidden");
  });

  // Mobile menu
  document.getElementById("mobileMenuBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  });

  // Login modal
  document.getElementById("loginBtn").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openLoginModal();
  });

  document
    .getElementById("closeLoginModal")
    .addEventListener("click", closeLoginModal);

  // Login form
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "user@example.com" && password === "password123") {
      isLoggedIn = true;
      currentUser = { email };
      localStorage.setItem("user", JSON.stringify(currentUser));
      updateUIForLogin();
      closeLoginModal();
      showNotification("Login successful!", "success");
    } else {
      showNotification("Invalid credentials!", "error");
    }
  });

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    isLoggedIn = false;
    currentUser = null;
    localStorage.removeItem("user");
    updateUIForLogout();
    showNotification("Logged out successfully!", "success");
  });

  // Blog category filters
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".category-btn").forEach((b) => {
        b.classList.remove("bg-blue-600", "text-white");
        b.classList.add("bg-gray-200", "text-gray-700");
      });
      this.classList.add("bg-blue-600", "text-white");
      this.classList.remove("bg-gray-200", "text-gray-700");

      displayBlogPosts(this.dataset.category);
    });
  });
}
