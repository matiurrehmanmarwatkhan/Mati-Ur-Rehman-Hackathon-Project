const products = [
  {
    id: 1,
    image: "../image/1.jpg",
    name: "Wireless Mouse",
    price: 1200,
    button: "Add to Cart",
    rating: 4.5,
  },
  {
    id: 2,
    image: "../image/2.jpg",
    name: "Gaming Keyboard",
    price: 3500,
    button: "Add to Cart",
    rating: 4.2,
  },
  {
    id: 3,
    image: "../image/3.jpg",
    name: "Bluetooth Headphones",
    price: 4200,
    button: "Add to Cart",
    rating: 4.7,
  },
  {
    id: 4,
    image: "../image/4.jpg",
    name: "Smart Watch",
    price: 6500,
    button: "Add to Cart",
    rating: 4.3,
  },
  {
    id: 5,
    image: "../image/5.jpg",
    name: "Laptop Stand",
    price: 1800,
    button: "Add to Cart",
    rating: 4.0,
  },
  {
    id: 6,
    image: "../image/6.jpg",
    name: "USB-C Hub",
    price: 2500,
    button: "Add to Cart",
    rating: 4.4,
  },
  {
    id: 7,
    image: "../image/7.jpg",
    name: "External Hard Drive",
    price: 7200,
    button: "Add to Cart",
    rating: 4.6,
  },
  {
    id: 8,
    image: "../image/8.jpg",
    name: "Webcam HD",
    price: 3100,
    button: "Add to Cart",
    rating: 4.1,
  },
  {
    id: 9,
    image: "../image/9.jpg",
    name: "Portable Speaker",
    price: 2800,
    button: "Add to Cart",
    rating: 4.5,
  },
  {
    id: 10,
    image: "../image/10.jpg",
    name: "LED Monitor",
    price: 18500,
    button: "Add to Cart",
    rating: 4.8,
  },
  {
    id: 11,
    image: "../image/11.jpg",
    name: "Mechanical Keyboard",
    price: 5400,
    button: "Add to Cart",
    rating: 4.7,
  },
  {
    id: 12,
    image: "../image/12.jpg",
    name: "Gaming Chair",
    price: 22000,
    button: "Add to Cart",
    rating: 4.4,
  },
  {
    id: 13,
    image: "../image/13.jpg",
    name: "Power Bank",
    price: 2000,
    button: "Add to Cart",
    rating: 4.3,
  },
  {
    id: 14,
    image: "../image/14.jpg",
    name: "Wireless Charger",
    price: 2300,
    button: "Add to Cart",
    rating: 4.2,
  },
  {
    id: 15,
    image: "../image/15.jpg",
    name: "Tablet Stand",
    price: 1500,
    button: "Add to Cart",
    rating: 4.0,
  },
  {
    id: 16,
    image: "../image/16.jpg",
    name: "Smartphone Tripod",
    price: 1700,
    button: "Add to Cart",
    rating: 4.1,
  },
  {
    id: 17,
    image: "../image/17.jpg",
    name: "Noise Cancelling Earbuds",
    price: 4800,
    button: "Add to Cart",
    rating: 4.5,
  },
  {
    id: 18,
    image: "../image/18.jpg",
    name: "Graphics Tablet",
    price: 9000,
    button: "Add to Cart",
    rating: 4.6,
  },
  {
    id: 19,
    image: "../image/19.jpg",
    name: "Router Dual Band",
    price: 6000,
    button: "Add to Cart",
    rating: 4.3,
  },
  {
    id: 20,
    image: "../image/20.jpg",
    name: "SSD 1TB",
    price: 12500,
    button: "Add to Cart",
    rating: 4.5,
  },
  {
    id: 21,
    image: "../image/21.jpg",
    name: "USB Microphone",
    price: 3700,
    button: "Add to Cart",
    rating: 4.2,
  },
  {
    id: 22,
    image: "../image/22.jpg",
    name: "VR Headset",
    price: 15000,
    button: "Add to Cart",
    rating: 4.4,
  },
  {
    id: 23,
    image: "../image/23.jpg",
    name: "Fitness Band",
    price: 3200,
    button: "Add to Cart",
    rating: 4.1,
  },
  {
    id: 24,
    image: "../image/24.jpg",
    name: "Smart LED Bulb",
    price: 1400,
    button: "Add to Cart",
    rating: 4.0,
  },
];

const container = document.getElementById("productContainer");

products.forEach((product) => {
  // Card
  const card = document.createElement("div");
  card.className =
    "bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition flex flex-col";
  const img = document.createElement("img");
  img.src = product.image;
  img.className = "w-full h-48 object-cover rounded-lg";

  const name = document.createElement("h2");
  name.textContent = product.name;
  name.className = "text-xl font-bold mt-3";

  const price = document.createElement("p");
  price.textContent = "Rs " + product.price;
  price.className = "text-blue-600 font-semibold";

  const rating = document.createElement("p");
  rating.textContent = "⭐ " + product.rating;
  rating.className = "text-yellow-500";

  const btnDiv = document.createElement("div");
  btnDiv.className = "flex justify-between mt-4";

  const cartBtn = document.createElement("button");
  cartBtn.textContent = "Add to Cart";
  cartBtn.setAttribute("onclick", "addToCart(" + product.id + ")");
  cartBtn.className =
    "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ";

  cartBtn.addEventListener("click", () => {
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart ✅");
  });

  const wishBtn = document.createElement("button");
  wishBtn.textContent = "❤️";
  wishBtn.className =
    "bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600";

  wishBtn.addEventListener("click", () => {
    alert(product.name + " added to wishlist");
  });

  btnDiv.appendChild(cartBtn);
  btnDiv.appendChild(wishBtn);

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(rating);
  card.appendChild(btnDiv);

  container.appendChild(card);
});

// Loacal Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

// Add to cart and show card
function cartitem() {
  const cartBox = document.getElementById("cartBox");
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  cartBox.innerHTML = "";

  cartData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "border-b py-2";

    div.innerHTML = `
      <p class="font-bold">${item.name}</p>
      <p class="text-blue-500">Rs ${item.price}</p>
    `;

    cartBox.appendChild(div);
  });

  cartBox.classList.toggle("hidden");
}
// Decrease quantity
function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  cartitem();
}

// Increase quantity
function increaseQty(index) {
  cart[index].quantity++;

  localStorage.setItem("cart", JSON.stringify(cart));
  cartitem();
  updateCartCount();
}
