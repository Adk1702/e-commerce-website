// PRODUCT DATA (WITH REVIEWS)
const products = [
  {
    productName: "Phone",
    price: 15000,
    category: "best",
    stock: 10,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reviews: ["Great phone!", "Worth the price"]
  },
  {
    productName: "Watch",
    price: 3000,
    category: "best",
    stock: 5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    reviews: ["Stylish!", "Loved it"]
  },
  {
    productName: "Shoes",
    price: 2000,
    category: "best",
    stock: 8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    reviews: ["Very comfortable"]
  },
  {
    productName: "Bag",
    price: 1200,
    category: "best",
    stock: 6,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    reviews: ["Good quality"]
  }
];


// DISPLAY PRODUCTS (4 PER ROW)
function displayProducts(type = "all") {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  const filtered = products.filter(p => p.category === type);

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.productName}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}


// DISPLAY REVIEWS
function displayReviews() {
  const reviewBox = document.getElementById("reviews");
  if (!reviewBox) return;

  reviewBox.innerHTML = "";

  products.forEach(p => {
    p.reviews.forEach(r => {
      reviewBox.innerHTML += `
        <div class="review-card">
          <h4>${p.productName}</h4>
          <p>${r}</p>
        </div>
      `;
    });
  });
}


// IMAGE SLIDER
let images = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
];

let i = 0;

setInterval(() => {
  const img = document.getElementById("slider-img");
  if (!img) return;

  img.src = images[i];
  i = (i + 1) % images.length;
}, 2000);


// NEWSLETTER VALIDATION
const form = document.getElementById("newsletter");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (email === "" || !email.includes("@")) {
      alert("Enter valid email");
    } else {
      alert("Subscribed successfully!");
    }
  });
}


// CALL FUNCTIONS
displayProducts("best");
displayReviews();
